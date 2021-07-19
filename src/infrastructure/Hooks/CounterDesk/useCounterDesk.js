import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import {
  COMPROBAR_APERTURA_CAJON,
  GET_ACTIVE_CASH_DESK,
  OPEN_CASH_DESK,
} from '../../api/counterDesk'
import {
  actionCheckOpen,
  actionCheckOpenSuccess,
  actionSetCounterDesk,
  actionSetCounterDeskFail,
  actionSetCounterDeskSuccess,
} from '../../redux/actions/counterDesk'
import { useGql } from '../useGql'

export const useCounterDesk = (idCounter = 1) => {
  const { getError } = useGql()
  const usuario = useSelector((state) => state.userReducer.usuario)
  const dispatch = useDispatch()
  const counterDeskReducer = useSelector((state) => state.counterDeskReducer)
  const [checkOpenCash] = useMutation(COMPROBAR_APERTURA_CAJON, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (
        data &&
        data.comprobarAperturaCajon &&
        data.comprobarAperturaCajon.id
      ) {
        dispatch(actionCheckOpenSuccess(true))
      } else {
        dispatch(actionCheckOpenSuccess(false))
      }
    },
  })
  const [getActiveCashDesh, { loading }] = useMutation(GET_ACTIVE_CASH_DESK, {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
    nextFetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (data && data.cajonActivo) {
        const inputs = {
          open: false,
          ...data.cajonActivo,
        }
        dispatch(actionSetCounterDeskSuccess(inputs))
        const { id } = data.cajonActivo
        dispatch(actionCheckOpen())
        checkOpenCash({
          variables: {
            cajon_id: Number(id),
          },
        })
      }
    },
    onError: (error) => {
      const err = { ...error }
      const errors =
        err && err.graphQLErrors ? getError(err.graphQLErrors) : true
      dispatch(actionSetCounterDeskFail(errors))
    },
  })
  const [openCashDesh, { loading: openCashDeshLoading }] = useMutation(
    OPEN_CASH_DESK,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      onCompleted: (data) => {
        if (data && data.abrirCajon && data.abrirCajon.id)
          dispatch(actionCheckOpenSuccess(true))
        else dispatch(actionCheckOpenSuccess(false))
      },
      onError: () => {
        dispatch(actionCheckOpenSuccess(false))
      },
    },
  )

  const activeCashDesk = () => {
    dispatch(actionSetCounterDesk())
    getActiveCashDesh({
      variables: { input: { mostrador_id: idCounter } },
    })
  }

  const openCashDesk = (saldo_apertura) => {
    dispatch(actionCheckOpen())
    openCashDesh({
      variables: {
        input: {
          mostrador_id: idCounter,
          usuario_id: usuario.id,
          saldo_apertura,
        },
      },
    })
  }

  return {
    activeCashDesk,
    openCashDesk,
    loading,
    openCashDeshLoading,
    openCashDesh,
    counterDeskReducer,
  }
}

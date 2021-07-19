import { useMutation } from '@apollo/client'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { CASHDESK,  OPEN_CHECKOUT } from '../../api/checkout/TPV'
import { CHECK_APERTURE_CASHDESK } from '../../api/TPV'
import {
  actionOpenWorkstation,
  actionOpenWorkstationFailed,
  actionOpenWorkstationSuccess,
  actionSetWorkstation,
  actionSetWorkstationFailed,
  actionSetWorkstationSuccess,
} from '../../redux/actions/workstation'

const formatPaymentsModes = (data) => {
  const payments = []
  try {
    if (data)
      data.map((i) => {
        payments.push({
          id: i.id,
          description: i.descripcion,
          cash: i.es_efectivo,
          voucher: i.es_vale,
          credit: i.marcar_lineas,
        })
        return null
      })
  } catch (error) {
    return []
  }

  return payments
}

const formatData = (data) => {
  const { id, nombre, descripcion, caja, mostradorPeriferico, almacen } = data
  return {
    selfService: caja.autonoma,
    paymentModes: formatPaymentsModes(caja.cajaFormaPagos),
    code: caja.codigo,
    id: caja.id,
    name: caja.nombre,
    visible: true,
    cashDesk: {
      id,
      name: nombre,
      description: descripcion,
      peripherals: [...mostradorPeriferico],
      warehouse: { id: almacen.id, name: almacen.nombre },
    },
  }
}

export const useCheckout = (hash) => {
  const [checkout, setCheckout] = useState({})
  const [checkIsOpen] = useMutation(CHECK_APERTURE_CASHDESK)
  const [openChekout] = useMutation(OPEN_CHECKOUT)
  const [getCashDesk] = useMutation(CASHDESK)
  const dispatch = useDispatch()

  const confirmCheckout = async (hashId = hash, setRedux = true) => {
    if (!Number(hashId)) {
      setCheckout(null)
      return null
    }

    if (setRedux) dispatch(actionSetWorkstation())

    try {
      const res = await getCashDesk({
        variables: {
          id: hashId,
        },
      })
      const format = formatData(res.data.mostrador)
      const {
        data: { comprobarAperturaCaja },
      } = await checkIsOpen({
        variables: {
          caja_id: format.id,
        },
      })
      if (comprobarAperturaCaja) {
        format.isOpen = true
      } else {
        format.isOpen = false
      }
      if (setRedux) dispatch(actionSetWorkstationSuccess(format))
      return format
    } catch (error) {
      if (setRedux) dispatch(actionSetWorkstationFailed())
      return false
    }
  }

  const handleOpen = async (user, openValue, cashDesk) => {
    dispatch(actionOpenWorkstation())
    try {
      const {
        data: { abrirCaja },
      } = await openChekout({
        variables: {
          input: {
            caja_id: checkout.id || hash,
            usuario_id: Number(user.id),
            saldo_apertura: Number(openValue),
            mostrador_id: cashDesk.id,
          },
        },
      })
      if (abrirCaja) {
        dispatch(actionOpenWorkstationSuccess())
        return true
      }
    } catch (error) {
      dispatch(actionOpenWorkstationFailed())
      return false
    }

    return false
  }

  // useEffect(() => {
  //   if (token) confirmCheckout()
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [])

  return { checkout, handleOpen, confirmCheckout }
}

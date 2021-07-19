import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OBTENER_AREA_PRIVADA, URL_AREA_PRIVADA } from '../api/login'
import { actionUpdateUser } from '../redux/actions/user'

export const useAreaPrivada = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.usuario)
  const urlAreaprivada = useSelector(
    (state) => state.userReducer.usuario.urlAreaprivada,
  )
  const [openModalCredenciales, setOpenModalCredenciales] = useState(false)

  const [getAreaPrivada] = useMutation(URL_AREA_PRIVADA, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    onCompleted: (d) => {
      if (d && d.obtenerSemillaLoginIofnet) {
        dispatch(
          actionUpdateUser(
            {
              id: user.id,
              urlAreaprivada: d.obtenerSemillaLoginIofnet.url_acceso_iofnet,
            },
            false,
          ),
        )
      }
    },
  })

  const [obtenerAreaPrivada, { loading: loadingObtener }] = useMutation(
    OBTENER_AREA_PRIVADA,
    {
      errorPolicy: 'ignore',
      fetchPolicy: 'no-cache',
      onCompleted: (res) => {
        if (res && res.guardarCredencialesAreaprivada) {
          dispatch(
            actionUpdateUser(
              {
                id: user.id,
                urlAreaprivada:
                  res.guardarCredencialesAreaprivada.url_acceso_iofnet,
              },
              false,
            ),
          )
        }
      },
    },
  )

  return {
    getAreaPrivada,
    urlAreaprivada,
    openModalCredenciales,
    setOpenModalCredenciales,
    obtenerAreaPrivada,
    loadingObtener,
  }
}

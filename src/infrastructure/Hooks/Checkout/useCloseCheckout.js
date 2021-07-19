import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ARQUEO_CHECKOUT, CLOSE_CHECKOUT } from '../../api/checkout/TPV'

const formatData = (data) => ({
  checkout: data.caja,
  openCash: data.saldo_apertura,
  total: data.saldo_teorico,
  movements: data.total_movimientos,
  user: data.usuario,
  details: data.detalle_movimientos,
})
export const useCloseCheckout = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [close, { loading: loadingClose, error: errorClose }] = useMutation(
    CLOSE_CHECKOUT,
  )

  const [
    arqueoCheckout,
    { loading: loadingArqueo, error: errorArqueo },
  ] = useMutation(ARQUEO_CHECKOUT)
  const checkout = useSelector((state) => state.workstationReducer.workstation)

  const [error, setError] = useState(false)

  useEffect(() => {
    if ((loadingArqueo, loadingClose)) setLoading(true)
    else setLoading(false)
  }, [loadingArqueo, loadingClose])

  useEffect(() => {
    if ((errorArqueo, errorClose)) setError(true)
    else setError(false)
  }, [errorArqueo, errorClose])

  const user = useSelector((state) => state.userReducer.user)
  const workstation = useSelector(
    (state) => state.workstationReducer.workstation,
  )

  const getArqueo = async () => {
    const input = {
      caja_id: checkout.id,
      usuario_id: user.id,
    }

    const {
      data: { arquearCaja },
    } = await arqueoCheckout({ variables: { input } })
    const format = formatData(arquearCaja)
    setData(format)
    return true
  }
  useEffect(() => {
    getArqueo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeCheckout = async (count, fondo) => {
    try {
      const input = {
        caja_id: data.checkout.id,
        mostrador_id: workstation.cashDesk.id,
        usuario_id: Number(user.id),
        saldo_real: count,
        importe_retirado: Number(fondo),
        validado: true,
      }
      const res = await close({ variables: { input } })
      const format = formatData(res.data.cerrarCaja)
      return format
    } catch (err) {
      return false
    }
  }
  return {
    loading,
    error,
    data,
    closeCheckout,
  }
}

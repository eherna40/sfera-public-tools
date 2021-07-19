import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/ca'
import 'moment/locale/es'
import { useSelector } from 'react-redux'

const Clock = () => {
  const { usuario } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (usuario.idioma) {
      moment.locale(usuario.idioma.codigo)
    }
  }, [usuario])

  const [time, setTime] = useState('')

  useEffect(() => {
    const interval = setInterval(
      () => setTime(moment().format('dddd D - HH:mm:ss')),
      1000,
    )

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <span
      style={{ width: '130px', textAlign: 'center' }}
      className="Clock tw-text-white tw-text-xs tw-mx-1 tw-capitalize tw-font-bold"
    >
      {time}
    </span>
  )
}

export default Clock

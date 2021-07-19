import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCounterDesk } from '../../infrastructure/Hooks/CounterDesk/useCounterDesk'

const CounterDesk = () => {
  const token = useSelector((state) => state.userReducer.token)
  const counterDeskReducer = useSelector((state) => state.counterDeskReducer)
  const softwareReducer = useSelector((state) => state.softwareReducer)
  const { activeCashDesk } = useCounterDesk()

  useEffect(() => {
    if (token) activeCashDesk()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])


  return (
    <div id="deskCounter">
      {softwareReducer && softwareReducer.software.id === '100' && (
        <span className="tw-text-xs tw-text-white tw-mr-2">
          {`${
            counterDeskReducer &&
            !counterDeskReducer.loading &&
            counterDeskReducer.data
              ? `${counterDeskReducer.data.nombre} ${counterDeskReducer.data.mostrador.nombre}`
              : ''
          }`}
        </span>
      )}
    </div>
  )
}

CounterDesk.propTypes = {}

export default CounterDesk

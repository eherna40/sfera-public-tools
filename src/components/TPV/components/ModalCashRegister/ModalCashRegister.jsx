import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../../Modal/Draggable/Draggable'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import CashForm from './components/CashForm/CashForm'
import RightForm from './components/RightForm/RightForm'
import Footer from '../../../Modal/Draggable/Footer/Footer'
import CoinsForm from './components/CoinsForm/CoinsForm'
import IcCash500 from '../../../commons/Icons/IcCash500'
import IcCash200 from '../../../commons/Icons/IcCash200'
import IcCash100 from '../../../commons/Icons/IcCash100'
import IcCash50 from '../../../commons/Icons/IcCash50'
import IcCash20 from '../../../commons/Icons/IcCash20'
import IcCash10 from '../../../commons/Icons/IcCash10'
import IcCash5 from '../../../commons/Icons/IcCash5'
import Coin from '../../../Coin/Coin'

const dataTotal = 15000

const ModalCashRegister = ({ toggle }) => {
  const [money, setMoney] = useState([
    {
      name: '500E',
      value: 0,
      total: 0,
      key: '500',
      type: 'bills',
      multiplicator: 500,
      component: <IcCash500 />,
    },
    {
      name: '200E',
      value: 0,
      total: 0,
      key: '200',
      type: 'bills',
      multiplicator: 200,
      component: <IcCash200 />,
    },
    {
      name: '100E',
      value: 0,
      total: 0,
      key: '100',
      type: 'bills',
      multiplicator: 100,
      component: <IcCash100 />,
    },
    {
      name: '50E',
      value: 0,
      total: 0,
      key: '50',
      type: 'bills',
      multiplicator: 50,
      component: <IcCash50 />,
    },
    {
      name: '20E',
      value: 0,
      total: 0,
      key: '20',
      type: 'bills',
      multiplicator: 20,
      component: <IcCash20 />,
    },
    {
      name: '10E',
      value: 0,
      total: 0,
      key: '10',
      type: 'bills',
      multiplicator: 10,
      component: <IcCash10 />,
    },
    {
      name: '5E',
      value: 0,
      total: 0,
      key: '5',
      type: 'bills',
      multiplicator: 5,
      component: <IcCash5 />,
    },
    {
      name: '2E',
      value: 0,
      total: 0,
      key: '2',
      type: 'coins',
      multiplicator: 2,
      component: <Coin type={1} amount="2" />,
    },
    {
      name: '1E',
      value: 0,
      total: 0,
      key: '1',
      type: 'coins',
      multiplicator: 1,
      component: <Coin type={1} amount="1" />,
    },
    {
      name: '50C',
      value: 0,
      total: 0,
      key: '50C',
      type: 'coins',
      multiplicator: 0.5,
      component: <Coin type={2} amount="50" />,
    },
    {
      name: '20C',
      value: 0,
      total: 0,
      key: '20C',
      type: 'coins',
      multiplicator: 0.2,
      component: <Coin type={2} amount="20" />,
    },
    {
      name: '10C',
      value: 0,
      total: 0,
      key: '10C',
      type: 'coins',
      multiplicator: 0.1,
      component: <Coin type={2} amount="10" />,
    },
    {
      name: '5C',
      value: 0,
      total: 0,
      key: '5C',
      type: 'coins',
      multiplicator: 0.05,
      component: <Coin amount="5" />,
    },
    {
      name: '2C',
      value: 0,
      total: 0,
      key: '2C',
      type: 'coins',
      multiplicator: 0.02,
      component: <Coin amount="2" />,
    },
    {
      name: '1C',
      value: 0,
      total: 0,
      key: '1C',
      type: 'coins',
      multiplicator: 0.01,
      component: <Coin amount="1" />,
    },
  ])

  const [manual, setManual] = useState('')

  const [totalCash, setTotalCash] = useState({
    totalCashRegister: 0,
    totalDifference: 0,
  })

  useEffect(() => {
    let total = 0
    let difference = dataTotal || 0
    if (manual === '') {
      money.map((item) => {
        total += item.total
        difference -= item.total
        return true
      })
    }
    setTotalCash({
      totalCashRegister: manual !== '' ? Number(manual) : total,
      totalDifference: manual !== '' ? Number(manual) - difference : difference,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [money, dataTotal, manual])

  const onChangeText = (item, value) => {
    const count = money.filter((i) => {
      if (i.key === item.key) {
        item.value = value || 0
        item.total = value * item.multiplicator
      }
      return i
    })

    setMoney(count)

    setManual('')
  }

  const handleReset = (type) => {
    const allCash = money.filter((m) => {
      m.value = m.type === type ? 0 : m.value
      m.total = m.type === type ? 0 : m.total

      return m
    })
    setMoney(allCash)
  }

  return (
    <Draggable
      toggle={toggle}
      padding={0}
      isMaximizable
      title="ARQUEO DE CAJA"
      size="xl"
      footerComponent={() => null}
    >
      <div className="tw-flex" style={{ height: '630px' }}>
        <form className="tw-w-9/12 tw-flex tw-flex-col tw-m-4 xl:tw-m-8">
          <div className="tw-flex tw-w-full">
            {/* FORM ARRIBA */}
            <div className="tw-mr-4 tw-flex-1">
              <TextInput label="Cajón" disabled />
            </div>
            <div className="tw-mr-4 tw-flex-1">
              <TextInput label="Empleado" disabled />
            </div>
            <div className="tw-mr-4 tw-flex-1">
              <TextInput label="Fecha Apertura" disabled />
            </div>
            <div className=" tw-flex-1">
              <TextInput label="Fecha cierre" disabled />
            </div>
          </div>
          <div className="tw-flex tw-flex-col">
            <div className="tw-flex">
              {/* BILLETES */}
              <div className="tw-w-4/12">
                <CashForm
                  money={money}
                  onChangeText={onChangeText}
                  reset={() => handleReset('bills')}
                />
              </div>
              {/* MONEDAS */}
              <div className="tw-w-4/12">
                <CoinsForm
                  money={money}
                  onChangeText={onChangeText}
                  reset={() => handleReset('coins')}
                />
              </div>
              {/* TARJETAS */}
              <div className="tw-w-4/12">
                <InputGroup title="Tarjetas" />
              </div>
            </div>

            <div className="tw-w-full tw-mb-0 xl:tw-mb-4">
              <Footer
                type="submit"
                textAccept="CERRAR CAJA"
                textCancel="CANCELAR"
                toggle={toggle}
              />
            </div>
          </div>
        </form>
        <div className="tw-w-3/12 tw-bg-secondary tw-bg-opacity-10 tw-overflow-y-auto">
          <div className="tw-flex tw-flex-col 4 xl:tw-m-8">
            <RightForm totalCash={totalCash} />
          </div>
        </div>
      </div>
    </Draggable>
  )
}

ModalCashRegister.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default ModalCashRegister

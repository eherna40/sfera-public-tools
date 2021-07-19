import React, { useState, useEffect, useRef, useContext } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

import './ModalCashRegister.scss'

import { Row, Col } from 'reactstrap'
import Wrapper from '../../commons/Wrapper/Wrapper'
import IOFInput from '../../commons/Form/Inputs/IOFInput/IOFInput'
import FooterCashRegister from './FooterCashRegister/FooterCashRegister'
import IofSpinner from '../../commons/IofSpinner'
import SferaModal from '../../commons/Modals/SferaModal/SferaModal'
import { CartContext } from '../../../infrastructure/context/CartContext'
import { useCloseCheckout } from '../../../infrastructure/Hooks/Checkout/useCloseCheckout'

const ModalCashRegister = () => {
  const { t } = useTranslation()

  const { handleCloseCheckout } = useContext(CartContext)
  const { loading, data, closeCheckout } = useCloseCheckout()
  const [manual, setManual] = useState('')

  const [fondo, setFondo] = useState(0)
  const [money, setMoney] = useState([
    {
      value: 0,
      total: 0,
      label: `500 ${t('cashRegister.euros')}`,
      key: '500',
      type: 'bills',
      multiplicator: 500,
      img: 'cash7.png',
    },
    {
      value: 0,
      total: 0,
      label: `200 ${t('cashRegister.euros')}`,
      key: '200',
      type: 'bills',
      multiplicator: 200,
      img: 'cash6.png',
    },
    {
      value: 0,
      total: 0,
      label: `100 ${t('cashRegister.euros')}`,
      key: '100',
      type: 'bills',
      multiplicator: 100,
      img: 'cash5.png',
    },
    {
      value: 0,
      total: 0,
      label: `50 ${t('cashRegister.euros')}`,
      key: '50',
      type: 'bills',
      multiplicator: 50,
      img: 'cash4.png',
    },
    {
      value: 0,
      total: 0,
      label: `20 ${t('cashRegister.euros')}`,
      key: '20',
      type: 'bills',
      multiplicator: 20,
      img: 'cash3.png',
    },
    {
      value: 0,
      total: 0,
      label: `10 ${t('cashRegister.euros')}`,
      key: '10',
      type: 'bills',
      multiplicator: 10,
      img: 'cash2.png',
    },
    {
      value: 0,
      total: 0,
      label: `5 ${t('cashRegister.euros')}`,
      key: '5',
      type: 'bills',
      multiplicator: 5,
      img: 'cash1.png',
    },
    {
      value: 0,
      total: 0,
      label: `2 ${t('cashRegister.euros')}`,
      key: '2',
      type: 'coins',
      multiplicator: 2,
      img: 'coin8.png',
    },
    {
      value: 0,
      total: 0,
      label: `1 ${t('cashRegister.euro')}`,
      key: '1',
      type: 'coins',
      multiplicator: 1,
      img: 'coin7.png',
    },
    {
      value: 0,
      total: 0,
      label: `50 ${t('cashRegister.cent')}`,
      key: '50C',
      type: 'coins',
      multiplicator: 0.5,
      img: 'coin6.png',
    },
    {
      value: 0,
      total: 0,
      label: `20 ${t('cashRegister.cent')}`,
      key: '20C',
      type: 'coins',
      multiplicator: 0.2,
      img: 'coin5.png',
    },
    {
      value: 0,
      total: 0,
      label: `10 ${t('cashRegister.cent')}`,
      key: '10C',
      type: 'coins',
      multiplicator: 0.1,
      img: 'coin4.png',
    },
    {
      value: 0,
      total: 0,
      label: `5 ${t('cashRegister.cent')}`,
      key: '5C',
      type: 'coins',
      multiplicator: 0.05,
      img: 'coin3.png',
    },
    {
      value: 0,
      total: 0,
      label: `2 ${t('cashRegister.cent')}`,
      key: '2C',
      type: 'coins',
      multiplicator: 0.02,
      img: 'coin2.png',
    },
    {
      value: 0,
      total: 0,
      label: `1 ${t('cashRegister.cent')}`,
      key: '1C',
      type: 'coins',
      multiplicator: 0.01,
      img: 'coin1.png',
    },
  ])

  const [movements, setMovements] = useState(true)

  const [totalCash, setTotalCash] = useState({
    totalCashRegister: 0,
    totalDifference: 0,
  })
  const ref = useRef(null)
  ref.current = []

  const [confirmClose, setConfirmClose] = useState(false)

  useEffect(() => ref.current[0].focus(), [])

  useEffect(() => {
    let total = 0
    let difference = data.total || 0
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
  }, [money, data, manual])
  const onChangeText = (item, value) => {
    const count = money.filter((i) => {
      if (i.key === item.key) {
        item.value = value || 0
        item.total = Number(value) * item.multiplicator
      }
      return i
    })

    setMoney(count)

    setManual('')
  }

  const handleConfirmAccept = async () => {
    const close = await closeCheckout(totalCash.totalCashRegister, fondo)
    handleCloseCheckout({}, true, close.details)
  }

  const handleAccept = () => {
    if (totalCash.totalDifference !== 0) {
      setConfirmClose(true)
    } else {
      handleConfirmAccept()
    }
  }

  const onchangeManual = (e) => {
    const m = money.filter((i) => {
      i.value = 0
      i.total = 0
      return i
    })

    setMoney(m)
    setManual(e)
  }
  const addToRef = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }
  return (
    <>
      <SferaModal
        title={t('cashRegister.titleModal')}
        toggle={() => handleCloseCheckout({})}
        footerClass="d-flex justify-content-between"
        textSuccess={t('cashRegister.buttonSuccess')}
        textCancel={t('cashRegister.backToTPV')}
        footerComponent={() =>
          !loading && (
            <FooterCashRegister
              loading
              handleClickAccept={handleAccept}
              textSuccess="INTRO - Realizar cierre"
              totalCash={totalCash.totalCashRegister}
              totalDifference={totalCash.totalDifference}
              disableButtonAccept={!data.total ? true : false}
            />
          )
        }
        className="ModalCashRegister"
        size="xl"
        height={560}
      >
        {loading && (
          <div className="overlay-loading position-absolute w-100 h-100 ">
            <IofSpinner />
          </div>
        )}
        <Row tabIndex={-1}>
          <Col className="d-flex">
            <Wrapper className="w-100 d-flex" classInner="w-100 d-flex">
              <Col sm={3} className="pl-0 pr-1">
                <IOFInput
                  label={t('labels.date')}
                  row
                  type="text"
                  placeholder=""
                  value={moment().format('DD/MM/YYYY')}
                  disabled
                  classes="mb-0"
                />
              </Col>

              <Col sm={2} className="pl-1 pr-1">
                <IOFInput
                  label={t('cashRegister.cashRegister')}
                  row
                  type="text"
                  placeholder=""
                  value={data?.checkout?.id}
                  disabled
                  classes="mb-0"
                />
              </Col>

              <Col sm={3} className="pl-1">
                <IOFInput
                  label={t('cashRegister.seedFunds')}
                  row
                  type="text"
                  placeholder=""
                  value={data?.user?.nickname}
                  disabled
                  classes="mb-0"
                />
              </Col>
            </Wrapper>
          </Col>
        </Row>

        <Row className="my-4 flex-column">
          <div className="d-flex justify-content-around w-100 mb-3">
            <Col sm={3}>
              <IOFInput
                key="fondo"
                label="Cantidad de Fondo"
                row
                type="text"
                placeholder=""
                value={fondo}
                classes="mb-0"
                onChangeText={(value) => setFondo(value)}
              />
            </Col>
            <Col sm={3}>
              <IOFInput
                label="Total Manual"
                row
                type="text"
                placeholder=""
                value={manual}
                classes="mb-0"
                onChangeText={(e) => onchangeManual(e)}
              />
            </Col>
          </div>

          <Col>
            <p className="ModalCashRegister__titles m-0">
              {t('cashRegister.enterAmounts')}
            </p>
          </Col>
        </Row>

        <Row className="mt-2">
          {money.map((item) => {
            if (item.type === 'bills') {
              return (
                <Col key={item.key} className="d-flex flex-column pl-3">
                  <img
                    src={require(`../../../assets/img/cashRegister/${item.img}`)}
                    alt={item.label}
                  />
                  <p className="mb-1 ModalCashRegister__titles mt-2">
                    {item.label}
                  </p>
                  <div className="d-flex">
                    <IOFInput
                      setReference={addToRef}
                      key={item.key}
                      classes="m-0 w-100"
                      classNameInput="ModalCashRegister__sizeInput"
                      widhtAuto
                      inputRight="true"
                      onChangeText={(value) => onChangeText(item, value)}
                      placeholder="0"
                    />
                  </div>
                  <p className="m-0 w-100 text-right color-primary font-weight-bold">
                    {`${item.total}`} €
                  </p>
                </Col>
              )
            }
            return null
          })}
        </Row>

        <Row className="mt-4">
          {money.map((item) => {
            if (item.type === 'coins') {
              return (
                <Col key={item.key} className="d-flex flex-column pl-3">
                  <img
                    style={{
                      width: '70px',
                      height: '70px',
                    }}
                    src={require(`../../../assets/img/cashRegister/${item.img}`)}
                    alt={item.label}
                  />
                  <p className="mb-1 ModalCashRegister__titles mt-2">
                    {item.label}
                  </p>
                  <div className="d-flex">
                    <IOFInput
                      key={item.key}
                      classes="m-0 w-100"
                      classNameInput="ModalCashRegister__sizeInput"
                      widhtAuto
                      inputRight="true"
                      onChangeText={(value) => onChangeText(item, value)}
                      placeholder="0"
                    />
                  </div>
                  <p className="m-0 w-100 text-right color-primary font-weight-bold">
                    {`${item.total}`} €
                  </p>
                </Col>
              )
            }
            return null
          })}
        </Row>
        <Row className="mt-4">
          <Col className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <input
                checked={movements}
                onChange={() => setMovements(!movements)}
                type="checkbox"
                id="movimientos"
                name="movimientos"
              />
              <label htmlFor="movimientos" className="ml-2 mb-0">
                Mostrar movimientos al finalizar
              </label>
            </div>
          </Col>
        </Row>
      </SferaModal>
      {confirmClose && (
        <SferaModal
          title="Atención"
          toggle={() => setConfirmClose(null)}
          haveOverlay={false}
          focusOnButtonCancel
          textSuccess="Continuar"
          textCancel="Atrás"
          handleClickAccept={handleConfirmAccept}
          size="sm"
          minHeight={100}
        >
          <div className="TabSystem__close-title color-primary font-weight-bold text-center">
            En la caja, hay una DIFERENCIA de{' '}
            <span className="ModalCashRegister--red font-weight-bold">
              {totalCash?.totalDifference.toFixed(2)}€
            </span>
            .
            <br /> ¿Desea continuar?
          </div>
        </SferaModal>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  checkout: state.workstationReducer.workstation,
})

export default connect(mapStateToProps)(ModalCashRegister)

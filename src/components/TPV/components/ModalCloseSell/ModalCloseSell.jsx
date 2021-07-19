import React, { useState } from 'react'
import Draggable from '../../../Modal/Draggable/Draggable'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import TextInputIcon from '../../../commons/Form/TextInputIcon/TextInputIcon'
import SelectInput from '../../../commons/Form/SelectInput/SelectInput'
import IcFidelizacion from '../../../commons/Icons/IcFidelizacion'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import Footer from './components/Footer/Footer'

const ModalCloseSell = (props) => {
  const inputOptions = [
    { id: '0', name: 'Ticket Reducido' },
    { id: '1', name: 'Ticket Reducido 2' },
  ]

  const [isSelectLinesOpen, setIsSelectLinesOpen] = useState(false)
  const [activePaymentMethod, setActivePaymentMethod] = useState({
    payWithCash: true,
    payWithCard: false,
    payWithCredit: false,
    gift: false,
  })

  const handleActive = (type, bool) => {
    switch (type) {
      case 1:
        setActivePaymentMethod({
          payWithCash: true,
          payWithCard: false,
          payWithCredit: false,
          gift: false,
        })
        setIsSelectLinesOpen(false)
        break
      case 2:
        setActivePaymentMethod({
          payWithCash: false,
          payWithCard: true,
          payWithCredit: false,
          gift: false,
        })
        setIsSelectLinesOpen(false)
        break
      case 3:
        setActivePaymentMethod({
          payWithCash: false,
          payWithCard: false,
          payWithCredit: true,
          gift: false,
        })

        if (!bool) {
          setIsSelectLinesOpen(false)
        } else {
          setIsSelectLinesOpen(true)
        }
        break
      case 4:
        setActivePaymentMethod({
          payWithCash: false,
          payWithCard: false,
          payWithCredit: false,
          gift: true,
        })
        setIsSelectLinesOpen(false)
        break

      default:
        break
    }
  }

  return (
    <Draggable
      padding={0}
      isMaximizable
      title="CIERRE DE VENTA"
      size="xl"
      footerComponent={() => <Footer />}
    >
      <form className="tw-flex tw-flex-col tw-p-4 xl:tw-px-8 xl:tw-pt-8 xl:tw-pb-0">
        <div className="tw-flex tw-w-full">
          {/* FORM ARRIBA */}
          <div className="tw-flex-1 tw-mr-4">
            <TextInput hideError label="Cliente" disabled />
          </div>
          <div className="tw-flex-1 tw-mr-4">
            <TextInput hideError label="CIP" disabled />
          </div>
          <div className="tw-flex-1 tw-mr-4">
            <TextInputIcon
              hideError
              icon={<IcFidelizacion />}
              text="UTILIZAR"
              handleText={() => alert()}
              label="Fidelización"
              disabled
            />
          </div>
          <div className="tw-flex-1 tw-mr-4">
            <TextInputIcon hideError text="COMPENSAR" label="Saldo" disabled />
          </div>
          <div className="tw-flex-1">
            <SelectInput
              hideError
              label="Imprimir"
              items={inputOptions}
              disabled
            />
          </div>
        </div>
        <div className="tw-mt-0 xl:tw-mt-2">
          <Paragraphs size="base" weight="bold">
            Seleccione el método de pago
          </Paragraphs>
        </div>

        <div className="tw-flex tw-justify-between tw-my-0 tw-py-2 tw-overflow-x-auto xl:tw-my-4 xl:tw-py-0">
          <PaymentMethod
            handleActive={() => handleActive(1)}
            active={activePaymentMethod.payWithCash}
            className="tw-p-1 xl:tw-p-3 tw-mr-1 xl:tw-mr-4"
            title="Pago en efectivo"
          >
            <TextInput hideError label="Importe" />
          </PaymentMethod>

          <PaymentMethod
            handleActive={() => handleActive(2)}
            active={activePaymentMethod.payWithCard}
            className="tw-p-1 xl:tw-p-3 tw-mr-1 xl:tw-mr-4"
            title="Pago con tarjeta"
          >
            <TextInput hideError label="Importe" />
          </PaymentMethod>

          <PaymentMethod
            handleActive={() => handleActive(3, true)}
            isSelectLinesOpen={isSelectLinesOpen}
            setIsSelectLinesOpen={setIsSelectLinesOpen}
            active={activePaymentMethod.payWithCredit}
            className="tw-p-1 xl:tw-p-3 tw-mr-1 xl:tw-mr-4"
            title="Venta a crédito"
          >
            <TextInput hideError label="Importe" />
            <SelectInput
              hideError
              label="Líneas de Venta"
              items={inputOptions}
              disabled
            />
          </PaymentMethod>

          <PaymentMethod
            handleActive={() => handleActive(4)}
            active={activePaymentMethod.gift}
            className="tw-p-1 xl:tw-p-3"
            title="Vale regalo"
          >
            <TextInput hideError label="Importe" />
            <TextInput hideError label="Nº de cupón" />
          </PaymentMethod>
        </div>

        <div className="tw-flex">
          <div className="tw-flex tw-w-9/12 tw-mt-4 tw-pr-3">
            <div className=" tw-mr-2">
              <TextInput hideError label="Restante" />
            </div>
            <div className=" tw-mr-2">
              <TextInput hideError label="Entregado" />
            </div>
            <div className=" tw-mr-2">
              <TextInput hideError label="A devolver" />
            </div>
            <div className=" tw-mr-2">
              <TextInput hideError label="Descuento" />
            </div>
            <div className=" tw-mr-2">
              <TextInput hideError label="Crédito" />
            </div>
            <div className="">
              <TextInput hideError label="IVA" />
            </div>
          </div>
          <div className="tw-flex tw-w-3/12 tw-my-4">
            <div className="tw-flex tw-w-64 tw-justify-end tw-items-center xl:tw-w-96">
              <div className="tw-flex">
                <div className="tw-flex tw-flex-col tw-items-center">
                  <div className="tw-flex tw-mr-4 md:tw-items-center">
                    <div className="tw-text-grey-400">
                      <Paragraphs className="tw-mr-1" size="sm">
                        Total bruto:
                      </Paragraphs>
                    </div>
                    <Paragraphs size="sm" weight="bold">
                      123,32€
                    </Paragraphs>
                  </div>
                  <div className="tw-flex tw-text-success tw-items-end tw-mr-4">
                    <Paragraphs
                      className="tw-text-2xl xl:tw-text-5xl"
                      weight="bold"
                    >
                      123,44
                    </Paragraphs>
                    <Paragraphs size="2xl" weight="bold">
                      €
                    </Paragraphs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Draggable>
  )
}

ModalCloseSell.propTypes = {}

export default ModalCloseSell

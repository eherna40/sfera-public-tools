import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'
import TextInput from '../../../../../commons/Form/TextInput/TextInput'
import InputGroup from '../../../../../commons/Form/InputGroup/InputGroup'

const RightForm = ({ totalCash }) => (
  <>
    <InputGroup primary title="CUADRE DE CAJA" />
    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Efectivo
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Tarjetas
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <div className="tw-text-success">
        <Paragraphs size="xs" weight="bold">
          CAJA REAL
        </Paragraphs>
      </div>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <hr className="tw-my-4" />

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Saldo inicial
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Ventas
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Clientes
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Cobros
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Pagos
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-justify-between tw-items-center xl:tw-flex-row">
      <Paragraphs size="xs" weight="bold">
        Retiradas
      </Paragraphs>
      <div className="tw-w-24">
        <TextInput hideError disabled alignRight currency value={0} />
      </div>
    </div>

    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-mt-4 xl:tw-flex-row xl:tw-justify-between">
      <div className="tw-w-28">
        <div className="tw-text-primary">
          <Paragraphs className="tw-mb-1" weight="bold" size="xs">
            CAJA TEÓRICA
          </Paragraphs>
        </div>
        <TextInput
          value={totalCash.totalCashRegister}
          hideError
          disabled
          alignRight
          currency
          bold
        />
      </div>
      <div className="tw-w-28">
        <div className="tw-text-primary">
          <Paragraphs className="tw-mb-1" weight="bold" size="xs">
            DIFERENCIA
          </Paragraphs>
        </div>
        <TextInput
          value={totalCash.totalDifference}
          hideError
          disabled
          alignRight
          currency
          bold
          color="error"
        />
      </div>
    </div>
  </>
)

RightForm.propTypes = {
  totalCash: PropTypes.object,
}

export default RightForm

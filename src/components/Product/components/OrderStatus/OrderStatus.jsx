import React from 'react'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import IcPropuesta from '../../../commons/Icons/IcPropuesta'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import IcTruck from '../../../commons/Icons/IcTruck'
import IcCalendar2 from '../../../commons/Icons/IcCalendar2'

const OrderStatus = () => (
  <>
    <InputGroup title="ESTADO PEDIDOS" />
    <div className="tw-p-4">
      <div className="tw-flex tw-justify-between tw-w-32 tw-mb-4">
        <IcPropuesta />
        <div className="tw-flex tw-flex-col">
          <Paragraphs weight="bold" size="xs">
            En propuesta
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            220 uds.
          </Paragraphs>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-48 tw-mb-4">
        <IcTruck />
        <div className="tw-flex tw-flex-col">
          <Paragraphs weight="bold" size="xs">
            Pendientes de recepción
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            10 uds.
          </Paragraphs>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-56 xl:tw-w-60">
        <IcCalendar2 />
        <div className="tw-flex tw-flex-col">
          <Paragraphs weight="bold" size="xs">
            Incidencias de aprovisionamiento
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            Ninguna
          </Paragraphs>
        </div>
      </div>
    </div>
  </>
)

OrderStatus.propTypes = {}

export default OrderStatus

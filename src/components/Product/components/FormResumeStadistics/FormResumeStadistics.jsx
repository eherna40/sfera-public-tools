import React from 'react'
// import PropTypes from 'prop-types'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'

const FormResumeStadistics = (props) => (
  <>
    <InputGroup title="RESUMEN" />
    <div className="tw-w-full tw-p-4">
      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Paragraphs size="xs" weight="bold">
            Unidades vendidas este año
          </Paragraphs>
          <div className="tw-bg-success tw-p-2 tw-pb-0">
            <Paragraphs className="tw-text-white" size="xs" weight="bold">
              +3% 2020
            </Paragraphs>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-items-end tw-my-4">
          <Paragraphs
            className="tw-text-primary tw-mr-2"
            weight="bold"
            size="3xl"
          >
            1.425
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            uds.
          </Paragraphs>
        </div>
      </div>

      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Paragraphs size="xs" weight="bold">
            Unidades compradas este año
          </Paragraphs>
          <div className="tw-bg-success tw-p-2 tw-pb-0">
            <Paragraphs className="tw-text-white" size="xs" weight="bold">
              +8% 2020
            </Paragraphs>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-items-end tw-my-4">
          <Paragraphs
            className="tw-text-primary tw-mr-2"
            weight="bold"
            size="3xl"
          >
            2.000
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            uds.
          </Paragraphs>
        </div>
      </div>

      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Paragraphs size="xs" weight="bold">
            Ventas último trimestre
          </Paragraphs>
          <div className="tw-bg-success tw-p-2 tw-pb-0">
            <Paragraphs className="tw-text-white" size="xs" weight="bold">
              +3% 2020
            </Paragraphs>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-items-end tw-my-4">
          <Paragraphs
            className="tw-text-primary tw-mr-2"
            weight="bold"
            size="3xl"
          >
            125
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            uds.
          </Paragraphs>
        </div>
      </div>

      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Paragraphs size="xs" weight="bold">
            Compras último trimestre
          </Paragraphs>
          <div className="tw-bg-success tw-p-2 tw-pb-0">
            <Paragraphs className="tw-text-white" size="xs" weight="bold">
              3% 2020
            </Paragraphs>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-items-end tw-my-4">
          <Paragraphs
            className="tw-text-primary tw-mr-2"
            weight="bold"
            size="3xl"
          >
            200
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            uds.
          </Paragraphs>
        </div>
      </div>

      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Paragraphs size="xs" weight="bold">
            Rentabilidad
          </Paragraphs>
          <div className="tw-bg-success tw-p-2 tw-pb-0">
            <Paragraphs className="tw-text-white" size="xs" weight="bold">
              3% 2020
            </Paragraphs>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-items-end tw-my-4">
          <Paragraphs
            className="tw-text-primary tw-mr-2"
            weight="bold"
            size="3xl"
          >
            150
          </Paragraphs>
          <Paragraphs className="tw-text-primary" weight="bold" size="lg">
            %
          </Paragraphs>
        </div>
      </div>
    </div>
  </>
)

FormResumeStadistics.propTypes = {}

export default FormResumeStadistics

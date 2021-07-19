import React from 'react'
// import PropTypes from 'prop-types'
import icPencil from '../../../assets/img/ic_icons/ic_pencil.svg'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'

const Annotations = ({ onAnnotation }) => (
  <div className="Annotations tw-flex tw-flex-col tw-gap-2 tw-h-full tw-items-center tw-justify-start">
    <div className="tw-flex tw-w-full tw-text-xs tw-font-bold tw-gap-4">
      <p>Tipo</p>
      <p>Fecha</p>
      <p>Empleado</p>
      <p>Descripción</p>
    </div>
    <div
      className="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-border tw-p-8 tw-gap-4  tw-cursor-pointer"
      onClick={onAnnotation}
      aria-hidden="true"
    >
      <div>
        <img src={icPencil} alt="pencil-icon" width="40" />
      </div>
      <div className="tw-flex tw-flex-col">
        <Paragraphs weight="bold">
          Añade anotaciones sobre el cliente
        </Paragraphs>
        <Paragraphs size="xs" className="tw-text-gray-400">
          En este módulo puedes gestionar y añadir información relevante o
          comentarios sobre el cliente
        </Paragraphs>
      </div>
    </div>
  </div>
)

export default Annotations

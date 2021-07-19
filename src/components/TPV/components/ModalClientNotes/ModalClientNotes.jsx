import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../../Modal/Draggable/Draggable'
import IcExclamation from '../../../commons/Icons/IcExclamation'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const ModalClientNotes = () => (
  <Draggable
    title="ANOTACIONES EDUARDO PÉREZ BALBOA"
    size="md"
    textCancel="VOLVER ATRÁS"
    textSuccess="FICHA CLIENTE"
  >
    <div className="tw-w-full tw-flex tw-justify-between">
      <div className="tw-flex tw-items-center tw-text-success">
        <IcExclamation />
        <div className="tw-ml-2 tw-text-success">
          <Paragraphs size="base" weight="bold">
            Informativa
          </Paragraphs>
        </div>
      </div>
      <Paragraphs size="xs" weight="bold">
        JOAN. M - 10/01/2020
      </Paragraphs>
    </div>
    <div className="tw-mt-2">
      <Paragraphs size="xs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quod ea voluptas similique facilis reprehenderit ipsa fuga dicta fugit
        necessitatibus.
      </Paragraphs>
    </div>
  </Draggable>
)

ModalClientNotes.propTypes = {}

export default ModalClientNotes

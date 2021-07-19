import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../../Modal/Draggable/Draggable'
import Textarea from '../../../commons/Form/Textarea/Textarea'

const ModalTracing = () => (
  <Draggable
    title="SEGUIMIENTO"
    textSuccess="GUARDAR"
    textCancel="VOLVER ATRÁS"
  >
    <Textarea label="Introduzca un recordatorio para la siguiente visita" />
  </Draggable>
)

ModalTracing.propTypes = {}

export default ModalTracing

import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../../Modal/Draggable/Draggable'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const ModalEmptyArticle = () => (
  <Draggable onlyOneButton>
    <Paragraphs weight="bold">Todavía no ha añadido un artículo</Paragraphs>
    <div className="tw-mt-2">
      <Paragraphs size="xs">
        No se ha podido realizar la acción debido a que el listado de artículos
        esta
      </Paragraphs>
    </div>
  </Draggable>
)

ModalEmptyArticle.propTypes = {}

export default ModalEmptyArticle

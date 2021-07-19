import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import Footer from '../../Modal/Draggable/Footer/Footer'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'

const ModalSave = ({ toggle, loading, onAccept }) => (
  <Draggable toggle={toggle} footerComponent={() => null}>
    <div className="tw-flex tw-flex-col tw-p-4 tw-gap-4">
      <Paragraphs weight="bold">
        ¿Está seguro que desea guardar los cambios?
      </Paragraphs>
      <Paragraphs>
        Se han encontrado modificaciones sin guardar. Si descarta los cambios
        estos no podrán volverse a recuperar.
      </Paragraphs>
      <form onSubmit={onAccept}>
        <Footer
          type="submit"
          loading={loading}
          textAccept="GUARDAR Y SALIR"
          textCancel="CANCELAR"
          toggle={toggle}
          // onAccept={onAccept}
        />
      </form>
    </div>
  </Draggable>
)

ModalSave.propTypes = {
  toggle: PropTypes.func,
  loading: PropTypes.bool,
}

ModalSave.defaultProps = {}

export default ModalSave

import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import Footer from '../../Modal/Draggable/Footer/Footer'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'

const ModalDeleteCustomer = ({ toggle, onAccept, loading }) => (
  <Draggable
    // textCancel={textCancel}
    // textSuccess={textSuccess}
    // size={size}
    // inPortal={inPortal}
    toggle={() => toggle()}
    // onAccept={onAccept}
    // loading={loading}
    footerComponent={() => null}
  >
    <div className="tw-p-4">
      <Paragraphs weight="bold" className="tw-pb-4">
        ¿Está seguro que desea eliminar el cliente?
      </Paragraphs>
      <Paragraphs>
        Si elimina la ficha de cliente, no se podrán recuperar los datos
      </Paragraphs>
      <div className="tw-pt-8">
        <Footer
          type="button"
          onAccept={() => onAccept()}
          textAccept="BORRAR Y SALIR"
          textCancel="CANCELAR"
          toggle={() => toggle()}
          loading={loading}
        />
      </div>
    </div>
  </Draggable>
)

ModalDeleteCustomer.propTypes = {
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
}

ModalDeleteCustomer.defaultProps = {}

export default ModalDeleteCustomer

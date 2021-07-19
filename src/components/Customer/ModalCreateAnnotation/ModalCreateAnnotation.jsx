import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import Footer from '../../Modal/Draggable/Footer/Footer'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'
import AnnotationsMenu from '../Annotations/components/AnnotationMenu/AnnotationsMenu'
import Textarea from '../../commons/Form/Textarea/Textarea'

const ModalCreateAnnotation = ({ toggle, onAccept, loading, reference }) => (
  <Draggable
    size="lg"
    toggle={() => toggle()}
    footerComponent={() => null}
    title="AÑADIR ANOTACIÓN CLIENTE"
  >
    <div className="tw-flex tw-flex-col tw-p-4 tw-gap-2">
      <div>
        <Paragraphs weight="bold" className="tw-pb-4" size="xs">
          Seleccione el tipo
        </Paragraphs>
        <AnnotationsMenu />
      </div>
      <div className="tw-pt-4">
        <Paragraphs weight="bold" className="tw-pb-4" size="xs">
          Descripción
        </Paragraphs>
        <Textarea
          minHeight={120}
          name="create annotation text-area"
          reference={reference}
        />
      </div>
      <Footer
        type="button"
        onAccept={() => onAccept()}
        textAccept="GUARDAR"
        textCancel="CANCELAR"
        toggle={() => toggle()}
        loading={loading}
      />
    </div>
  </Draggable>
)

ModalCreateAnnotation.propTypes = {
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
}

ModalCreateAnnotation.defaultProps = {}

export default ModalCreateAnnotation

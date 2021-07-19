import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'

const ModalDelete = ({
  children,
  profile,
  size,
  textSuccess,
  textCancel,
  inPortal,
  toggle,
  onAccept,
  title,
  loading,
}) => (
  <Draggable
    textCancel={textCancel}
    textSuccess={textSuccess}
    padding={3}
    // title={`ELIMINAR ${profile.toUpperCase()}`}
    title={title}
    size={size}
    inPortal={inPortal}
    toggle={() => toggle()}
    onAccept={onAccept}
    loading={loading}
  >
    <div className="tw-text-center tw-py-4">{children}</div>
  </Draggable>
)

ModalDelete.propTypes = {
  children: PropTypes.node,
  profile: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  textCancel: PropTypes.string,
  textSuccess: PropTypes.string,
  inPortal: PropTypes.bool,
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired
}

ModalDelete.defaultProps = {
  profile: '',
  size: 'md',
  textCancel: 'Cancelar',
  textSuccess: 'Eliminar',
  inPortal: false,
  toggle: null,
  onAccept: null,
  loading: false,
  title: ''
}

export default ModalDelete

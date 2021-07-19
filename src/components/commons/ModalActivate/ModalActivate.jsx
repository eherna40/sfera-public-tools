import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'

const ModalActivate = ({ children, size, toggle, onAccept, loading }) => (
  <Draggable
    padding={3}
    title="ACTIVAR USUARIO"
    size={size}
    toggle={toggle}
    onAccept={onAccept}
    loading={loading}
  >
    <div className="tw-text-center tw-py-4">{children}</div>
  </Draggable>
)

ModalActivate.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
}

ModalActivate.defaultProps = {
  size: 'md',
  toggle: null,
  onAccept: null,
  loading: false,
}

export default ModalActivate

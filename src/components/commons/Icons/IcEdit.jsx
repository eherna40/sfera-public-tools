import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcEdit = ({ size, color }) => (
  <Icon className="material-icons" size={size} color={color}>
    edit
  </Icon>
)

IcEdit.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcEdit.defaultProps = {
  color: '#FFFFFF',
}

export default IcEdit

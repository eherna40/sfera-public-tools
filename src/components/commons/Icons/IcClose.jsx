import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcClose = ({ size, color }) => (
  <Icon className="material-icons" size={size} color={color}>
    close
  </Icon>
)

IcClose.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcClose.defaultProps = {
  size: 16,
  color: '#22949b',
}

export default IcClose

import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcArrowRight = ({ size, color }) => (
  <Icon className="material-icons" size={size} color={color}>
    keyboard_arrow_right
  </Icon>
)

IcArrowRight.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

export default IcArrowRight

import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcClock = ({ size, color }) => (
  <Icon className="material-icons" size={size} color={color}>
    query_builder
  </Icon>
)

IcClock.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

export default IcClock

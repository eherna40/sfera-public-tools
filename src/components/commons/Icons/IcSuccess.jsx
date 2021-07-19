import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcSuccess = ({ size, color }) => (
  <Icon className={`material-icons tw-text-${color}`} size={size}>
    check_circle_outline
  </Icon>
)

IcSuccess.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default IcSuccess

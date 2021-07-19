import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcHelp = ({ size, color }) => (
  <Icon size={size} className={`material-icons tw-text-${color}`}>
    help
  </Icon>
)

IcHelp.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

export default IcHelp

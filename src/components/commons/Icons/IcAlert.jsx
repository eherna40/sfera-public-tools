import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'
import colors from '../../../styles/colors'

const IcAlert = ({ size, color }) => (
  <Icon color={color} className="material-icons" size={size}>
    error_outline
  </Icon>
)

IcAlert.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

IcAlert.defaultProps = {
  color: colors.alert,
}

export default IcAlert

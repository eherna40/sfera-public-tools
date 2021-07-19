import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'
import colors from '../../../styles/colors'

const IcCamera = ({ size, color }) => {
  
return <Icon className="material-icons IcCamera" size={size} color={colors.grey[900]}>
    add_a_photo
  </Icon>
}

IcCamera.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcCamera.defaultProps = {
  color: '#FFFFFF',
}

export default IcCamera

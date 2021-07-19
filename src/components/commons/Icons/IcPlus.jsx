import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcPlus = ({ size, color }) => (
  <Icon
    className="material-icons tw-font-bold"
    style={{ fontWeight: 'bold' }}
    size={size}
    color={color}
  >
    add
  </Icon>
)

IcPlus.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

export default IcPlus

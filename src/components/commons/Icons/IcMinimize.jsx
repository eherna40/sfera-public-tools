import React from 'react'
import PropTypes from 'prop-types'

const IcMinimize = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 13.333 13.333"
  >
    <path
      id="Trazado_2222"
      data-name="Trazado 2222"
      d="M15.333,2.94,11.807,6.467,14,8.667H8.667V3.333L10.86,5.527,14.393,2ZM2.94,15.333l3.527-3.527L8.667,14V8.667H3.333L5.527,10.86,2,14.393Z"
      transform="translate(-2 -2)"
      fill={color}
    />
  </svg>
)

IcMinimize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcMinimize.propTypes = {
  color: '#FFFFFF',
}

export default IcMinimize

import React from 'react'
import PropTypes from 'prop-types'

const IcFidelizacion = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
  >
    <path
      id="Trazado_2253"
      data-name="Trazado 2253"
      d="M12.8,2H3.2A1.2,1.2,0,0,0,2,3.2V9.8A1.2,1.2,0,0,0,3.2,11H5.6v3L8,12.8,10.4,14V11h2.4A1.2,1.2,0,0,0,14,9.8V3.2A1.2,1.2,0,0,0,12.8,2Zm0,7.8H3.2V8.6h9.6Zm0-3H3.2V3.2h9.6Z"
      transform="translate(-2 -2)"
      fill={color}
    />
  </svg>
)

IcFidelizacion.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcFidelizacion.defaultProps = {
  size: 12,
  color: '#71d875',
}

export default IcFidelizacion

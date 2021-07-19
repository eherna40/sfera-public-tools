import React from 'react'
import PropTypes from 'prop-types'

const IcSales = ({ color, size }) => (
  <svg
    id="ic_ventas"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      id="Rectángulo_2372"
      data-name="Rectángulo 2372"
      d="M0,0H12a0,0,0,0,1,0,0V10a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z"
      transform="translate(6 8)"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      id="Trazado_2058"
      data-name="Trazado 2058"
      d="M6,2.5a3,3,0,0,1-6,0"
      transform="translate(15 9.5) rotate(180)"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
    <path
      id="Trazado_2059"
      data-name="Trazado 2059"
      d="M6963-24178h6"
      transform="translate(-6957 24190)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
    />
    <path
      id="Trazado_2060"
      data-name="Trazado 2060"
      d="M6963-24178h4"
      transform="translate(-6957 24194)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
    />
    <rect
      id="Rectángulo_2373"
      data-name="Rectángulo 2373"
      width="24"
      height="24"
      fill="none"
    />
  </svg>
)

IcSales.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default IcSales

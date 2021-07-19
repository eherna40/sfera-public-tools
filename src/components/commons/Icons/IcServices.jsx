import React from 'react'
import PropTypes from 'prop-types'

const IcServices = ({ size, color }) => (
  <svg
    id="ic_servicios"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g id="Grupo_5681" data-name="Grupo 5681" transform="translate(-244 -12)">
      <path
        id="Trazado_2069"
        data-name="Trazado 2069"
        d="M0,0H16V12.182L12.182,16H0Z"
        transform="translate(248 16)"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2070"
        data-name="Trazado 2070"
        d="M809,1878v-4h4"
        transform="translate(-550 -1847)"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2071"
        data-name="Trazado 2071"
        d="M780,1876v-8"
        transform="translate(2128 -760) rotate(90)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2072"
        data-name="Trazado 2072"
        d="M780,1876v-4"
        transform="translate(2128 -756) rotate(90)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
    <path
      id="Trazado_2073"
      data-name="Trazado 2073"
      d="M0,0H24V24H0Z"
      fill="none"
    />
  </svg>
)

IcServices.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default IcServices

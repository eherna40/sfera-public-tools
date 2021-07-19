import React from 'react'
import PropTypes from 'prop-types'

const IcPurchase = ({ size, color }) => (
  <svg
    id="ic_compras"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g id="Grupo_5677" data-name="Grupo 5677" transform="translate(-126 -11)">
      <g
        id="Grupo_3683"
        data-name="Grupo 3683"
        transform="translate(212.458 17.041)"
      >
        <rect
          id="Rectángulo_2374"
          data-name="Rectángulo 2374"
          width="5"
          height="9"
          transform="translate(-81.458 3.959)"
          fill="none"
          stroke={color}
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <rect
          id="Rectángulo_2375"
          data-name="Rectángulo 2375"
          width="9"
          height="9"
          transform="translate(-76.458 3.959)"
          fill="none"
          stroke={color}
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <path
        id="Trazado_2061"
        data-name="Trazado 2061"
        d="M625.75,912l-2-5h5l2,5"
        transform="translate(-494.75 -891)"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2062"
        data-name="Trazado 2062"
        d="M632.75,912l2-5h-9l-2,5"
        transform="translate(-487.75 -891)"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
    <rect
      id="Rectángulo_2376"
      data-name="Rectángulo 2376"
      width="24"
      height="24"
      fill="none"
    />
  </svg>
)

IcPurchase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default IcPurchase

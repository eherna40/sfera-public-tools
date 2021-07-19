import React from 'react'
import PropTypes from 'prop-types'

const IcUserInactive = ({ size, color }) => (
  <svg
    id="ic_user_inactive"
    xmlns="http://www.w3.org/2000/svg"
    width={size || '18'}
    height={size || '18'}
    viewBox="0 0 18 18"
  >
    <g id="Grupo_6270" data-name="Grupo 6270" transform="translate(-1058 -370)">
      <path
        id="Trazado_2227"
        data-name="Trazado 2227"
        d="M0,0H18V18H0Z"
        transform="translate(1058 370)"
        fill="none"
      />
      <circle
        id="Elipse_397"
        data-name="Elipse 397"
        cx="7"
        cy="7"
        r="7"
        transform="translate(1060 372)"
        fill={color || '#d8004d'}
      />
    </g>
    <g
      id="Grupo_6271"
      data-name="Grupo 6271"
      transform="translate(-526.566 -1056.156) rotate(45)"
    >
      <path
        id="Trazado_2259"
        data-name="Trazado 2259"
        d="M0,0H4V4"
        transform="translate(1131.883 370.477) rotate(90)"
        fill="none"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2260"
        data-name="Trazado 2260"
        d="M0,0H4V4"
        transform="translate(1131.883 378.477) rotate(-90)"
        fill="none"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
)

IcUserInactive.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default IcUserInactive

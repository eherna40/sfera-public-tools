import React from 'react'
import PropTypes from 'prop-types'

const IcSave = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="29"
    viewBox="0 0 29 29"
  >
    <g id="Grupo_6513" data-name="Grupo 6513" transform="translate(1.5 1.5)">
      <path
        id="Trazado_2376"
        data-name="Trazado 2376"
        d="M-16719-23189v26h26v-20l-6-6Z"
        transform="translate(16719 23189)"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
      />
      <rect
        id="Rectángulo_2604"
        data-name="Rectángulo 2604"
        width="14"
        height="5"
        transform="translate(4 4)"
        // fill="red"
      />
      <circle
        id="Elipse_404"
        data-name="Elipse 404"
        cx="4"
        cy="4"
        r="4"
        transform="translate(9 14)"
        // fill="red"
      />
    </g>
  </svg>
)

IcSave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcSave.defaultProps = {
  color: '#333',
}

export default IcSave

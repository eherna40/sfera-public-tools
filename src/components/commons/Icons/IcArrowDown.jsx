import React from 'react'
import PropTypes from 'prop-types'

const IcArrowDown = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <g id="ic_next_small" transform="translate(16) rotate(90)">
      <g id="Grupo_4063" data-name="Grupo 4063">
        <rect
          id="Rectángulo_1638"
          data-name="Rectángulo 1638"
          width="16"
          height="16"
          fill="none"
        />
      </g>
      <path
        id="Trazado_2053"
        data-name="Trazado 2053"
        d="M0,4,2,2,0,0"
        transform="translate(7 6)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
)

IcArrowDown.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcArrowDown.defaultProps = {
  size: 16,
  color: '#FFFFFF',
}

export default IcArrowDown

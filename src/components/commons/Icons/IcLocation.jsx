import React from 'react'
import PropTypes from 'prop-types'

const IcLocation = ({ size, color }) => (
  <svg
    id="ic_action_stock_locations"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="Grupo_3726" data-name="Grupo 3726" transform="translate(-740 -357)">
      <g id="Grupo_3723" data-name="Grupo 3723" transform="translate(-1)">
        <rect
          id="Rectángulo_2231"
          data-name="Rectángulo 2231"
          width="20"
          height="20"
          transform="translate(741 357)"
          fill="none"
        />
      </g>
    </g>
    <path
      id="Trazado_2356"
      data-name="Trazado 2356"
      d="M10,2A4.947,4.947,0,0,0,5,6.9c0,3.675,5,9.1,5,9.1s5-5.425,5-9.1A4.947,4.947,0,0,0,10,2Z"
      transform="translate(0 1)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <g
      id="Elipse_402"
      data-name="Elipse 402"
      transform="translate(8.5 6.5)"
      fill={color}
      stroke={color}
      strokeWidth="1"
    >
      <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
      <circle cx="1.5" cy="1.5" r="1" fill="none" />
    </g>
  </svg>
)

IcLocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcLocation.defaultProps = {
  color: '#22949b',
  size: 20,
}

export default IcLocation

import React from 'react'
import PropTypes from 'prop-types'

const IcSearch = ({ color, size }) => (
  <svg
    id="ic_menu_search"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <rect
      id="Rectángulo_1349"
      data-name="Rectángulo 1349"
      width="24"
      height="24"
      transform="translate(24 24) rotate(180)"
      fill="none"
    />
    <g
      id="Grupo_2127"
      data-name="Grupo 2127"
      transform="translate(-247.209 -530)"
    >
      <g id="Grupo_2271" data-name="Grupo 2271" transform="translate(2 2)">
        <path
          id="Trazado_1269"
          data-name="Trazado 1269"
          d="M14.98,9.74A5.24,5.24,0,1,1,9.74,4.5a5.24,5.24,0,0,1,5.24,5.24Z"
          transform="translate(246.709 529.499)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Trazado_1270"
          data-name="Trazado 1270"
          d="M27.824,27.824l-2.849-2.849"
          transform="translate(235.175 517.966)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </g>
  </svg>
)

IcSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcSearch.defaultProps = {
  color: '#333',
}

export default IcSearch

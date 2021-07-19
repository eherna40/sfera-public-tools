import React from 'react'
import PropTypes from 'prop-types'

const IcFolder = ({ size, color }) => (
  <svg
    id="ic_menu_carpeta_favoritos"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <rect
      id="Rectángulo_1300"
      data-name="Rectángulo 1300"
      width="24"
      height="24"
      fill="none"
    />
    <g id="Grupo_1744" data-name="Grupo 1744" transform="translate(-1159 -254)">
      <path
        id="Trazado_1197"
        data-name="Trazado 1197"
        d="M-11539-5391l1,9.889h14l1-8.453h-10l-2-1.436Z"
        transform="translate(12703 5653.111)"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_1198"
        data-name="Trazado 1198"
        d="M-11511.333-5391v-3h12v5"
        transform="translate(12677.333 5653)"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
)

IcFolder.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcFolder.defaultProps = {
  color: '#FFFFFF',
}

export default IcFolder

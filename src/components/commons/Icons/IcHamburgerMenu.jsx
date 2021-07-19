import React from 'react'
import PropTypes from 'prop-types'

const IcHamburgerMenu = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 16.001"
  >
    <g id="ic_multitab_verde" transform="translate(0 1.999)">
      <path
        id="Trazado_2057"
        data-name="Trazado 2057"
        d="M0,0H12V12H0Z"
        fill={color}
      />
      <g id="Grupo_4093" data-name="Grupo 4093" transform="translate(4 4)">
        <path
          id="Trazado_1267"
          data-name="Trazado 1267"
          d="M0,0,4.243,4.243"
          transform="translate(5 -0.999) rotate(135)"
          fill="none"
          stroke="#3FCBD9"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          id="Trazado_2074"
          data-name="Trazado 2074"
          d="M0,0,4.243,4.243"
          transform="translate(5 2.001) rotate(135)"
          fill="none"
          stroke="#3FCBD9"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          id="Trazado_2075"
          data-name="Trazado 2075"
          d="M0,0,4.243,4.243"
          transform="translate(5 5.001) rotate(135)"
          fill="none"
          stroke="#3FCBD9"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </g>
  </svg>
)

IcHamburgerMenu.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcHamburgerMenu.defaultProps = {
  color: '#FFFFFF',
}

export default IcHamburgerMenu

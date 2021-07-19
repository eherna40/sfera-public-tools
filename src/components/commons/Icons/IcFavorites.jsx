import React from 'react'
import PropTypes from 'prop-types'

const IcFavorites = ({ size, color }) => (
  <svg
    id="ic_favoritos"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      id="Trazado_1234"
      data-name="Trazado 1234"
      d="M0,0H24V24H0Z"
      fill="none"
    />
    <path
      id="Trazado_1235"
      data-name="Trazado 1235"
      d="M11,19l-1.3-1.151C5.06,13.777,2,11.092,2,7.8A4.827,4.827,0,0,1,6.95,3,5.462,5.462,0,0,1,11,4.822,5.462,5.462,0,0,1,15.05,3,4.827,4.827,0,0,1,20,7.8c0,3.3-3.06,5.981-7.7,10.062Z"
      transform="translate(1.5 1.5)"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

IcFavorites.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcFavorites.defaultProps = {
  color: '#FFFFFF',
}

export default IcFavorites

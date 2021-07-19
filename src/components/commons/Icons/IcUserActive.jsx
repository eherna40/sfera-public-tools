import React from 'react'
import PropTypes from 'prop-types'

const IcUserActive = ({ size, color, checkColor }) => (
  <svg
    id="ic_user_active"
    xmlns="http://www.w3.org/2000/svg"
    width={size || '18'}
    height={size || '18'}
    viewBox="0 0 18 18"
  >
    <path
      id="Trazado_2227"
      data-name="Trazado 2227"
      d="M0,0H18V18H0Z"
      fill="none"
    />
    <circle
      id="Elipse_397"
      data-name="Elipse 397"
      cx="7"
      cy="7"
      r="7"
      transform="translate(2 2)"
      fill={color || '#71d875'}
    />
    <path
      id="Trazado_2258"
      data-name="Trazado 2258"
      d="M-1.414,0H4V2.586"
      transform="translate(10.828 7.828) rotate(135)"
      fill="none"
      stroke={checkColor || '#fff'}
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

IcUserActive.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  checkColor: PropTypes.string,
}

export default IcUserActive

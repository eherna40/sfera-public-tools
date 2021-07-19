import React from 'react'
import PropTypes from 'prop-types'

const IcDialogAlert = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="error-24px" transform="translate(20 20) rotate(180)">
      <path
        id="Trazado_2086"
        data-name="Trazado 2086"
        d="M0,0H20V20H0Z"
        fill="none"
      />
      <path
        id="Trazado_2090"
        data-name="Trazado 2090"
        d="M17,2H3.667A1.664,1.664,0,0,0,2.008,3.667L2,18.667l3.333-3.333H17a1.672,1.672,0,0,0,1.667-1.667v-10A1.672,1.672,0,0,0,17,2ZM11.167,9.5H9.5v-5h1.667Zm0,3.333H9.5V11.167h1.667Z"
        transform="translate(20.334 20.334) rotate(180)"
        fill={color}
      />
    </g>
  </svg>
)

IcDialogAlert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcDialogAlert.defaultProps = {
  color: 'white',
  size: 24,
}

export default IcDialogAlert

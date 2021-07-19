import React from 'react'
import PropTypes from 'prop-types'

export const IcExclamation = ({ size }) => (
  <svg
    id="ic_common_info_cliente"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <g id="error-24px" transform="translate(16 16) rotate(180)">
      <path
        id="Trazado_2086"
        data-name="Trazado 2086"
        d="M0,0H16V16H0Z"
        fill="none"
      />
      <path
        id="Trazado_2087"
        data-name="Trazado 2087"
        d="M6.667,0a6.667,6.667,0,1,0,6.667,6.667A6.669,6.669,0,0,0,6.667,0Zm.667,10H6V8.667H7.333Zm0-2.667H6v-4H7.333Z"
        transform="translate(1.333 1.333)"
        fill="#71d875"
      />
    </g>
  </svg>
)

IcExclamation.propTypes = {
  size: PropTypes.number,
}

IcExclamation.defaultProps = {
  size: 16,
}

export default IcExclamation

import React from 'react'
import PropTypes from 'prop-types'

export const IcExclamationRed = ({ size }) => (
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
      <g id="report_problem-24px" transform="translate(16 16) rotate(180)">
        <path
          id="Trazado_2088"
          data-name="Trazado 2088"
          d="M0,0H16V16H0Z"
          fill="none"
        />
        <path
          id="Trazado_2089"
          data-name="Trazado 2089"
          d="M0,12.667H14.667L7.333,0Zm8-2H6.667V9.333H8ZM8,8H6.667V5.333H8Z"
          transform="translate(0.667 1.333)"
          fill="#d8004d"
        />
      </g>
    </g>
  </svg>
)

IcExclamationRed.propTypes = {
  size: PropTypes.number,
}

IcExclamationRed.defaultProps = {
  size: 16,
}

export default IcExclamationRed

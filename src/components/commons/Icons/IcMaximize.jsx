import React from 'react'
import PropTypes from 'prop-types'

const IcMaximize = ({ color, size }) => (
  <svg
    id="ic_common_open_in_full"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <rect
      id="Rectángulo_2452"
      data-name="Rectángulo 2452"
      width="16"
      height="16"
      fill="#3fcbd9"
      fillOpacity="0"
    />
    <path
      id="Trazado_2221"
      data-name="Trazado 2221"
      d="M15,8.333V3H9.667L11.86,5.193,5.193,11.86,3,9.667V15H8.333L6.14,12.807,12.807,6.14Z"
      transform="translate(-1 -1)"
      fill={color}
    />
  </svg>
)

IcMaximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcMaximize.defaultProps = {
  color: '#FFFFFF',
}

export default IcMaximize

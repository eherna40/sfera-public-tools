import React from 'react'
import PropTypes from 'prop-types'

const IcStart = ({ color, size, outlined }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 13"
  >
    <path
      id="Trazado_2238"
      data-name="Trazado 2238"
      d="M9,12.448,13.326,15l-1.148-4.81L16,6.954l-5.033-.417L9,2,7.033,6.536,2,6.954,5.822,10.19,4.674,15Z"
      transform="translate(-2 -2)"
      fill={outlined ? 'transparent' : color}
      stroke={color}
    />
  </svg>
)

IcStart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  outlined: PropTypes.bool,
}

IcStart.defaultProps = {
  size: 14,
  outlined: false,
  color: '#22949b',
}

export default IcStart

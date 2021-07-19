import React from 'react'
import PropTypes from 'prop-types'

const IcInfo = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)

IcInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcInfo.defaultProps = {
  color: 'white',
  size: 24,
}

export default IcInfo

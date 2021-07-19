import React from 'react'
import PropTypes from 'prop-types'

const IcWarning = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

IcWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcWarning.defaultProps = {
  color: 'white',
  size: 24,
}

export default IcWarning

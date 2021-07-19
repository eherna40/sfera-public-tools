import React from 'react'
import PropTypes from 'prop-types'

const IcCheckCircle = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

IcCheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcCheckCircle.defaultProps = {
  color: 'white',
  size: 24,
}

export default IcCheckCircle

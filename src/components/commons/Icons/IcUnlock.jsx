import React from 'react'
import PropTypes from 'prop-types'

const IcUnlock = ({ size }) => (
  <svg
    id="lock_open-24px"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <path
      id="Trazado_2084"
      data-name="Trazado 2084"
      d="M0,0H16V16H0Z"
      fill="none"
    />
    <path
      id="Trazado_2085"
      data-name="Trazado 2085"
      d="M8.667,10.333A1.167,1.167,0,1,0,7.5,9.167,1.17,1.17,0,0,0,8.667,10.333Zm3.5-5.25h-.583V3.917a2.917,2.917,0,1,0-5.833,0H6.858a1.808,1.808,0,1,1,3.617,0V5.083H5.167A1.17,1.17,0,0,0,4,6.25v5.833A1.17,1.17,0,0,0,5.167,13.25h7a1.17,1.17,0,0,0,1.167-1.167V6.25A1.17,1.17,0,0,0,12.167,5.083Zm0,7h-7V6.25h7Z"
      transform="translate(-1 0.999)"
      fill="#71d875"
    />
  </svg>
)
IcUnlock.propTypes = {
  size: PropTypes.number,
}
IcUnlock.defaultProps = {
  size: 16,
}
export default IcUnlock

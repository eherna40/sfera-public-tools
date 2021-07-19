import React from 'react'
import PropTypes from 'prop-types'

const IcLocked = ({ size, color }) => (
  <svg
    id="ic_common_locked"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <path id="Path_2082" data-name="Path 2082" d="M0,0H16V16H0Z" fill="none" />
    <path
      id="Path_2083"
      data-name="Path 2083"
      d="M12.167,5.083h-.583V3.917a2.917,2.917,0,1,0-5.833,0V5.083H5.167A1.17,1.17,0,0,0,4,6.25v5.833A1.17,1.17,0,0,0,5.167,13.25h7a1.17,1.17,0,0,0,1.167-1.167V6.25A1.17,1.17,0,0,0,12.167,5.083Zm-3.5,5.25A1.167,1.167,0,1,1,9.833,9.167,1.17,1.17,0,0,1,8.667,10.333Zm1.808-5.25H6.858V3.917a1.808,1.808,0,1,1,3.617,0Z"
      transform="translate(-0.999 1)"
      fill={color}
    />
  </svg>
)
IcLocked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
IcLocked.defaultProps = {
  color: '#d8004d',
  size: 18,
}
export default IcLocked

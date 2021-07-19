import React from 'react'
import PropTypes from 'prop-types'

const IcPlus = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
  >
    <g id="Grupo_4080" data-name="Grupo 4080" transform="translate(0.92 0.92)">
      <g
        id="Rectángulo_2362"
        data-name="Rectángulo 2362"
        transform="translate(9.08 0.08)"
        fill={color}
        stroke={color}
        strokeWidth="1"
      >
        <rect width="2" height="20" stroke="none" />
        <rect x="-0.5" y="-0.5" width="3" height="21" fill="none" />
      </g>
      <g
        id="Rectángulo_2363"
        data-name="Rectángulo 2363"
        transform="translate(20.08 9.08) rotate(90)"
        fill={color}
        stroke={color}
        strokeWidth="1"
      >
        <rect width="2" height="20" stroke="none" />
        <rect x="-0.5" y="-0.5" width="3" height="21" fill="none" />
      </g>
    </g>
  </svg>
)

IcPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcPlus.defaultProps = {
  color: '#FFFFFF',
  size: 22,
}

export default IcPlus

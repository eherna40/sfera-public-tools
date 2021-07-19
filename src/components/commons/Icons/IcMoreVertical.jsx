import React from 'react'
import PropTypes from 'prop-types'

const IcMoreVertical = ({ size, color }) => (
  <svg
    id="ic_common_more_options"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="Grupo_3726" data-name="Grupo 3726">
      <g id="Grupo_3723" data-name="Grupo 3723">
        <rect
          id="Rectángulo_2231"
          data-name="Rectángulo 2231"
          width="20"
          height="20"
          fill="none"
        />
      </g>
    </g>
    <g id="Grupo_5951" data-name="Grupo 5951" transform="translate(-490 -67)">
      <g
        id="Elipse_362"
        data-name="Elipse 362"
        transform="translate(499 71)"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r="1.25" fill="none" />
      </g>
      <g
        id="Elipse_363"
        data-name="Elipse 363"
        transform="translate(499 76)"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r="1.25" fill="none" />
      </g>
      <g
        id="Elipse_364"
        data-name="Elipse 364"
        transform="translate(499 81)"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r="1.25" fill="none" />
      </g>
    </g>
  </svg>
)

IcMoreVertical.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcMoreVertical.defaultProps = {
  color: '#FFFFFF',
}

export default IcMoreVertical

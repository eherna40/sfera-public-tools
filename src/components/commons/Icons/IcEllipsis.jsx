import React from 'react'
import PropTypes from 'prop-types'

const IcEllipsis = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4.4"
    height="14.4"
    viewBox="0 0 2.4 10.4"
  >
    <g
      id="Grupo_6120"
      data-name="Grupo 6120"
      transform="translate(-498.8 -71.8)"
    >
      <g
        id="Elipse_362"
        data-name="Elipse 362"
        transform="translate(499 72)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r="1.1" fill="none" />
      </g>
      <g
        id="Elipse_363"
        data-name="Elipse 363"
        transform="translate(499 76)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r="1.1" fill="none" />
      </g>
      <g
        id="Elipse_364"
        data-name="Elipse 364"
        transform="translate(499 80)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r="1.1" fill="none" />
      </g>
    </g>
  </svg>
)

IcEllipsis.propTypes = {
  color: PropTypes.string,
}

IcEllipsis.defaultProps = {
  color: '#22949b',
}

export default IcEllipsis

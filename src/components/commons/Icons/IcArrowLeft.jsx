import React from 'react'
import PropTypes from 'prop-types'

const IcArrowLeft = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9.899"
    height="14.142"
    viewBox="0 0 9.899 14.142"
  >
    <g
      id="Grupo_6248"
      data-name="Grupo 6248"
      transform="translate(4.95 -23.335) rotate(45)"
    >
      <g id="Grupo_4075" data-name="Grupo 4075" transform="translate(0 8)">
        <rect
          id="Rectángulo_2359"
          data-name="Rectángulo 2359"
          width="10"
          height="4"
          transform="translate(18 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2410"
          data-name="Rectángulo 2410"
          width="4"
          height="10"
          transform="translate(18 7)"
          fill={color}
        />
      </g>
    </g>
  </svg>
)

IcArrowLeft.propTypes = {
  color: PropTypes.string,
}

export default IcArrowLeft

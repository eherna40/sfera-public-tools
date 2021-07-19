import React from 'react'
import PropTypes from 'prop-types'

const IcMenu = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="Grupo_4089" data-name="Grupo 4089" transform="translate(-10 -13)">
      <g id="Grupo_4074" data-name="Grupo 4074">
        <rect
          id="Rectángulo_2358"
          data-name="Rectángulo 2358"
          width="4"
          height="4"
          transform="translate(10 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2359"
          data-name="Rectángulo 2359"
          width="4"
          height="4"
          transform="translate(18 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2360"
          data-name="Rectángulo 2360"
          width="4"
          height="4"
          transform="translate(26 13)"
          fill={color}
        />
      </g>
      <g id="Grupo_4075" data-name="Grupo 4075" transform="translate(0 8)">
        <rect
          id="Rectángulo_2358-2"
          data-name="Rectángulo 2358"
          width="4"
          height="4"
          transform="translate(10 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2359-2"
          data-name="Rectángulo 2359"
          width="4"
          height="4"
          transform="translate(18 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2360-2"
          data-name="Rectángulo 2360"
          width="4"
          height="4"
          transform="translate(26 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2410"
          data-name="Rectángulo 2410"
          width="4"
          height="4"
          transform="translate(18 13)"
          fill={color}
        />
      </g>
      <g id="Grupo_4076" data-name="Grupo 4076" transform="translate(0 16)">
        <rect
          id="Rectángulo_2358-3"
          data-name="Rectángulo 2358"
          width="4"
          height="4"
          transform="translate(10 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2359-3"
          data-name="Rectángulo 2359"
          width="4"
          height="4"
          transform="translate(18 13)"
          fill={color}
        />
        <rect
          id="Rectángulo_2360-3"
          data-name="Rectángulo 2360"
          width="4"
          height="4"
          transform="translate(26 13)"
          fill={color}
        />
      </g>
    </g>
  </svg>
)

IcMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default IcMenu

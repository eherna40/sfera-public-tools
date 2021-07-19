import React from 'react'
import PropTypes from 'prop-types'

const IcCloseBold = ({ color, size }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14.142 14.142"
    >
      <g
        id="Grupo_4089"
        data-name="Grupo 4089"
        transform="translate(9.192 -23.335) rotate(45)"
      >
        <g id="Grupo_4075" data-name="Grupo 4075" transform="translate(0 8)">
          <rect
            id="Rectángulo_2359"
            data-name="Rectángulo 2359"
            width="16"
            height="4"
            transform="translate(12 13)"
            fill={color}
          />
          <rect
            id="Rectángulo_2410"
            data-name="Rectángulo 2410"
            width="4"
            height="16"
            transform="translate(18 7)"
            fill={color}
          />
        </g>
      </g>
    </svg>
  </div>
)

IcCloseBold.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcCloseBold.defaultProps = {
  size: 8,
  color: '#22949b',
}

export default IcCloseBold

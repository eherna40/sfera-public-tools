import React from 'react'
import PropTypes from 'prop-types'

const IcExpandLess = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="ic_common_arrow_down" transform="translate(20 20) rotate(180)">
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
      <path
        id="Trazado_1919"
        data-name="Trazado 1919"
        d="M0,0H4V4"
        transform="translate(12.657 8.828) rotate(135)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
)

IcExpandLess.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IcExpandLess.defaultProps = {
  color: '#FFFFFF',
}

export default IcExpandLess

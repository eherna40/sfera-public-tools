import React from 'react'
import PropTypes from 'prop-types'

const IcCircle = ({ color, borderColor, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 49 49"
  >
    <g
      id="Grupo_6519"
      data-name="Grupo 6519"
      transform="translate(16617 19449)"
    >
      <g id="Grupo_6515" data-name="Grupo 6515">
        <rect
          id="Rectángulo_2693"
          data-name="Rectángulo 2693"
          width="49"
          height="49"
          transform="translate(-16617 -19449)"
          fill="none"
        />
        <g
          id="Elipse_407"
          data-name="Elipse 407"
          transform="translate(-16614 -19446)"
          fill={color}
          stroke={borderColor}
          strokeWidth="1"
        >
          <circle cx="21.5" cy="21.5" r="21.5" stroke="none" />
          <circle cx="21.5" cy="21.5" r="21" fill="none" />
        </g>
      </g>
    </g>
  </svg>
)
IcCircle.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.number,
}
IcCircle.defaultProps = {
  color: '#FF0',
  borderColor: '#e5e500',
  size: 16,
}
export default IcCircle

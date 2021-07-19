import React from 'react'
import PropTypes from 'prop-types'

const IcCilindro = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="20"
    viewBox="0 0 32 44"
  >
    <g
      id="Grupo_6516"
      data-name="Grupo 6516"
      transform="translate(17653.135 13184.002)"
    >
      <g
        id="Grupo_6514"
        data-name="Grupo 6514"
        transform="translate(-17653.135 -13184.127)"
      >
        <g
          id="Elipse_401"
          data-name="Elipse 401"
          transform="translate(-0.001 28.125)"
          fill="#0f666c"
          stroke="#fff"
          strokeWidth="1"
        >
          <ellipse cx="16" cy="8" rx="16" ry="8" stroke="none" />
          <ellipse cx="16" cy="8" rx="15.5" ry="7.5" fill="none" />
        </g>
        <rect
          id="Rectángulo_2641"
          data-name="Rectángulo 2641"
          width="25.248"
          height="25.248"
          transform="translate(3.274 11.211)"
          fill="#0f666c"
        />
        <g
          id="Elipse_402"
          data-name="Elipse 402"
          transform="translate(-0.001 0.125)"
          fill="#0f666c"
          stroke="#fff"
          strokeWidth="1"
        >
          <ellipse cx="16" cy="8" rx="16" ry="8" stroke="none" />
          <ellipse cx="16" cy="8" rx="15.5" ry="7.5" fill="none" />
        </g>
      </g>
    </g>
  </svg>
)

IcCilindro.propTypes = {
  color: PropTypes.string,
}
IcCilindro.defaultProps = {
  color: '#0f666c',
}
export default IcCilindro

import React from 'react'
import PropTypes from 'prop-types'

const IcStar = ({ color, size, starColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="error-24px" transform="translate(20 20) rotate(180)">
      <path
        id="Trazado_2086"
        data-name="Trazado 2086"
        d="M0,0H20V20H0Z"
        fill="none"
      />
      <g
        id="Grupo_6139"
        data-name="Grupo 6139"
        transform="translate(19 18.5) rotate(180)"
      >
        <path
          id="Trazado_2243"
          data-name="Trazado 2243"
          d="M19,10,17,7.741l.278-2.987L14.328,4.09,12.782,1.5,10,2.682,7.218,1.5,5.672,4.082l-2.954.656.278,3L1,10l2,2.259-.278,3,2.954.664L7.218,18.5,10,17.31l2.782,1.182,1.546-2.582,2.954-.664L17,12.259Z"
          transform="translate(-1 -1.5)"
          fill={color}
        />
      </g>
      <path
        id="Trazado_2245"
        data-name="Trazado 2245"
        d="M6,7.626,8.472,9,7.816,6.41,10,4.667,7.124,4.443,6,2,4.876,4.443,2,4.667,4.184,6.41,3.528,9Z"
        transform="translate(16 16) rotate(180)"
        fill={starColor}
      />
    </g>
  </svg>
)

IcStar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  starColor: PropTypes.string,
}

IcStar.defaultProps = {
  color: 'black',
  size: 24,
  starColor: 'white',
}

export default IcStar

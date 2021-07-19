import React from 'react'
import PropTypes from 'prop-types'

const calcHeight = (num) => {
  const height = num - 2
  const parsedHeight = height.toString()
  return parsedHeight
}

const IcExcel = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size.toString()}
    height={calcHeight(size)}
    viewBox="0 0 18 16"
  >
    <g id="excel" transform="translate(0 -15.989)">
      <path
        id="Trazado_2279"
        data-name="Trazado 2279"
        d="M264.512,91.471h-7.945A.546.546,0,0,1,256,90.95V80.532a.546.546,0,0,1,.567-.521h7.945a.546.546,0,0,1,.567.521V90.95A.546.546,0,0,1,264.512,91.471Z"
        transform="translate(-247.079 -61.751)"
        fill="#eceff1"
      />
      <g
        id="Grupo_6326"
        data-name="Grupo 6326"
        transform="translate(8.921 20.018)"
      >
        <path
          id="Trazado_2280"
          data-name="Trazado 2280"
          d="M258.837,145.146h-2.27a.567.567,0,0,1,0-1.135h2.27a.567.567,0,1,1,0,1.135Z"
          transform="translate(-256 -144.011)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2281"
          data-name="Trazado 2281"
          d="M258.837,209.146h-2.27a.567.567,0,0,1,0-1.135h2.27a.567.567,0,1,1,0,1.135Z"
          transform="translate(-256 -205.741)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2282"
          data-name="Trazado 2282"
          d="M258.837,273.146h-2.27a.567.567,0,0,1,0-1.135h2.27a.567.567,0,0,1,0,1.135Z"
          transform="translate(-256 -267.471)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2283"
          data-name="Trazado 2283"
          d="M258.837,337.146h-2.27a.567.567,0,0,1,0-1.135h2.27a.567.567,0,0,1,0,1.135Z"
          transform="translate(-256 -329.201)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2284"
          data-name="Trazado 2284"
          d="M385.7,145.146h-1.135a.567.567,0,0,1,0-1.135H385.7a.567.567,0,1,1,0,1.135Z"
          transform="translate(-379.46 -144.011)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2285"
          data-name="Trazado 2285"
          d="M385.7,209.146h-1.135a.567.567,0,0,1,0-1.135H385.7a.567.567,0,1,1,0,1.135Z"
          transform="translate(-379.46 -205.741)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2286"
          data-name="Trazado 2286"
          d="M385.7,273.146h-1.135a.567.567,0,0,1,0-1.135H385.7a.567.567,0,0,1,0,1.135Z"
          transform="translate(-379.46 -267.471)"
          fill="#388e3c"
        />
        <path
          id="Trazado_2287"
          data-name="Trazado 2287"
          d="M385.7,337.146h-1.135a.567.567,0,0,1,0-1.135H385.7a.567.567,0,0,1,0,1.135Z"
          transform="translate(-379.46 -329.201)"
          fill="#388e3c"
        />
      </g>
      <path
        id="Trazado_2288"
        data-name="Trazado 2288"
        d="M10.009,16.113A.584.584,0,0,0,9.542,16L.463,17.6A.542.542,0,0,0,0,18.123V29.856a.543.543,0,0,0,.463.524l9.079,1.6a.567.567,0,0,0,.1.01.587.587,0,0,0,.362-.123.521.521,0,0,0,.205-.411V16.523A.52.52,0,0,0,10.009,16.113Z"
        fill="#2e7d32"
      />
      <path
        id="Trazado_2289"
        data-name="Trazado 2289"
        d="M84.951,165.327l-1.794-2.051,1.815-2.333a.568.568,0,0,0-.9-.7l-1.681,2.161-1.416-1.618a.567.567,0,0,0-.853.747l1.561,1.784L80.1,165.352a.568.568,0,0,0,.9.7l1.447-1.861,1.65,1.885a.567.567,0,1,0,.853-.746Z"
        transform="translate(-77.181 -139.414)"
        fill="#fafafa"
      />
    </g>
  </svg>
)

IcExcel.propTypes = {
  size: PropTypes.number,
}

IcExcel.defaultProps = {
  size: 18,
}

export default IcExcel

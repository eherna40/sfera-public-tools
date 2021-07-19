import React from 'react'
import PropTypes from 'prop-types'

const IcBottle = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="20"
    viewBox="0 0 17.475 40.773"
  >
    <path
      id="Trazado_2361"
      data-name="Trazado 2361"
      d="M197.086,143.79l-1.748-2.016a1.448,1.448,0,0,1-.363-1.091l.658-6.825a5.054,5.054,0,0,1,1.957-3.46,6.845,6.845,0,0,1,8.3,0,5.052,5.052,0,0,1,1.957,3.46l.658,6.825a1.447,1.447,0,0,1-.363,1.091l-1.748,2.016a7.393,7.393,0,0,1,4.086,6.394v17.991a1.735,1.735,0,0,1-1.846,1.6H194.846a1.735,1.735,0,0,1-1.846-1.6V150.184A7.393,7.393,0,0,1,197.086,143.79Zm9.7,8.842H196.692v7.026h10.091Zm-4-10.007,1.979-2.282-.6-6.22a2.489,2.489,0,0,0-4.851,0l-.6,6.22,1.978,2.282Z"
      transform="translate(-193 -128.998)"
      fill="#0f666c"
    />
  </svg>
)
IcBottle.propTypes = {
  color: PropTypes.string,
}
IcBottle.defaultProps = {
  color: '#0f666c',
}
export default IcBottle

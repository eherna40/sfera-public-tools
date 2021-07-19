import React from 'react'
import PropTypes from 'prop-types'

const IcUpload = ({ size, color }) => (
  <svg
    id="ic_textfield_upload"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
  >
    <g id="Grupo_3726" data-name="Grupo 3726" transform="translate(-740 -357)">
      <g id="Grupo_3723" data-name="Grupo 3723" transform="translate(-1)">
        <rect
          id="Rectángulo_2231"
          data-name="Rectángulo 2231"
          width="20"
          height="20"
          transform="translate(741 357)"
          fill="none"
        />
      </g>
    </g>
    <rect
      id="Rectángulo_2607"
      data-name="Rectángulo 2607"
      width="8"
      height="2"
      transform="translate(6 14)"
      fill={color}
    />
    <rect
      id="Rectángulo_2612"
      data-name="Rectángulo 2612"
      width="8"
      height="2"
      transform="translate(9 12) rotate(-90)"
      fill={color}
    />
    <rect
      id="Rectángulo_2608"
      data-name="Rectángulo 2608"
      width="5"
      height="2"
      transform="translate(4 16) rotate(-90)"
      fill={color}
    />
    <rect
      id="Rectángulo_2611"
      data-name="Rectángulo 2611"
      width="5"
      height="2"
      transform="translate(14 16) rotate(-90)"
      fill={color}
    />
    <g
      id="Grupo_6417"
      data-name="Grupo 6417"
      transform="translate(-1138.5 -369)"
    >
      <rect
        id="Rectángulo_2613"
        data-name="Rectángulo 2613"
        width="5"
        height="2"
        transform="translate(1144.965 375.5) rotate(-45)"
        fill={color}
      />
      <rect
        id="Rectángulo_2614"
        data-name="Rectángulo 2614"
        width="5"
        height="2"
        transform="translate(1148.5 371.965) rotate(45)"
        fill={color}
      />
    </g>
  </svg>
)
IcUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
IcUpload.defaultProps = {
  color: '#22949B',
  size: 20,
}
export default IcUpload

import React from 'react'
import PropTypes from 'prop-types'

const IcTableIcon = ({ size, sidebarVisible }) => (
  <svg
    id="ic_tabla_icono_columnas"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <rect
      id="Rectángulo_1638"
      data-name="Rectángulo 1638"
      width="16"
      height="16"
      fill={sidebarVisible ? 'white' : '#2c2c2c'}
    />
    <rect
      id="Rectángulo_2286"
      data-name="Rectángulo 2286"
      width="8"
      height="8"
      transform="translate(4 4)"
      fill={sidebarVisible ? '#A71E7A' : 'white'}
    />
    <rect
      id="Rectángulo_2326"
      data-name="Rectángulo 2326"
      width="2"
      height="5"
      transform="translate(5 6)"
      fill={sidebarVisible ? 'white' : '#2c2c2c'}
    />
    <rect
      id="Rectángulo_2327"
      data-name="Rectángulo 2327"
      width="1"
      height="5"
      transform="translate(8 6)"
      fill={sidebarVisible ? 'white' : '#2c2c2c'}
    />
    <rect
      id="Rectángulo_2328"
      data-name="Rectángulo 2328"
      width="1"
      height="5"
      transform="translate(10 6)"
      fill={sidebarVisible ? 'white' : '#2c2c2c'}
    />
  </svg>
)

IcTableIcon.propTypes = {
  size: PropTypes.number,
  sidebarVisible: PropTypes.bool,
}

IcTableIcon.defaultProps = {
  size: 16,
  sidebarVisible: false,
}

export default IcTableIcon

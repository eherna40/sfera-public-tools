import React from 'react'
import PropTypes from 'prop-types'
import icSfera from '../../assets/img/logos/logo_mono.svg'

const Logo = ({ width }) => (
  <div>
    <img src={icSfera} alt="sfera_logo" width={width} />
  </div>
)

Logo.propTypes = {
  width: PropTypes.number,
}

Logo.defaultProps = {
  width: 180,
}

export default Logo

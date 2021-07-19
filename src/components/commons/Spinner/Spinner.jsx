import React from 'react'
import PropTypes from 'prop-types'
import { SpinnerLoader } from './styles'

const Spinner = ({ size, color }) => (
  <div className="Spinner tw-flex tw-items-center tw-justify-center">
    <SpinnerLoader size={size} color={color}>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
      <div className="bounce1"></div>
    </SpinnerLoader>
  </div>
)

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
}

Spinner.defaultProps = {
  color: '#FFFFFF',
  size: 'small',
}

export default Spinner

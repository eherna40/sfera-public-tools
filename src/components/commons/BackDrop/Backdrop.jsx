import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const Backdrop = ({ zIndex, onClick, opacity }) => (
  <Container
    onClick={onClick}
    aria-hidden
    className={`tw-w-screen tw-h-screen tw-bg-black tw-bg-opacity-${opacity} tw-fixed tw-top-0 tw-left-0 transition-opacity tw-z-${zIndex}`}
  />
)

Backdrop.propTypes = {
  zIndex: PropTypes.oneOf([0, 10, 20, 30, 40, 50, 'auto']),
  onClick: PropTypes.func,
  opacity: PropTypes.string,
}

Backdrop.defaultProps = {
  zIndex: 50,
  opacity: '40',
}

export default Backdrop

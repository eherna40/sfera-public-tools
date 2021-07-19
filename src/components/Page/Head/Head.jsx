import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const Head = ({ children }) => (
  <Container className="Head tw-px-4 md:tw-w-full tw-py-3 tw-flex tw-items-center tw-relative">
    {children}
  </Container>
)

Head.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Head

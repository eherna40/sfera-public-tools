import React from 'react'
import PropTypes from 'prop-types'

const Foot = ({ children }) => <div>{children}</div>

Foot.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Foot

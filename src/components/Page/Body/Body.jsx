import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ children, name, className, style }) => (
  <div style={style} className={`Body-${name} tw-flex-1 ${className}`}>
    {children}
  </div>
)

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Body

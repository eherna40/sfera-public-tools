import React from 'react'
import PropTypes from 'prop-types'

const NonAuthLayout = ({ children }) => <>{children}</>

NonAuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default NonAuthLayout

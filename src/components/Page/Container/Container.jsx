import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, className, flex, name }) => {
  const mode = flex ? 'tw-flex tw-flex-col' : ''
  return (
    <div className={`${name} ${mode} ${className} name tw-w-full tw-h-full`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  flex: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

Container.defaultProps = {
  className: '',
  flex: true,
}

export default Container

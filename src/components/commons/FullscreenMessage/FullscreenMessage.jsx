import React from 'react'
import PropTypes from 'prop-types'

const FullscreenMessage = ({ children, className }) => (
  <div
    className={`tw-flex tw-flex-col tw-gap-8 tw-w-full tw-h-screen tw-p-16 tw-bg-secondary tw-text-white  tw-items-center tw-justify-center ${className}`}
  >
    {children}
  </div>
)

FullscreenMessage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FullscreenMessage

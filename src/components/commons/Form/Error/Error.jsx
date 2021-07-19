import React from 'react'
import PropTypes from 'prop-types'
import '../../../../styles/index.css'

const Error = ({ message, code }) => (
  <div className="tw-border-2 tw-border-alert tw-boder-solid tw-rounded tw-px-4 tw-py-2 tw-my-2">
    <div className="tw-font-bold tw-text-green-600 tw-text-xs">{code}</div>
    <div className="tw-font-bold tw-text-alert tw-text-sm">{message}</div>
  </div>
)

Error.propTypes = {
  message: PropTypes.string,
  code: PropTypes.number,
}

export default Error

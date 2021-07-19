import React from 'react'
import PropTypes from 'prop-types'

const OptionsSelector = ({ items, value, handleAction, color }) => (
  <div id="Drowpdown">
    <div className="tw-z-50 tw-group tw-inline-block tw-relative">
      <div className="tw-bg-gray-300 tw-text-gray-700 tw-font-semibold tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center tw-cursor-pointer">
        Dropdown
      </div>
      <ul className="tw-group tw-absolute tw-hidden tw-text-gray-700 tw-pt-1 group-hover:tw-block tw-cursor-pointer">
        <li className="tw-group tw-rounded-t tw-bg-gray-200 tw-hover:tw-bg-gray-400 tw-py-2 px-4 tw-block tw-whitespace-no-wrap">
          <div className="tw-group tw-w-full">One</div>
        </li>
      </ul>
    </div>
  </div>
)

OptionsSelector.propTypes = {
  items: PropTypes.array,
  value: PropTypes.object,
  handleAction: PropTypes.func,
  color: PropTypes.string,
}

OptionsSelector.defaultProps = {
  value: '0',
  items: [],
  handleAction: () => null,
}

export default OptionsSelector

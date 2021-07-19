import React from 'react'
import PropTypes from 'prop-types'
import MenuEditAndClone from '../../MenuEditAndClone/MenuEditAndClone'
import useListenerClose from '../../../../../infrastructure/Hooks/useListenerClose'

const Options = ({ options, row, onClose }) => {
  const { ref } = useListenerClose(onClose, true)
  return (
    <div ref={ref} className="tw-absolute tw-top-2 tw-left-0 tw-z-50">
      <div className="tw-w-60 tw-bg-white tw-flex tw-flex-col tw-px-4 tw-shadow-md">
        {options.map((item, index) => (
          <MenuEditAndClone
            {...item}
            key={index}
            onClick={() => {
              item.action(row[0])
              onClose()
            }}
          />
        ))}
      </div>
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.array,
  row: PropTypes.array,
  onClose: PropTypes.func,
}

export default Options

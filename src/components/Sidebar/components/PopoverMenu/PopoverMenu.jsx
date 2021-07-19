import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const PopoverMenu = ({ options, onClick, optionClick }) => (
  <Wrapper
    aria-hidden="true"
    className="tw-flex tw-z-50 tw-flex-col tw-absolute tw-w-28 tw-p-4 tw-gap-4 tw-shadow tw-text-base tw-bg-white"
  >
    {options &&
      options.map((option, index) => (
        <div
          key={index}
          className="tw-cursor-pointer hover:tw-font-bold"
          // onClick={(e) => onClick(e, option)}
          aria-hidden="true"
        >
          <div onClick={() => optionClick(option)} aria-hidden="true">
            {option}
          </div>
        </div>
      ))}
  </Wrapper>
)

PopoverMenu.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
  optionClick: PropTypes.func,
}

export default PopoverMenu

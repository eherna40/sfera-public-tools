import React, { useState } from 'react'
import PropTypes from 'prop-types'

// styles
import { Input, InputContent } from './styles'
import BtnArrowDown from './components/BtnArrowDown'

const SearchInputArrow = ({
  refInput,
  onChange,
  autoFocus,
  placeholder,
  theme,
  transparent,
  onClickAdd,
}) => {
  const [focused, setfocused] = useState(autoFocus)

  const bg = !transparent
    ? `tw-bg-${theme}`
    : `tw-bg-transparent tw-border-${theme} tw-border tw-border-solid`

  const handleChangeText = (event) => {
    setfocused(false)
    if (onChange) onChange(event.target.value)
  }

  return (
    <div className="SearchInput tw-flex tw-w-full">
      <InputContent
        className={`input ${bg} tw-w-full tw-px-2 tw-h-10 tw-pl-3 tw-pr-2 tw-border tw-border-1 tw-flex tw-justify-between tw-items-center tw-relative ${
          focused ? 'tw-focus' : ' '
        }`}
      >
        <Input
          disabled
          innerRef={refInput}
          onChange={(event) => handleChangeText(event)}
          type="search"
          name="search"
          placeholder={placeholder}
          className="tw-bg-transparent tw-w-full tw-outline-none focus:tw-outline-none active:tw-outline-none"
        />
      </InputContent>
      <div className="tw-ml-4 tw-h-full">
        <BtnArrowDown theme={theme} onClick={onClickAdd} />
      </div>
    </div>
  )
}

SearchInputArrow.propTypes = {
  refInput: PropTypes.func,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOf(['search', 'filter']),
  onClickSearch: PropTypes.func,
  onClickAdd: PropTypes.func,
}

SearchInputArrow.defaultProps = {
  refInput: undefined,
  autoFocus: false,
  onChange: undefined,
  theme: 'green',
  onClickSearch: () => null,
  onClickAdd: () => null,
  icon: 'search',
}

export default SearchInputArrow

import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import BtnAdd from './components/BtnAdd'
import IcSearch from '../../Icons/IcSearch'
import IcFilter from '../../Icons/IcFilter'
import { Input, InputContent } from './styles'

const SearchInput = ({
  iconColor,
  refInput,
  onChange,
  autoFocus,
  placeholder,
  theme,
  transparent,
  icon,
  onClickSearch,
  onClickAdd,
  border,
  noButton,
  className,
  defaultValue,
}) => {
  const { t } = useTranslation()
  const bg = !transparent
    ? `tw-bg-${theme}`
    : `tw-bg-transparent tw-border-${theme} tw-border tw-border-solid`

  const handleChangeText = (event) => {
    if (onChange) onChange(event.target.value)
  }
  return (
    <div className={`${className} SearchInput tw-flex tw-w-full`}>
      <InputContent
        className={`input ${bg} tw-w-full tw-px-2 tw-h-10 tw-pl-3 tw-pr-2 tw-border tw-border-1 tw-flex tw-justify-between tw-items-center tw-relative`}
      >
        {icon === 'search' && (
          <IcSearch
            color={iconColor}
            size={25}
            onClick={onClickSearch}
            className={`tw-${theme}-900 tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-2 tw-pr-2 tw-border-1`}
          />
        )}
        {icon === 'filter' && (
          <IcFilter
            onClick={onClickSearch}
            className={`tw-${theme}-900 tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-2 tw-pr-2 tw-border-1`}
          />
        )}
        <Input
          ref={refInput}
          onChange={(event) => handleChangeText(event)}
          type="search"
          name="search"
          autoComplete="off"
          disabled={icon === 'filter'}
          placeholder={t(`placeholders.${placeholder}`)}
          className="tw-bg-transparent tw-w-full tw-outline-none focus:tw-outline-none active:tw-outline-none"
          defaultValue={defaultValue}
          autoFocus={autoFocus}
        />
      </InputContent>

      {!noButton && (
        <div className="tw-ml-4 tw-h-full">
          <BtnAdd theme={theme} onClick={onClickAdd} border={border} />
        </div>
      )}
    </div>
  )
}

SearchInput.propTypes = {
  refInput: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOf(['search', 'filter']),
  onClickSearch: PropTypes.func,
  onClickAdd: PropTypes.func,
  border: PropTypes.bool,
  noButton: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
}

SearchInput.SearchInput = {
  refInput: undefined,
  autoFocus: false,
  onChange: undefined,
  theme: 'green',
  onClickSearch: () => null,
  onClickAdd: () => null,
  icon: 'search',
  border: true,
  noButton: false,
  defaultValue: '',
}

export default SearchInput

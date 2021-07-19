import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import AsyncSelect from 'react-select/async'
import { components } from 'react-select'

// styles
import { InputContent, Error, Tooltip, ContainerIcon } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import colors from '../../../../styles/colors'
// import IcSearch from '../../Icons/IcSearch'
import IcExpandMore from '../../Icons/IcExpandMore'

const Control = ({ children, ...props }) => {
  const { iconInfo, onClickInfo } = props.selectProps
  return (
    <components.Control {...props}>
      {iconInfo && (
        <span onMouseDown={onClickInfo} className="tw-cursor-pointer tw-pl-2">
          {iconInfo}
        </span>
      )}
      {children}
      <div className="tw-cursor-pointer tw-pl-2">
        <IcExpandMore size={25} color="black" />
      </div>
    </components.Control>
  )
}

const Menu = (props) => {
  const { t } = useTranslation()
  return (
    <div className="tw-shadow-md tw-w-full">
      <components.Menu {...props}>
        <div className="tw-my-3 tw-text-sm tw-pt-0 tw-pb-0 tw-pl-6 tw-pr-2 tw-overflow tw-text-primary tw-cursor-pointer">
          <Paragraphs weight="bold" size="sm">
            <span style={{ fontWeight: 'normal' }}>
              {t('actions.Añadir nuevo')}
            </span>
          </Paragraphs>
        </div>
        <div className="tw-border-t"> {props.children}</div>
      </components.Menu>
    </div>
  )
}

const Option = (props) => (
  <div className="tw-my-2 tw-text-sm tw-pt-0 tw-pl-4 tw-pr-2 tw-cursor-pointer">
    <components.Option {...props} />
  </div>
)

const TextInputSelect = ({
  error,
  // name,
  label,
  size,
  transparent,
  // placeholder,
  type,
  // autoFocus,
  // reference,
  // autoComplete,
  disabled,
  required,
  defaultValue,
  // withClose,
  icon,
  center,
  titleTooltip,
  messageTooltip,
  colorTooltip,
  positionTooltip,
  // bold,
  // alignRight,
  // color,
  text,
  handleText,
  hideError,
  onChange,
  loadOptions,
  isLoading,
  preload,
  onMenuOpen,
  // defaultValue,
  // onClickClose,
}) => {
  const { t } = useTranslation()
  const [options, setOptions] = useState(null)
  // const [input, setInput] = useState(null)

  useEffect(() => {
    setOptions(preload)
  }, [preload])

  const width = size === 'small' ? 'tw-w-60' : 'tw-w-full'
  const bg =
    disabled || transparent
      ? 'tw-bg-transparent tw-border-green-200 tw-border tw-border-solid'
      : 'tw-bg-secondary tw-bg-opacity-10'

  const styles = {
    control: (provided) => ({
      ...provided,
      borderStyle: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontFamily: 'Atkinson Hyperlegible Regular',
      fontSize: '0.75rem',
      padding: 0,
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 0,
      width: '100%',
    }),
    menu: (provided) => ({
      ...provided,
      borderStyle: 'none',
      borderRadius: 0,
      marginTop: 0,
      boxShadow: 'none',
    }),
    option: (provided, { data, isDisabled, isFocused }) => ({
      ...provided,
      // marginTop: 0,
      borderBottomWidth: 1,
      color: data.color,
      backgroundColor: isDisabled ? data.color : isFocused ? null : data.color,
      textDecorationLine: isDisabled ? null : isFocused ? 'underline' : null,
      cursor: 'pointer',
    }),
    menuList: (provided) => ({
      ...provided,
      marginTop: 0,
      paddingTop: 0,
    }),
  }
  return (
    <div
      className={`TextInputIcon tw-w-full ${
        center && 'tw-flex tw-justify-center'
      }  ${type === 'hidden' ? 'tw-hidden' : ''}`}
    >
      {label && (
        <div className="label tw-mb-1">
          <Paragraphs size="xs" weight="bold">
            {label}
            {required && <span className="tw-text-alert">*</span>}
          </Paragraphs>
        </div>
      )}
      <InputContent
        error={error}
        className={`input ${bg}  ${width} tw-flex tw-justify-between tw-items-center`}
      >
        <AsyncSelect
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: colors.primary,
            },
          })}
          loadingMessage={() => t('actions.loadingOoo')}
          className="AsyncSelect tw-h-full tw-w-full"
          styles={styles}
          defaultValue={defaultValue}
          loadOptions={loadOptions}
          components={{
            Control,
            Menu,
            Option,
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            LoadingIndicator: () => null,
          }}
          onChange={onChange}
          onMenuOpen={() => onMenuOpen()}
          defaultOptions={options}
          isLoading={isLoading}
          iconInfo={
            icon && (
              <ContainerIcon className="tw-mr-2 tw-flex tw-justify-between tw-items-center">
                {icon}
                {messageTooltip && (
                  <Tooltip
                    className={`Tooltip tw-w-60 tw-absolute tw-top-8 ${
                      positionTooltip === 'left' ? 'tw-right-2' : 'tw-left-2'
                    } tw-p-4 tw-shadow-lg`}
                  >
                    <div
                      className={`${
                        // eslint-disable-next-line no-nested-ternary
                        colorTooltip === 'error'
                          ? 'tw-text-alert'
                          : colorTooltip === 'success'
                          ? 'tw-text-success'
                          : 'tw-text-warning'
                      }`}
                    >
                      <Paragraphs size="sm" weight="bold">
                        {titleTooltip}
                      </Paragraphs>
                    </div>
                    <Paragraphs size="xs">{messageTooltip}</Paragraphs>
                  </Tooltip>
                )}
              </ContainerIcon>
            )
          }
          iconArrow={
            <ContainerIcon className="tw-mr-2 tw-flex tw-justify-between tw-items-center">
              {icon}
            </ContainerIcon>
          }
        />
        {text && (
          <div
            aria-hidden="true"
            className="tw-cursor-pointer"
            onClick={handleText}
          >
            <Paragraphs className="tw-text-primary" weight="bold" size="xs">
              {text}
            </Paragraphs>
          </div>
        )}
      </InputContent>

      <Error
        className={`tw-text-red-600 tw-font-Atkinson-bold tw-pt-1 ${
          hideError && 'tw-hidden'
        }`}
      >
        {error}
      </Error>
    </div>
  )
}

TextInputSelect.propTypes = {
  error: PropTypes.string,
  // name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'hidden']),
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  transparent: PropTypes.bool,
  // autoFocus: PropTypes.bool,
  // placeholder: PropTypes.string,
  required: PropTypes.bool,
  // reference: PropTypes.oneOfType([
  //   PropTypes.func,
  //   PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  // ]).isRequired,
  disabled: PropTypes.bool,
  // autoComplete: PropTypes.string,
  defaultValue: PropTypes.string,
  // withClose: PropTypes.bool,
  icon: PropTypes.node,
  center: PropTypes.bool,
  titleTooltip: PropTypes.string,
  messageTooltip: PropTypes.string,
  colorTooltip: PropTypes.oneOf(['success', 'warning', 'error']),
  positionTooltip: PropTypes.oneOf(['left', 'right']),
  hideError: PropTypes.bool,
  onChange: PropTypes.func,
  loadOptions: PropTypes.func,
  // defaultValue: PropTypes.string,
  // onClickClose: PropTypes.func,
  isLoading: PropTypes.bool,
  preload: PropTypes.array,
  onMenuOpen: PropTypes.func,
}

TextInputSelect.defaultProps = {
  type: 'text',
  // autoComplete: 'false',
  positionTooltip: 'right',
  hideError: false,
  onChange: () => null,
  loadOptions: () => null,
  // withClose: false,
  // onClickClose: () => null,
  isLoading: false,
  preload: [],
  onMenuOpen: () => null,
  defaultValue: { label: 'None', value: 0 },
}

export default TextInputSelect

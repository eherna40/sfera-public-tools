import React, { useState } from 'react'
import PropTypes from 'prop-types'

// styles
import { useTranslation } from 'react-i18next'
import NumberFormat from 'react-number-format'
import { InputContent, Input, Error } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import IcEye from '../../Icons/IcEye'

// icons
// import mapIcon from '../../../../assets/img/ic_icons/ic_map_client'

const TextInput = ({
  row,
  error,
  name,
  label,
  size,
  transparent,
  placeholder,
  type,
  autoFocus,
  reference,
  disabled,
  required,
  value,
  hideError,
  alignRight,
  currency,
  color,
  bold,
  containerStyles,
  labelStyles,
  classNameInput,
  readOnly,
  onChange,
  description,
  defaultValue,
  noMarginBottom,
  uppercase,
  hideLabelErrors,
}) => {
  const { t } = useTranslation()
  const [typeInput, setTypeInput] = useState(type)
  const width = size === 'small' ? 'tw-w-60' : 'tw-w-full'
  const bg =
    disabled || transparent || readOnly
      ? 'tw-bg-white tw-border-secondary tw-border tw-border-solid tw-border-opacity-10'
      : 'tw-bg-secondary tw-bg-opacity-10'
  
  const textError = hideLabelErrors ? error : t(`errors.${error}`)
  // console.log(name, hideLabelErrors)
  return (
    <div
      className={`TextInput ${row && 'tw-flex'} tw-w-full ${
        noMarginBottom ? '' : 'tw-mb-2'
      } ${type === 'hidden' ? 'tw-hidden' : ''} ${containerStyles}`}
    >
      {label && (
        <div
          className={`label ${noMarginBottom ? '' : 'tw-mb-1'} ${labelStyles}`}
        >
          <Paragraphs size="xs" weight="bold">
            {t(`labels.${label}`)}
            {required && <span className="tw-text-alert">*</span>}
          </Paragraphs>
        </div>
      )}
      <InputContent
        error={error}
        className={`input ${bg} tw-px-2 ${width} tw-flex tw-justify-between tw-items-center`}
      >
        {type === 'phone' && (
          <div className="tw-opacity-60 tw-mr-1 tw-h-full tw-flex tw-items-center">
            +34
          </div>
        )}
        {type === 'currency' ? (
          <NumberFormat
            // thousandSeparator={2}
            name={name}
            ref={reference}
            suffix="€"
            className="tw-bg-transparent tw-outline-none tw-text-right tw-w-full tw-px-2"
          />
        ) : (
          <Input
            autoCorrect={null}
            color={color}
            autoSave="off"
            bold={bold}
            alignRight={alignRight}
            value={currency ? `${value} €` : value}
            autoFocus={autoFocus}
            name={name}
            type={typeInput}
            autoComplete={type === 'password' ? 'new-password' : 'off'}
            placeholder={placeholder ? t(`placeholders.${placeholder}`) : ''}
            className={`${classNameInput} tw-bg-transparent tw-outline-none tw-h-full tw-w-full ${
              uppercase && 'tw-uppercase'
            }`}
            ref={reference}
            disabled={disabled}
            readOnly={readOnly}
            onChange={onChange}
            // required={required}
            defaultValue={defaultValue}
          />
        )}

        {type === 'password' && (
          <div
            aria-hidden
            onClick={() =>
              setTypeInput(typeInput === 'password' ? 'text' : 'password')
            }
            className="text-input-eye tw-cursor-pointer"
          >
            <IcEye />
          </div>
        )}
        <img src="" alt="" />
      </InputContent>

      {description && (
        <Paragraphs italic size="xxs" className="tw-text-gray-700">
          {description}
        </Paragraphs>
      )}
      <Error
        className={`tw-text-red-600 tw-font-Atkinson-bold tw-pt-1 ${
          hideError && 'tw-hidden'
        }`}
      >
        {error && textError}
      </Error>
    </div>
  )
}

TextInput.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'hidden',
    'date',
    'time',
    'phone',
  ]),
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  transparent: PropTypes.bool,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideError: PropTypes.bool,
  alignRight: PropTypes.bool,
  row: PropTypes.bool,
  containerStyles: PropTypes.string,
  labelStyles: PropTypes.string,
  classNameInput: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  noMarginBottom: PropTypes.bool,
  uppercase: PropTypes.bool,
}

TextInput.defaultProps = {
  type: 'text',
  hideError: false,
  row: false,
  readOnly: false,
  onChange: null,
  noMarginBottom: false,
  uppercase: false,
}

export default TextInput

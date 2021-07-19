import React from 'react'
import PropTypes from 'prop-types'

// styles
import { InputContent, Input, Error, Tooltip, ContainerIcon } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import IcSearch from '../../Icons/IcSearch'
import IcClose from '../../Icons/IcClose'

const TextInputIcon = ({
  error,
  name,
  label,
  size,
  transparent,
  placeholder,
  type,
  autoFocus,
  reference,
  autoComplete,
  disabled,
  required,
  value,
  withSearch,
  withClose,
  icon,
  center,
  titleTooltip,
  messageTooltip,
  colorTooltip,
  positionTooltip,
  bold,
  alignRight,
  color,
  text,
  handleText,
  hideError,
  onChange,
  defaultValue,
  onClickClose,
}) => {
  const width = size === 'small' ? 'tw-w-60' : 'tw-w-full'
  const bg =
    disabled || transparent
      ? 'tw-bg-transparent tw-border-green-200 tw-border tw-border-solid'
      : 'tw-bg-secondary tw-bg-opacity-10'
  return (
    <div
      className={`TextInputIcon tw-w-full ${
        center && 'tw-flex tw-justify-center'
      } tw-mb-2 ${type === 'hidden' ? 'tw-hidden' : ''}`}
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
        className={`input ${bg} tw-px-2 ${width} tw-flex tw-justify-between tw-items-center`}
      >
        {icon && (
          <ContainerIcon className="tw-mr-2 tw-relative tw-flex tw-justify-between tw-items-center">
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
        )}
        <Input
          color={color}
          alignRight={alignRight}
          bold={bold}
          value={value}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          name={name}
          type={type}
          placeholder={placeholder}
          className="tw-bg-transparent tw-outline-none tw-h-full tw-w-full"
          ref={reference}
          disabled={disabled}
          required={required}
          onChange={onChange}
          defaultValue={defaultValue}
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
        {withSearch ? (
          <div className="">
            <IcSearch size={18} color="#2C2C2C" />
          </div>
        ) : (
          withClose && (
            <div
              onKeyDown={() => null}
              onClick={() => onClickClose()}
              className="tw-flex tw-cursor-pointer"
            >
              <IcClose size={18} color="#2C2C2C" />
            </div>
          )
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

TextInputIcon.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'hidden']),
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  transparent: PropTypes.bool,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  withSearch: PropTypes.bool,
  withClose: PropTypes.bool,
  icon: PropTypes.node,
  center: PropTypes.bool,
  titleTooltip: PropTypes.string,
  messageTooltip: PropTypes.string,
  colorTooltip: PropTypes.oneOf(['success', 'warning', 'error']),
  positionTooltip: PropTypes.oneOf(['left', 'right']),
  hideError: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  onClickClose: PropTypes.func,
}

TextInputIcon.defaultProps = {
  type: 'text',
  autoComplete: 'false',
  positionTooltip: 'right',
  hideError: false,
  onChange: () => null,
  withClose: false,
  onClickClose: () => null,
}

export default TextInputIcon

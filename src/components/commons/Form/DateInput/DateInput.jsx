import React from 'react'
import PropTypes from 'prop-types'

// styles
import { InputContent, Input, Error } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { useTranslation } from 'react-i18next'

const DateInput = ({
  error,
  name,
  label,
  size,
  transparent,
  type,
  reference,
  disabled,
}) => {
  const { t } = useTranslation()
  const width = size === 'small' ? 'tw-w-60' : 'tw-w-full'
  const bg =
    disabled || transparent
      ? 'tw-bg-transparent tw-border-secondary tw-border tw-border-solid tw-border-opacity-10'
      : 'tw-bg-secondary tw-bg-opacity-10'
  return (
    <div
      className={`TextInput tw-w-full tw-mb-2 ${
        type === 'hidden' ? 'tw-hidden' : ''
      }`}
    >
      {label && (
        <div className="label tw-mb-1">
          <Paragraphs size="xs" weight="bold">
            {t(`labels.${label}`)}
          </Paragraphs>
        </div>
      )}
      <InputContent
        error={error}
        className={`input ${bg} tw-px-2 ${width} tw-flex tw-justify-between tw-items-center`}
      >
        <Input
          name={name}
          type={type}
          className="tw-bg-transparent tw-outline-none tw-h-full tw-w-full"
          ref={reference}
          disabled={disabled}
        />
      </InputContent>
      <Error className="tw-text-red-600 tw-font-Atkinson-bold tw-pt-1">
        {error}
      </Error>
    </div>
  )
}

DateInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'hidden', 'date']),
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  transparent: PropTypes.bool,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  disabled: PropTypes.bool,
}

DateInput.defaultProps = {
  type: 'date',
}

export default DateInput

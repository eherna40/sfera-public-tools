import React from 'react'
import PropTypes from 'prop-types'

// styles
import { TextAreaInput, Error } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Textarea = ({
  error,
  name,
  label,
  placeholder,
  autoFocus,
  reference,
  autoComplete,
  disabled,
  required,
  value,
  labelWeight,
  minHeight,
}) => (
  <div className="TextAreaInput tw-w-full">
    {label && (
      <div className="label tw-mb-1">
        <Paragraphs size="xs" weight={labelWeight}>
          {label}
        </Paragraphs>
      </div>
    )}

    <TextAreaInput
      rows={2}
      value={value}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      name={name}
      placeholder={placeholder}
      className="tw-bg-transparent tw-outline-none tw-w-full tw-bg-secondary  tw-bg-opacity-10"
      ref={reference}
      disabled={disabled}
      required={required}
      minHeight={minHeight}
    />
    <Error className="tw-text-red-600 tw-font-Atkinson-bold tw-pt-1">
      {error}
    </Error>
  </div>
)

Textarea.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
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
  labelWeight: PropTypes.string,
  minHeight: PropTypes.number,
}

Textarea.defaultProps = {
  autoComplete: 'false',
}

export default Textarea

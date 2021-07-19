import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PinField from 'react-pin-field'
import PropTypes from 'prop-types'
import { Pin } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Pins = ({
  size,
  onChange,
  bgInput,
  title,
  onComplete,
  autoFocus,
  disabled,
  required,
  type,
}) => {
  const { t } = useTranslation()
  const pins = useRef([])
  useEffect(() => {
    if (autoFocus) {
      pins.current[0].focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Pin
      className="Pins tw-flex tw-flex-col tw-items-center tw-justify-center"
      size={size}
      
    >
      <div className="tw-w-full tw-flex tw-justify-between">
        <Paragraphs size="xs" weight="bold" className="tw-mb-1 tw-w-full">
          {title && t(`labels.${title}`)}
          {required && <span className="tw-text-alert">*</span>}
        </Paragraphs>
      </div>

      <div className="tw-flex tw-w-full tw-justify-between">
        <PinField
          disabled={disabled}
          onComplete={(e) => onComplete(e, pins)}
          onChange={(e) => onChange(e)}
          type={type}
          ref={pins}
          autoComplete="new-password"
          length={6}
          validate="0123456789"
          className={`field-a tw-border tw-border-solid tw-rounded-none tw-text-tertiary tw-border-greenLight tw-w-1/6 tw-mr-2 tw-outline-none ${
            bgInput && 'tw-bg-secondary tw-bg-opacity-10 tw-border-none'
          }`}
        />
      </div>
    </Pin>
  )
}

Pins.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
  onChange: PropTypes.func,
  inlineStyle: PropTypes.string,
  bgInput: PropTypes.bool,
  title: PropTypes.string,
  onComplete: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['password', 'text']),
}

Pins.defaultProps = {
  size: 'small',
  title: 'Código PIN',
  onComplete: () => {},
  autoFocus: false,
  type: 'password',
}

export default Pins

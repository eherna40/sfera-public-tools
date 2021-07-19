import React from 'react'
import PropTypes from 'prop-types'
// Components
import IcHelp from '../../Icons/IcHelp'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Wrapper } from './styles'

const RadioInput = ({
  name,
  checked,
  handleCheck,
  available,
  label,
  checkActive,
  showInfo,
  id,
  className,
  active,
  reference,
  secondary,
  labelSize,
}) => (
  <div className="tw-flex">
    <Wrapper
      active={active}
      checked={checked}
      secondary={secondary}
      className="tw-flex tw-relative tw-w-full tw-items-center tw-content-center tw-gap-2"
    >
      <input
        ref={reference}
        onChange={(e) => handleCheck(e)}
        type="radio"
        id={id}
        name={name || `rol-${id}`}
        checked={checked}
        className={`custom-input tw-opacity-1 ${
          available && 'tw-cursor-pointer'
        } tw-absolute tw-w-full tw-h-full tw-z-50 tw-opacity-0`}
        disabled={!available}
        value={label}
      />
      <div className="tw-w-full">
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-items-center tw-gap-2">
            <div
              className={`checkmark tw-flex tw-items-center tw-justify-center tw-border-2 ${
                checked && secondary && 'tw-border-secondary'
              }`}
            >
              <div
                className={`checkmark-fill ${
                  active
                    ? 'tw-bg-white'
                    : secondary
                    ? 'tw-bg-green-600'
                    : 'tw-bg-primary'
                }`}
              ></div>
            </div>

            <label
              htmlFor="rol"
              className={`${checkActive && active && 'tw-text-white'} ${
                !checked && checkActive && active && 'tw-opacity-50'
              } ${className && active && className}`}
            >
              <Paragraphs size={labelSize}>{label}</Paragraphs>
            </label>
          </div>
        </div>
      </div>
    </Wrapper>
    {showInfo && (
      <div
        className="tw-flex tw-items-center tw-justify-center tw-opacity-30 tw-cursor-pointer"
        aria-hidden
        onClick={showInfo}
      >
        <IcHelp
          size={20}
          color={`${active && checkActive ? 'white' : 'primary'}`}
        />
      </div>
    )}
  </div>
)

RadioInput.propTypes = {
  name: PropTypes.string,
  handleCheck: PropTypes.func,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  secondary: PropTypes.bool,
  labelSize: PropTypes.string,
}

RadioInput.defaultProps = {
  handleCheck: () => null,
  labelSize: 'xs',
}

export default RadioInput

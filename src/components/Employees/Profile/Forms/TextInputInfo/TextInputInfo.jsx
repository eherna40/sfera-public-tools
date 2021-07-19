import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  WrapperInputContent,
  WrapperLabel,
  WrapperInput,
} from './styles'

const TextInputInfo = ({
  name,
  label,
  size,
  transparent,
  placeholder,
  type,
  reference,
}) => {
  const width = size === 'small' ? 'tw-w-60' : 'tw-w-full'
  const bg = !transparent ? 'tw-bg-secondary tw-bg-opacity-10' : 'tw-bg-transparent'
  return (
    <Wrapper className="TextInput tw-mb-1">
      <WrapperLabel className="label tw-font-Atkinson-bold">
        {label}
      </WrapperLabel>
      <WrapperInputContent
        className={`input ${bg} tw-text-black ${width} tw-flex tw-justify-between tw-items-center`}
      >
        <WrapperInput
          name={name}
          type={type}
          placeholder={placeholder}
          className="tw-bg-transparent tw-outline-none tw-h-full tw-w-full"
          ref={reference}
          disabled
        />
      </WrapperInputContent>
    </Wrapper>
  )
}

TextInputInfo.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  transparent: PropTypes.bool,
  placeholder: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
}

TextInputInfo.defaultProps = {
  type: 'text',
  transparent: true,
}

export default TextInputInfo

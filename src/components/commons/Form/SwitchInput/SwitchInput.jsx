import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Components
import { Label, InputContent, Error } from './styles'
import Switch from '../../Switch/Switch'

const SwitchInput = ({ name, label, error, reference }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="SwitchInput tw-relative">
      {label && <Label className="label tw-font-bold">{label}</Label>}
      <InputContent className="tw-flex tw-items-end tw-justify-center">
        <div onClick={() => setChecked(!checked)} aria-hidden="true">
          <Switch active={checked} />
          <input
            name={name}
            type="checkbox"
            className="tw-absolute tw-h-full tw-opacity-0 tw-cursor-pointer"
            checked={checked}
            ref={reference}
          />
        </div>
      </InputContent>
      <Error className="tw-text-red-600 tw-font-Atkinson-bold tw-pt-1">
        {error}
      </Error>
    </div>
  )
}

SwitchInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  error: PropTypes.string,
}

SwitchInput.defaultProps = {
  label: 'Active',
}

export default SwitchInput

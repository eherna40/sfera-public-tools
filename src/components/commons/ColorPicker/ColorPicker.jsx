import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import { ColorInput } from './styles'

export const ColorPicker = ({
  value,
  className,
  name,
  onColorSelect,
  defaultValue,
  disabled,
  title,
  label,
}) => {
  const handleColorSelect = (event) => {
    event.preventDefault()
    const {
      target: { value },
    } = event

    onColorSelect(value)
  }

  return (
    <div className="tw-flex tw-flex-col tw-gap-2 tw-mr-8 tw-my-4">
      {title && (
        <Paragraphs
          className="tw-text-gray-500"
          weight="regular"
          italic
          size="sm"
        >
          {title}
        </Paragraphs>
      )}
      <div className="tw-flex">
        <ColorInput
          className={className}
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
          type="color"
          value={value}
          onChange={handleColorSelect}
        />
        {label && <label className="tw-text-xs tw-px-2">{label}</label>}
      </div>
    </div>
  )
}
ColorPicker.propTypes = {
  disabled: PropTypes.bool,
  onColorSelect: PropTypes.func,
}

ColorPicker.defaultProps = {
  disabled: false,
  onColorSelect: () => {},
}

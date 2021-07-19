import React from 'react'
import PropTypes from 'prop-types'

// styles
import { useTranslation } from 'react-i18next'
import { Select, Error, SelectArrow, SelectContainer } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'

const SelectInput = ({
  error,
  name,
  label,
  reference,
  items,
  value,
  required,
  onChange,
  hideError,
  transparent,
  className,
  disable,
  selected,
}) => {
  const { t } = useTranslation()
  return (
    <div className={`SelectInput tw-w-full ${className}`}>
      {label && (
        <Paragraphs className="tw-mb-1" size="xs" weight="bold">
          {t(`labels.${label}`)}
          {required && <span className="tw-text-red-500"> *</span>}
        </Paragraphs>
      )}
      <SelectContainer>
        <Select
          transparent={transparent}
          value={value}
          name={name}
          className={`tw-bg-transparent ${
            transparent && 'tw-border'
          } tw-w-full tw-flex tw-items-center tw-font-Atkinson`}
          ref={reference}
          onChange={onChange}
          disabled={disable}
        >
          {items.map(({ id, name: itemName }) => (
            <option key={id} value={id} selected={selected === id}>
              {itemName}
            </option>
          ))}
        </Select>

        <SelectArrow />
      </SelectContainer>

      <Error
        className={`tw-text-red-600 tw-font-Atkinson-bold tw-pt-1 ${
          hideError && 'tw-hidden'
        }`}
      >
        {error && t(`errors.${error}`)}
      </Error>
    </div>
  )
}

SelectInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  items: PropTypes.array,
  value: PropTypes.string,
  required: PropTypes.bool,
  valueid: PropTypes.bool,
  reference: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onChange: PropTypes.func,
  hideError: PropTypes.bool,
  transparent: PropTypes.bool,
  disable: PropTypes.bool,
  selected: PropTypes.number,
}

SelectInput.defaultProps = {
  hideError: false,
  transparent: false,
  onChange: () => null,
  disable: false,
}
export default SelectInput

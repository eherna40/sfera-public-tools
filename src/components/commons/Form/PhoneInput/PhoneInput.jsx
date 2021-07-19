import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Input, Star, Plus, DropdownWrapper } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import IcStart from '../../Icons/IcStart'
import IcPlus from '../../Icons/IcPlus'
import Dropdown from '../../Dropdown'
// eslint-disable-next-line
import colors from '../../../../styles/colors'

const PhoneInput = ({ reference, label, name, onChange }) => {
  const [unfold, setUnfold] = useState(false)
  const [value, setValue] = useState({ name: '', default: 0 })
  const ref = useRef()

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setUnfold(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (value.name) {
      onChange(name, value.name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const toggleDropdown = (e) => {
    e.preventDefault()
    setUnfold(!unfold)
  }

  const handleValueClick = (e, i) => {
    e.preventDefault()
    setValue(i)
    if (Object.keys(i).length) {
      setUnfold(false)
    }
  }

  return (
    <div className="tw-w-full">
      <label
        htmlFor="adress"
        className="tw-flex tw-flex-col tw-items-start tw-relative"
      >
        <Paragraphs size="xs" weight="bold" className="tw-mb-1">
          {label}
        </Paragraphs>
        <Star className="tw-absolute tw-bottom-0">
          <IcStart
            size={15}
            color={value.default ? colors.primary : colors.grey[800]}
          />
        </Star>
        <Plus
          className="tw-absolute tw-cursor-pointer"
          onClick={(e) => toggleDropdown(e)}
        >
          <IcPlus size={15} />
        </Plus>
        <div className="tw-w-full tw-w-relative">
          <Input
            id="adress"
            type="text"
            className="tw-p-0 tw-bg-secondary tw-bg-opacity-10 tw-outline-none tw-w-full"
            ref={reference}
            name={name}
            value={value.name}
            readOnly
            onChange={onChange}
          />
        </div>
        {unfold && (
          <DropdownWrapper
            ref={ref}
            className="tw-absolute tw-bottom-0 tw-right-0 tw-z-50"
          >
            <Dropdown handleClick={handleValueClick} />
          </DropdownWrapper>
        )}
      </label>
    </div>
  )
}

PhoneInput.propTypes = {
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}
PhoneInput.defaultProps = {
  label: 'Teléfono',
  onChange: () => null,
}

export default PhoneInput

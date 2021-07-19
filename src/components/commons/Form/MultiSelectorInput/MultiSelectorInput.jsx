/* eslint-disable no-return-assign */
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Input, DropdownWrapper, SelectArrow } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import Dropdown from '../../Dropdown'

const MultiSelectorInput = ({
  reference,
  label,
  name,
  onChange,
  items,
  required,
  onClickItem,
  multi,
}) => {
  const [unfold, setUnfold] = useState(false)
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

  const toggleDropdown = () => {
    setUnfold(!unfold)
  }

  const renderValue = () => {
    const activeValues = items.filter((item) => item.active)
    let values = ''
    activeValues.forEach(
      (el, index) =>
        (values = values.concat(index === 0 ? el.name : `, ${el.name}`)),
    )
    // La prop multi es solo para definir el valor por defecto que se mostrará en el input.
    // La lógica para que solo se pueda seleccionar un item tiene que venir en la prop onClickItem.
    if (multi) {
      return values || 'Multiselección'
    }
    return values || items[0].name
  }

  useEffect(() => {
    renderValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <div className="tw-w-full">
      <label htmlFor="adress" className="tw-flex tw-flex-col tw-items-start">
        <Paragraphs size="xs" weight="bold" className="tw-mb-1">
          {label}
          {required && <span className="tw-text-alert">*</span>}
        </Paragraphs>
      </label>
      <div className="tw-relative">
        <Input
          id="adress"
          type="text"
          className="tw-p-0 tw-bg-secondary tw-bg-opacity-10 tw-outline-none tw-w-full tw-truncate"
          ref={reference}
          value={renderValue()}
          readOnly
          onChange={onChange}
          name={name}
        />
        <SelectArrow
          onClick={() => toggleDropdown()}
          className="tw-cursor-pointer"
        />
        {unfold && (
          <DropdownWrapper
            ref={ref}
            className="tw-absolute tw-bottom-0 tw-right-0 tw-z-50"
          >
            <Dropdown handleClick={onClickItem} mode="checkbox" items={items} />
          </DropdownWrapper>
        )}
      </div>
    </div>
  )
}

MultiSelectorInput.propTypes = {
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.array,
  required: PropTypes.bool,
  onClickItem: PropTypes.func,
  multi: PropTypes.bool,
}
MultiSelectorInput.defaultProps = {
  label: 'Tipo cliente',
  onChange: () => null,
  items: [
    { name: 'Particular', active: true },
    { name: 'Empresa', active: true },
    { name: 'Hombre', active: false },
    { name: 'Mujer', active: false },
    { name: 'Soltero', active: true },
    { name: 'Casado', active: true },
    { name: 'Developer', active: false },
  ],
  required: true,
  onClickItem: () => null,
  multi: false,
}

export default MultiSelectorInput

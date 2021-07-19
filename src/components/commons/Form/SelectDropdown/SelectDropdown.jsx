import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../../Dropdown/Dropdown'
import { PseudoSelect, SelectArrow } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import useListenerClose from '../../../../infrastructure/Hooks/useListenerClose'

const SelectDropdown = ({
  mode,
  items,
  label,
  textColor,
  defaultValue,
  selectAction,
  noBackground,
  noLabel,
}) => {
  const [value, setValue] = useState(items?.[0]?.name || '')
  const [unfold, setUnfold] = useState(false)

  const onClose = () => {
    setUnfold(false)
  }

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  const { ref, toggle } = useListenerClose(onClose)

  const handleClick = (e, item) => {
    if (mode === 'normal') {
      e.stopPropagation()
    }
    setValue(item.name)
    setUnfold(!unfold)
    selectAction(item)
  }

  return (
    <div className="SelectDropdown  tw-flex tw-flex-col tw-w-full">
      {label && (
        <Paragraphs size="xs" weight="bold" className="tw-pb-1">
          {label}
        </Paragraphs>
      )}
      <PseudoSelect
        className={`tw-flex tw-w-full tw-items-center ${
          !noBackground && 'tw-bg-secondary tw-bg-opacity-10'
        } tw-p-4 tw-cursor-pointer tw-relative`}
        onClick={() => setUnfold(!unfold)}
      >
        <SelectArrow color={textColor} />
        <Paragraphs className={`tw-text-${textColor}`}>{value}</Paragraphs>
      </PseudoSelect>
      {unfold && (
        <div ref={ref} onClick={() => toggle()} aria-hidden>
          <Dropdown
            mode={mode}
            items={items || []}
            handleClick={handleClick}
            checked={value}
          />
        </div>
      )}
    </div>
  )
}

SelectDropdown.propTypes = {
  textColor: PropTypes.string,
  mode: PropTypes.oneOf(['normal', 'radio']),
  items: PropTypes.array,
  label: PropTypes.string,
}

SelectDropdown.defaultProps = {
  textColor: 'black',
  mode: 'normal',
  items: [
    {
      id: 1,
      name: 'Todos los registros',
      default: 1,
    },
    {
      id: 2,
      name: 'Líneas de venta',
      default: 0,
    },
    {
      id: 3,
      name: 'Facturas',
      default: 0,
    },
    {
      id: 4,
      name: 'Entregas a cuenta',
      default: 0,
    },
  ],
  label: 'Mostrar',
}

export default SelectDropdown

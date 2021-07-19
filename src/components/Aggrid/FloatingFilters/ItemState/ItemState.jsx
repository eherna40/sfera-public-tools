import React from 'react'
import PropTypes from 'prop-types'
import { Select } from './styles'

const ItemState = ({ parentFilterInstance }) => {
  const prueba = (instance, value) => {
    if (value === 999) {
      instance.onFloatingFilterChanged(null, null)
    }
    if (value === 1) instance.onFloatingFilterChanged('greaterThan', '')
    if (value === 0) {
      instance.onFloatingFilterChanged('equals', 'null')
    }
  }
  return (
    <Select
      onChange={(el) =>
        parentFilterInstance((e) => prueba(e, Number(el.target.value)))
      }
      className="tw-w-full"
    >
      <option value={999}>-</option>
      <option value={0}>Desactivado</option>
      <option value={1}>Activo</option>
    </Select>
  )
}

ItemState.propTypes = {
  parentFilterInstance: PropTypes.func,
}

export default ItemState

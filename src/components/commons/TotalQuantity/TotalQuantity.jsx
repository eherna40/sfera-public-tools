import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'

const TotalQuantity = ({ value, secondaryValue, text }) => {
  const handleStockClass = (val) => {
    if (val < 0) {
      return 'tw-text-alert'
    }
    return 'tw-text-success'
  }
  return (
    <div className="tw-flex tw-items-end tw-gap-4">
      <div className="tw-flex tw-gap-2">
        <Paragraphs className="tw-text-gray-400">{text}</Paragraphs>
        <Paragraphs weight="bold">{secondaryValue}</Paragraphs>
      </div>
      <Paragraphs
        weight="bold"
        className={`tw-text-5xl ${handleStockClass(value)}`}
      >
        {String(value).replace('.', ',')}€
      </Paragraphs>
    </div>
  )
}

TotalQuantity.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  secondaryValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
}

TotalQuantity.defaultProps = {
  value: 20.84,
  secondaryValue: 1,
  text: 'Total líneas seleccionadas:',
}

export default TotalQuantity

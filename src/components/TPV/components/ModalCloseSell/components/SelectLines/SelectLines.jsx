import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IcCheckMinus from '../../../../../commons/Icons/IcCheckMinus'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'
import CustomCheck from '../../../../../commons/CustomCheck/CustomCheck'

const SelectLines = ({ items }) => {
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = (bool) => {
    setSelectAll(!selectAll)
    items.filter((item) => {
      const i = item
      i.active = bool
      return i
    })
  }

  return (
    <div className="SelectLines tw-w-30 tw-bg-white tw-border tw-absolute tw-flex tw-justify-center tw-top-10 tw-z-50 xl:tw-w-64">
      <div className="tw-flex tw-flex-col tw-w-full tw-h-full tw-justify-center">
        <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-mt-2">
          <div className="tw-flex tw-flex-col tw-w-full tw-px-4">
            <div
              aria-hidden="true"
              className="tw-flex tw-justify-center"
              onClick={() => handleSelectAll(selectAll)}
            >
              <IcCheckMinus />
              <Paragraphs className="tw-ml-2">Seleccionar todas</Paragraphs>
            </div>
            <div className="tw-mt-2">
              <hr />
            </div>
          </div>
        </div>

        {/* PRODUCTOS VENTA CRÉDITO */}
        <div
          className={`tw-overflow-y-auto ${
            items.length > 2 ? 'tw-h-36' : 'tw-h-12'
          }`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="tw-flex tw-flex-col tw-items-center tw-overflow-y-auto tw-mt-2"
            >
              <div className="tw-mb-2">
                <CustomCheck
                  label={item.name}
                  bgPrimary
                  borderPrimary
                  checked={item.active}
                />
              </div>
              <div className="tw-w-full tw-mb-2 tw-px-4">
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

SelectLines.propTypes = {
  items: PropTypes.array,
}

SelectLines.defaultProps = {
  items: [
    {
      id: 1,
      name: 'FRENADOL',
      active: false,
    },
  ],
}

export default SelectLines

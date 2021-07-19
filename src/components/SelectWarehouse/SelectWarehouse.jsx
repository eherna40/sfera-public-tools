import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IcMoreVertical from '../commons/Icons/IcMoreVertical'
import { ArrowUp, Content, Square } from './styles'
import { useSelector } from 'react-redux'

const ERP = '100'
const displayWarehouseSoftwareList = [ERP]

const SelectWarehouse = ({ warehouses, activeWarehouse, onClickWarehouse }) => {
  const [openWarehouse, setOpenWarehouse] = useState(false)
  const collapse = openWarehouse && 'tw-w-screen tw-bg-black'
  const softwareReducer = useSelector((state) => state.softwareReducer)

  const showWarehouseSelector = () => {
    if (
      displayWarehouseSoftwareList.includes(
        softwareReducer && softwareReducer?.software?.id,
      )
    )
      return true
    return false
  }
  return (
    <div id="selectWarehouse">
      {showWarehouseSelector() && (
        <div
          className="tw-flex tw-items-center tw-cursor-pointer tw-z-10"
          onClick={() => setOpenWarehouse(!openWarehouse)}
          aria-hidden="true"
        >
          <div className="tw-flex tw-items-center">
            <span className="tw-text-xs tw-text-white tw-font-bold">
              {activeWarehouse.nombre}
            </span>
            <IcMoreVertical size={20} />
          </div>
          {openWarehouse && (
            <>
              <div
                className={`tw-fixed tw-h-screen tw-top-0 tw-left-0 ${collapse} tw-bg-opacity-40 tw-transition-all`}
                onClick={() => setOpenWarehouse(!openWarehouse)}
                aria-hidden="true"
              />
              <div className="tw-relative">
                <Content className="SelectWarehouse tw-w-52 tw-shadow-md tw-absolute tw-bg-white tw-right-0">
                  <div className="tw-relative">
                    <ArrowUp className="tw-w-3 tw-h-3 tw-bg-white tw-transform tw-rotate-45 tw-absolute tw-bottom-full" />
                    <div className="tw-flex tw-flex-col tw-justify-around">
                      <div className="tw-h-30 tw-flex tw-flex-col tw-mt-2">
                        {warehouses.map((warehouse, index) => (
                          <div
                            className="tw-w-full tw-px-2 tw-flex tw-justify-between tw-mb-2 tw-cursor-pointer tw-p-2"
                            onClick={() => onClickWarehouse(warehouse)}
                            aria-hidden="true"
                            key={index}
                          >
                            <div className="tw-flex tw-items-center tw-gap-2 tw-pl-2">
                              <Square color={warehouse.color} />
                              <span className="tw-no-underline hover:tw-underline">
                                {warehouse.nombre}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Content>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

SelectWarehouse.propTypes = {
  warehouses: PropTypes.array,
  activeWarehouse: PropTypes.object,
  onClickWarehouse: PropTypes.func,
}

SelectWarehouse.defaultProps = {
  warehouses: [
    {
      id: 1,
      name: 'Almacen 1',
    },
    {
      id: 2,
      name: 'Almacen 2',
    },
  ],
  onClickWarehouse: () => null,
}
export default SelectWarehouse

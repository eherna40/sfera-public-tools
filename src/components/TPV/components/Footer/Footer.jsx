import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import DropUpButton from '../../../commons/DropUpButton/DropUpButton'
import Button from '../../../commons/Buttons/Button/Button'
// import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import MainButtonFooter from '../../../commons/MainButtonFooter/MainButtonFooter'
import TotalQuantity from '../../../commons/TotalQuantity/TotalQuantity'

const Footer = ({
  closeSale,
  footerItems,
  currentCart,
  mainButton,
  currentCellRowNode,
}) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(null)
  const [openMainButtonFooter, setopenMainButtonFooter] = useState(null)

  return (
    <div
      className={`tw-flex ${
        !mainButton && 'tw-h-16'
      } tw-justify-between tw-items-center tw-bg-secondary tw-bg-opacity-10`}
    >
      <div className="tw-flex tw-flex-wrap tw-justify-around tw-ml-2 xl:tw-flex-nowrap xl:tw-justify-start">
        {footerItems.map((item, index) => (
          <div key={index} className="tw-mx-2">
            {item.links ? (
              <DropUpButton
                item={item}
                isExpanded={isExpanded === item.id}
                handleExpand={() =>
                  setIsExpanded(item.id === isExpanded ? null : item.id)
                }
                disabled={!currentCellRowNode}
              />
            ) : (
              <Button size="small" label={item.name} onClick={item.action} />
            )}
          </div>
        ))}
      </div>

      <div className="tw-flex tw-w-64 tw-justify-end tw-items-center xl:tw-w-96">
        <div className="tw-flex tw-py-3 tw-pr-3">
          {currentCart && (
            <TotalQuantity
              text="Total bruto:"
              value={(currentCart && currentCart.importe_a_pagar) || 0.0}
              secondaryValue={(currentCart && currentCart.importe_base) || 0.0}
            />
          )}
          {/* <div className="tw-flex tw-flex-col tw-items-center xl:tw-flex-row">
            <div className="tw-flex tw-mr-4 md:tw-items-center">
              <div className="tw-text-grey-400">
                <Paragraphs className="tw-mr-1" size="sm">
                  Total bruto:
                </Paragraphs>
              </div>
              <Paragraphs size="sm" weight="bold">
                {totalGross}€
              </Paragraphs>
            </div>
            <div className="tw-flex tw-text-success tw-items-end tw-mr-4">
              <Paragraphs className="tw-text-2xl xl:tw-text-5xl" weight="bold">
                {totalNet}
              </Paragraphs>
              <Paragraphs size="2xl" weight="bold">
                €
              </Paragraphs>
            </div>
          </div> */}
        </div>

        <div>
          {mainButton && (
            <MainButtonFooter
              open={openMainButtonFooter}
              items={[
                {
                  id: 1,
                  name: t('tpv.Cerrar venta'),
                  action: () => alert(),
                },
                {
                  id: 2,
                  name: t('tpv.Cierre rápido'),
                  action: () =>
                    closeSale({ type: 1 }).then((response) => {
                      if (response.success) {
                        setopenMainButtonFooter(!openMainButtonFooter)
                      }
                    }),
                },
                {
                  id: 3,
                  name: t('tpv.Cierre rápido con ticket'),
                  action: () => alert(),
                },
              ]}
              toogle={() => setopenMainButtonFooter(!openMainButtonFooter)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer

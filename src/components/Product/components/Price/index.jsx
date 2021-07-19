import React, { useContext } from 'react'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import { ProductsContext } from '../../../../infrastructure/contexts/Products/Products'

const Price = () => {
  const { productDetail } = useContext(ProductsContext)
  return (
    <div className=" Price tw-flex tw-items-center tw-border tw-mr-4 tw-w-full">
      <div className="tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-px-4 xl:tw-flex-row">
        <div>
          <Paragraphs
            className="tw-flex tw-items-center tw-pr-2"
            weight="bold"
            size="sm"
          >
            P.V.P
          </Paragraphs>
        </div>

        <div>
          <Paragraphs
            className="tw-flex tw-items-center tw-text-success"
            weight="bold"
            size="sm"
          >
            {productDetail &&
              productDetail.precio &&
              productDetail.precio.precio_pvp}
          </Paragraphs>
        </div>
      </div>
    </div>
  )
}
export default Price

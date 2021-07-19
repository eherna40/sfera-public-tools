import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'

const Product = ({ units, productName, price }) => (
  <div className="tw-flex tw-justify-between tw-items-center tw-mt-3">
    <div className="tw-flex">
      <div className="tw-pl-1">
        <Paragraphs size="sm">
          <span className="tw-text-primary tw-font-bold">{`${units}x `}</span>
          {productName}
        </Paragraphs>
      </div>
    </div>
    <div className="tw-flex">
      <div className="tw-text-primary">
        <Paragraphs
          className="tw-mr-1 tw-flex tw-whitespace-nowrap"
          size="sm"
          weight="bold"
        >
          {`${price} €`}
        </Paragraphs>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  units: PropTypes.number,
  productName: PropTypes.string,
  price: PropTypes.string,
}

Product.defaultProps = {
  units: 2,
  productName: 'IBUPROFENO (ARGININA)',
  price: '12,22',
}

export default Product

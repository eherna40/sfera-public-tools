import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'

const Total = ({ total }) => (
  <div className="tw-w-full tw-flex tw-justify-end tw-mt-3">
    <div
      className={`${
        // Evalua si es positivo o negativo
        Math.sign(parseInt(total, 10)) === 1
          ? 'tw-text-success'
          : 'tw-text-alert'
      }`}
    >
      <Paragraphs className="tw-mr-1" size="sm" weight="bold">
        {total} €
      </Paragraphs>
    </div>
  </div>
)

Total.propTypes = {
  total: PropTypes.string,
}

Total.defaultProps = {
  total: '12,22',
}

export default Total

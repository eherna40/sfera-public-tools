/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../commons/Paragraphs/Paragraphs'

const Coin = ({ type, amount }) => {
  const bgCoin =
    // eslint-disable-next-line no-nested-ternary
    type === 1
      ? 'tw-bg-coins-euro'
      : type === 2
      ? 'tw-bg-coins-cent'
      : 'tw-bg-coins-cent2'
  return (
    <div
      className={`${bgCoin} ${
        type === 1 ? 'tw-text-black' : 'tw-text-white'
      } tw-w-11 tw-h-9 tw-rounded-full tw-flex ${
        type !== 1 && 'tw-flex-col'
      } tw-justify-center tw-items-center`}
    >
      <Paragraphs
        weight="bold"
        className={`tw-leading-none ${type === 1 && 'tw-mr-1'}`}
      >
        {amount}
      </Paragraphs>
      <Paragraphs
        className="tw-leading-none"
        size={type === 1 ? 'xs' : 'xxs'}
        weight="bold"
      >
        {type === 1 ? '€' : 'CENT'}
      </Paragraphs>
    </div>
  )
}

Coin.propTypes = {
  type: PropTypes.number,
  amount: PropTypes.string,
}

export default Coin

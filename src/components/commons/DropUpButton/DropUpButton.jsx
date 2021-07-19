import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import IcArrowUp from '../Icons/IcArrowUp'
import IcArrowDown from '../Icons/IcArrowDown'
import { Hover } from './styles'

const DropUpButton = ({ item, isExpanded, handleExpand, disabled }) => (
  <div
    aria-hidden="true"
    className={`tw-flex tw-w-28 tw-my-1 tw-justify-between tw-items-center tw-text-white ${
      isExpanded ? 'tw-bg-primary' : 'tw-bg-secondary'
    } tw-cursor-pointer tw-relative lg:tw-w-32 lg:tw-my-0 xl:tw-w-40`}
  >
    <div
      className="tw-w-full tw-p-3 tw-flex tw-justify-between tw-items-center"
      aria-hidden="true"
      onClick={handleExpand}
    >
      <Paragraphs size="xs" weight="bold">
        {item.name}
      </Paragraphs>
      {isExpanded ? <IcArrowDown /> : <IcArrowUp />}
    </div>

    {isExpanded && (
      <Hover className="tw-w-28 tw-bg-white tw-text-black tw-absolute tw-right-0 lg:tw-w-32 xl:tw-w-40">
        {item.links.map((link, index) => (
          <button
            key={index}
            type="button"
            className="tw-flex tw-w-full tw-flex-col tw-items-center tw-p-3 tw-border tw-border-b-0 tw-border-activeMenu tw-text-activeMenu xl:tw-flex-row lg:tw-justify-between"
            onClick={() => {
              link.action()
              handleExpand()
            }}
            // disabled={disabled}
          >
            <Paragraphs
              size="xs"
              weight="bold"
              className={`${disabled && 'tw-gray-50'}`}
            >
              {link.optName}
            </Paragraphs>

            <Paragraphs size="xxs" weight="bold">
              {link.optShortcut}
            </Paragraphs>
          </button>
        ))}
      </Hover>
    )}
  </div>
)

DropUpButton.propTypes = {
  item: PropTypes.object,
  disabled: PropTypes.bool,
}

DropUpButton.defaultProps = {
  item: {
    id: 1,
    name: 'Venta',
    links: [
      {
        id: 1,
        optName: 'Nueva',
        optShortcut: 'CTRL+1',
      },
      {
        id: 2,
        optName: 'Pendiente',
        optShortcut: 'CTRL+1',
      },
      {
        id: 3,
        optName: 'Eliminar',
        optShortcut: 'CTRL+1',
      },
    ],
  },
  disabled: false,
}

export default DropUpButton

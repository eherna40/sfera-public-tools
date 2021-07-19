import React from 'react'
import PropTypes from 'prop-types'

// components
import IcFavorite from '../../../commons/Icons/IcFavorite'
import IcArrowRight from '../../../commons/Icons/IcArrowRight'
import { HiddenDiv } from '../../styles'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
// import { useTranslation } from 'react-i18next'

const ItemMenu = ({
  software,
  name,
  fav,
  handleSetFavorite,
  onPress,
  onChildren,
  firstChildren,
  level,
  visible,
  idItem,
}) => (
  <>
    {visible && (
      <div className={`tw-py-2 tw-pl-5 ${name} ${level}`}>
        {software && (
          <div
            aria-hidden
            className="tw-border-titleFolders tw-border-b tw-mr-5"
            onClick={onPress}
          >
            <Paragraphs
              size="sm"
              weight="bold"
              className="tw-text-white tw-text-opacity-50"
            >
              {software}
            </Paragraphs>
          </div>
        )}
        <HiddenDiv
          className={`tw-flex tw-relative tw-items-center tw-justify-between tw-w-full ${
            idItem !== -1 ? 'tw-cursor-pointer' : 'tw-select-none'
          }`}
        >
          <div aria-hidden onClick={onPress} className="tw-w-full tw-h-full">
            <Paragraphs
              className={firstChildren ? 'tw-text-white' : 'black'}
              size="sm"
              weight="bold"
            >
              {name}
            </Paragraphs>
          </div>
          {idItem !== -1 && (
            <div
              aria-hidden
              className="tw-flex tw-items-center tw-justify-center tw-p-3 tw-px-5"
              onClick={() => {
                handleSetFavorite()
              }}
            >
              {onChildren ? (
                <IcArrowRight
                  size={15}
                  color={firstChildren ? 'white' : 'black'}
                />
              ) : (
                <div>
                  <IcFavorite
                    favorite={fav}
                    color={firstChildren ? 'white' : 'black'}
                  />
                </div>
              )}
            </div>
          )}
        </HiddenDiv>
      </div>
    )}
  </>
)

ItemMenu.propTypes = {
  software: PropTypes.string,
  name: PropTypes.string,
  fav: PropTypes.number,
  handleSetFavorite: PropTypes.func,
  onPress: PropTypes.func,
  onChildren: PropTypes.array,
  firstChildren: PropTypes.bool,
  level: PropTypes.number,
  visible: PropTypes.bool,
  idItem: PropTypes.number,
}

ItemMenu.defaultProps = {
  fav: 0,
  handleSetFavorite: null,
  onPress: null,
  firstChildren: true,
  level: 0,
  visible: false,
}

export default ItemMenu

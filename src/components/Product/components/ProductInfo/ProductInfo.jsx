import React from 'react'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import IcArrowUp from '../../../commons/Icons/IcArrowUp'
import IcArrowDown from '../../../commons/Icons/IcArrowDown'
import useWindowSize from '../../../../infrastructure/Hooks/useWindowSize'
import colors from '../../../../styles/colors'

const ProductInfo = ({ codigo, nombre_descripcion }) => {
  const size = useWindowSize()
  const smallScreen = () => size.height >= 700

  return (
    <div className="tw-flex tw-justify-between tw-w-full tw-border tw-mr-4">
      <div className="tw-flex tw-items-start lg:tw-items-center">
        <Paragraphs
          className={`${
            smallScreen()
              ? 'tw-my-2 xl:tw-my-4 tw-mx-4'
              : 'tw-my-1 xl:tw-my-1 tw-ml-4 tw-mr-1'
          }`}
          weight="bold"
          size="base"
        >
          {codigo}
        </Paragraphs>
        <div
          className={`${
            smallScreen()
              ? 'tw-my-3 xl:tw-my-4 tw-border-r-4'
              : 'tw-my-1 xl:tw-my-1 tw-border-r-4'
          } tw-border-primary`}
        >
           
        </div>
        <Paragraphs
          className={`${
            smallScreen()
              ? 'tw-my-2 xl:tw-my-4 tw-mx-4'
              : 'tw-my-1 xl:tw-my-1 tw-mx-2'
          }`}
          weight="bold"
          size="base"
        >
          {nombre_descripcion}
        </Paragraphs>
      </div>

      <div className="tw-flex tw-items-center tw-mx-4">
        <IcArrowUp size={32} color={colors['primary']} />
        <div
          className={`${
            smallScreen()
              ? 'tw-my-0 xl:tw-my-4 tw-border-r-4 tw-mx-4'
              : 'tw-my-0 xl:tw-my-0 tw-border-r-4 tw-mx-0'
          }`}
        >
           
        </div>
        <IcArrowDown size={32} color="#22949B" />
      </div>
    </div>
  )
}

export default ProductInfo

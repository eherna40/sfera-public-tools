import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { DropdownContainer } from './styles'
import Dropdown from '../../../commons/Dropdown/Dropdown'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import IcLocation from '../../../commons/Icons/IcLocation'
import useListenerClose from '../../../../infrastructure/Hooks/useListenerClose'
import { ProductsContext } from '../../../../infrastructure/contexts/Products/Products'

const Stock = () => {
  const [dropdown, setDropdown] = useState(false)
  const { productDetail } = useContext(ProductsContext)
  const { t } = useTranslation()

  const handleCloseDropdown = () => {
    setDropdown(false)
  }

  const { ref, toggle } = useListenerClose(handleCloseDropdown)

  return (
    <div
      aria-hidden
      className="tw-flex tw-w-full tw-items-center tw-border tw-cursor-pointer tw-relative"
      onClick={() => setDropdown(true)}
    >
      {dropdown && (
        <DropdownContainer
          className="tw-absolute"
          onClick={() => toggle()}
          ref={ref}
        >
          <Dropdown
            mode="number"
            items={
              productDetail &&
              productDetail.ubicaciones &&
              productDetail.ubicaciones.map((el) => ({
                name: el.almacenUbicacion.nombre_ubicacion,
                id: el.id,
                number: el.stock,
              }))
            }
          />
        </DropdownContainer>
      )}
      <div className="tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-px-4 xl:tw-flex-row">
        <div>
          <Paragraphs
            className="tw-flex tw-items-center tw-pr-2 tw-uppercase"
            weight="bold"
            size="sm"
          >
            {t('products.Stock')}
          </Paragraphs>
        </div>

        <div className="tw-flex ">
          <Paragraphs
            className="tw-flex tw-items-center tw-text-warning tw-mr-2"
            weight="bold"
            size="sm"
          >
            {productDetail && productDetail.stock}
          </Paragraphs>
          <IcLocation size={24} />
        </div>
      </div>
    </div>
  )
}

Stock.propTypes = {
  productDetail: PropTypes.object,
}

export default Stock

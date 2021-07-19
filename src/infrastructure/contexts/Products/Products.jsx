import React from 'react'
import PropTypes from 'prop-types'
import { useProducts } from '../../Hooks/Products/useProducts'
// import { useBotPlus } from '../../Hooks/BotPlus/useBotPlus'
import Container from '../../../components/Page/Container/Container'
import Foot from '../../../components/Page/Foot/Foot'
import Button from '../../../components/commons/Buttons/Button/Button'
import ModalBotPlus from '../../../components/Product/components/ModalBotPlus/ModalBotPlus'
// import ModalBotPlus from '../../../components/Product/components/ModalBotPlus/ModalBotPlus'

const ProductsContext = React.createContext()

const ProductsProvider = ({ children, id }) => {
  const {
    loading,
    showModalAnnotations,
    showModalBotPlus,
    setShowModalBotPlus,
    setShowModalAnnotations,
    unlock,
    pinmodal,
    handleUnlock,
    handlePinModal,
    getPhotos,
    photos,
    showCreateAnnotations,
    setShowCreateAnnotations,
    handleCreateAnnotationsModal,
    getChartData,
    fechdatachart,
    getAuditData,
    getProductDetails,
    charfilterid,
    getOfertsSells,
    productDetail,
    getLastSells,
    getArticleData,
    artLoading,
    artError,
    formArticleData,
    codes,
    formSecondaryLoading,
    getSecondaryCodes,
    getEntities,
    loadingEntities,
    entities,
    loadingDispensation,
    dispensation,
    getDispensation,
    info,
    getInfo,
    loadingInfo,
    gethGroupData,
    hGroupData,
    hGroupLoading,
    loadingBI,
    biData,
    getBiData,
    loadingAppearance,
    getAppearance,
    appearanceData,
    getPriceLabels,
    loadingPriceLabels,
    priceLabelData,
    loadingAltCodes,
    altCodesData,
    getAltCodes,
    productData,
    unitDetails,
  } = useProducts(id)

  // const { product, err } = useBotPlus(id)

  return (
    <ProductsContext.Provider
      value={{
        loading,
        showModalAnnotations,
        showModalBotPlus,
        setShowModalBotPlus,
        setShowModalAnnotations,
        unlock,
        pinmodal,
        handleUnlock,
        handlePinModal,
        getPhotos,
        photos,
        showCreateAnnotations,
        setShowCreateAnnotations,
        handleCreateAnnotationsModal,
        getChartData,
        fechdatachart,
        getAuditData,
        getProductDetails,
        charfilterid,
        getOfertsSells,
        getLastSells,
        productDetail,
        // product,
        // err,
        id,
        getArticleData,
        artLoading,
        artError,
        formArticleData,
        codes,
        formSecondaryLoading,
        getSecondaryCodes,
        getEntities,
        loadingEntities,
        entities,
        loadingDispensation,
        dispensation,
        getDispensation,
        info,
        getInfo,
        loadingInfo,
        gethGroupData,
        hGroupData,
        hGroupLoading,
        loadingBI,
        biData,
        getBiData,
        loadingAppearance,
        getAppearance,
        appearanceData,
        getPriceLabels,
        loadingPriceLabels,
        priceLabelData,
        loadingAltCodes,
        altCodesData,
        getAltCodes,
        productData,
        unitDetails,
      }}
    >
      <Container name="productsProvider" className="tw-w-full tw-relative">
        {showModalBotPlus && (
          <ModalBotPlus
            toggle={() => setShowModalBotPlus(!showModalBotPlus)}
            id={id}
          />
        )}
        {children}
        <Foot>
          <div className="tw-flex tw-items-center tw-px-4 tw-py-2 tw-gap-4 tw-bg-footer 2xl:tw-p-4">
            <Button
              label="Mostrar BOT+"
              shortcut=" "
              primary
              size="small"
              onClick={() => setShowModalBotPlus(true)}
            />
            <Button
              label="Anotaciones"
              shortcut=" "
              primary
              size="small"
              notifications="3"
              onClick={() => setShowModalAnnotations(true)}
            />
            <Button label="Dar de baja" shortcut=" " primary size="small" />
            <Button label="Imprimir" shortcut=" " primary size="small" />
          </div>
        </Foot>
      </Container>
    </ProductsContext.Provider>
  )
}

ProductsContext.propTypes = {
  children: PropTypes.node,
}

export { ProductsContext, ProductsProvider }

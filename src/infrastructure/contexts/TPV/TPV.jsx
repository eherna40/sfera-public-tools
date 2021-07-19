import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../../components/Page/Container/Container'
import { useTPV } from '../../Hooks/TPV/useTPV'
import { actionSessionOff } from '../../redux/actions/user'

const TPVContext = React.createContext()

const TPVProvider = ({ children }) => {
  const dispatch = useDispatch()
  const counterDeskReducer = useSelector((state) => state.counterDeskReducer)
  const session = useSelector((state) => state.userReducer.session)
  const {
    patternInput,
    loading,
    showDescription,
    setShowDescription,
    showLastSells,
    setShowLastSells,
    showModalCashRegister,
    setShowModalCashRegister,
    showModalSearchClients,
    setShowModalSearchClients,
    showModalProductDetail,
    setShowModalProductDetail,
    showModalSearchProduct,
    setShowModalSearchProduct,
    insertLine,
    deleteLine,
    updateLine,
    setCurrentCart,
    currentCart,
    currentClient,
    currentPatient,
    previouSale,
    closeSale,
    getclientlist,
    getCart,
    editClientPatient,
    cloneClientPatient,
    searchInput,
    setSearchInput,
    filterArticles,
    isCode,
    setIsCode,
    validateInputCode,
    validateInputSearch,
    validateInputUpdate,
    getClient,
    searchPatientsByCurrentClient,
    searchPatient,
    updateTpv,
    setUpdateTpv,
    isAnyModalOpen,
    loadingSeachSells,
    sellSearchTypes,
    currentLastSellsSearchType,
    setCurrentLastSellsSearchType,
    currentLastSellsSearchSelector,
    setCurrentLastSellsSearchSelector,
    searchSellsbyKeys,
    currentLastSellsSearch,
    setCurrentCashbox,
    setCurrentCounter,
    lockTPV,
    setLockTPV,
    resetClientPatient,
    activeCashDesk,
    openCashDesk,
    actionRemoveArticle,
    currentCellRowNode,
    setCurrentCellRowNode,
    getProductDetails,
    currentArticleDetails,
    getPhotos,
    currentArticlePhotos,
    setClient,
    loadingseachpatient,
  } = useTPV()
  const footerItems = [
    {
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
    {
      id: 1,
      name: 'Cliente',
      links: [
        {
          id: 1,
          optName: 'Ver Ficha',
          optShortcut: 'CTRL+1',
        },
        {
          id: 2,
          optName: 'Seguimiento',
          optShortcut: 'CTRL+1',
        },
        {
          id: 3,
          optName: 'Anotaciones',
          optShortcut: 'CTRL+1',
        },
      ],
    },
    {
      id: 2,
      name: 'Mostrador',
      links: [
        {
          id: 1,
          optName: 'Arqueo',
          optShortcut: 'CTRL+1',
          action: () => setShowModalCashRegister(true),
        },
        {
          id: 2,
          optName: 'Movimientos',
          optShortcut: 'CTRL+1',
        },
      ],
    },
    {
      id: 3,
      name: 'Artículo',
      links: [
        {
          id: 1,
          optName: 'Ver Ficha',
          optShortcut: 'CTRL+1',
          action() {
            if (currentCellRowNode) setShowModalProductDetail(true)
          },
        },
        {
          id: 2,
          optName: 'Alta Libro',
          optShortcut: 'CTRL+1',
        },
        {
          id: 3,
          optName: 'Sustituir',
          optShortcut: 'CTRL+1',
        },
        {
          id: 4,
          optName: 'Eliminar',
          optShortcut: 'CTRL+1',
          action() {
            if (currentCellRowNode) actionRemoveArticle()
          },
        },
      ],
    },
  ]

  useEffect(() => {
    if (
      counterDeskReducer &&
      counterDeskReducer.data &&
      !counterDeskReducer.loading
    ) {
      setCurrentCashbox(Number(counterDeskReducer.data.id))
      setCurrentCounter(Number(counterDeskReducer.data.mostrador.id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counterDeskReducer])

  useEffect(() => {
    if (!session) {
      setLockTPV(true)
    } else if (session && lockTPV) {
      dispatch(actionSessionOff())
      setLockTPV(true)
    } else setLockTPV(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, lockTPV])
  return (
    <TPVContext.Provider
      value={{
        patternInput,
        loading,
        footerItems,
        showDescription,
        setShowDescription,
        showLastSells,
        setShowLastSells,
        showModalCashRegister,
        setShowModalCashRegister,
        showModalSearchClients,
        setShowModalSearchClients,
        showModalProductDetail,
        setShowModalProductDetail,
        actionRemoveArticle,
        showModalSearchProduct,
        setShowModalSearchProduct,
        insertLine,
        deleteLine,
        updateLine,
        setCurrentCart,
        currentCart,
        currentClient,
        currentPatient,
        previouSale,
        closeSale,
        getclientlist,
        getCart,
        editClientPatient,
        cloneClientPatient,
        searchInput,
        setSearchInput,
        filterArticles,
        isCode,
        setIsCode,
        validateInputCode,
        validateInputSearch,
        validateInputUpdate,
        getClient,
        searchPatientsByCurrentClient,
        searchPatient,
        updateTpv,
        setUpdateTpv,
        isAnyModalOpen,
        loadingSeachSells,
        sellSearchTypes,
        currentLastSellsSearchType,
        setCurrentLastSellsSearchType,
        currentLastSellsSearchSelector,
        setCurrentLastSellsSearchSelector,
        searchSellsbyKeys,
        currentLastSellsSearch,
        resetClientPatient,
        activeCashDesk,
        openCashDesk,
        currentCellRowNode,
        setCurrentCellRowNode,
        getProductDetails,
        currentArticleDetails,
        getPhotos,
        currentArticlePhotos,
        setClient,
        loadingseachpatient,
      }}
      className="tw-w-full tw-h-full"
    >
      <Container name="TPV" className="tw-w-full">
        {children}
      </Container>
    </TPVContext.Provider>
  )
}

TPVContext.propTypes = {
  children: PropTypes.node,
}

export { TPVContext, TPVProvider }

import { useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useGql } from '../useGql'
import useFlashMessage from '../useFlashMessage'
import {
  INSERT_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  CLOSE_SALE,
  UPDATE_CLIENT_CART,
  UPDATE_INPUT_PRODUCT_CART,
  GET_CART_BY_ID,
  GET_CLIENT,
  SEARCH_PATIENT,
  SEARCH_SELLS,
  DELETE_CLIENT_CART,
  GET_PRODUCT,
} from '../../api/TPV/index'
import { GET_CLIENT_LIST } from '../../api/clients'
import { GET_LISTING } from '../../api/products'
import { useCounterDesk } from '../CounterDesk/useCounterDesk'
import { getImageProduct } from '../../helpers/products'

const ALL = { id: 0, name: 'Todo', filter: true }
const FREE = { id: 1, name: 'Libre', filter: true }
const RECEPIE = { id: 2, name: 'Receta', filter: true }
const CREDIT = { id: 3, name: 'Crédito', filter: true }
const CLIENT = { id: 5, name: 'Cliente', column: 'cliente_id' }
const PATIENT = { id: 6, name: 'Paciente', column: 'paciente_id' }

export const useTPV = () => {
  const { activeCashDesk, openCashDesk } = useCounterDesk()
  const { getError } = useGql()
  const { showMessage } = useFlashMessage()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showDescription, setShowDescription] = useState(false)
  const [showLastSells, setShowLastSells] = useState(false)
  const [showModalCashRegister, setShowModalCashRegister] = useState(false)
  const [showModalSearchClients, setShowModalSearchClients] = useState(false)
  const [showModalProductDetail, setShowModalProductDetail] = useState(false)
  const [showModalSearchProduct, setShowModalSearchProduct] = useState(false)
  const [currentCounter, setCurrentCounter] = useState(null)
  const [currentCashbox, setCurrentCashbox] = useState(null)
  const [currentCart, setCurrentCart] = useState(null)
  const [previouSale, setPreviouSale] = useState(null)
  const [currentClient, setCurrentClient] = useState(null)
  const [currentPatient, setCurrentPatient] = useState(null)
  const [currentLastSellsSearch, setCurrentLastSellsSearch] = useState(null)
  const [searchInput, setSearchInput] = useState(null)
  const [searchPatient, setSearchPatient] = useState([])
  const [lockTPV, setLockTPV] = useState(false)
  const [currentCellRowNode, setCurrentCellRowNode] = useState(null)
  const [currentArticleDetails, setCurrentArticleDetails] = useState(null)
  const [currentArticlePhotos, setCurrentArticlePhotos] = useState(null)
  const sellSearchTypes = [ALL, FREE, RECEPIE, CREDIT, CLIENT, PATIENT]

  const setCart = (cart) => {
    setCurrentCart(cart)
  }

  const [currentLastSellsSearchType, setCurrentLastSellsSearchType] = useState(
    ALL,
  )
  const [
    currentLastSellsSearchSelector,
    setCurrentLastSellsSearchSelector,
  ] = useState(CLIENT)

  const validateCurrentClient = () => {
    if (currentClient && currentClient.id) return true
    return false
  }

  const [getclient, { loading: loadinggetclient }] = useLazyQuery(GET_CLIENT, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (validateCurrentClient() && data.cliente)
        setCurrentClient({ ...data.cliente })
    },
  })

  const [getProduct, { loading: loadingGetProduct }] = useLazyQuery(
    GET_PRODUCT,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
        if (data && data.articulo) {
          setCurrentArticleDetails(data.articulo)
        }
      },
    },
  )

  const [getcart, { loading: loadinggetCartByID }] = useMutation(
    GET_CART_BY_ID,
    {
      errorPolicy: 'all',
      onCompleted: (data) => data.carrito && setCart(data.carrito),
    },
  )

  const [
    seachpatient,
    { loading: loadingseachpatient },
  ] = useMutation(SEARCH_PATIENT, { errorPolicy: 'all' })

  const [
    insertproductcart,
    { loading: loadinginsertproductcart },
  ] = useMutation(INSERT_PRODUCT_CART, { errorPolicy: 'all' })

  const [closesale, { loading: loadingclosesale }] = useMutation(CLOSE_SALE, {
    errorPolicy: 'all',
  })

  const [getclientlist, { loading: loadinggetclientlist }] = useMutation(
    GET_CLIENT_LIST,
    {
      errorPolicy: 'all',
    },
  )

  const [filterArticles, { loading: loadingfilterproducts }] = useMutation(
    GET_LISTING,
    {
      errorPolicy: 'all',
    },
  )

  const [updateclientcart, { loading: loadingupdateclientcart }] = useMutation(
    UPDATE_CLIENT_CART,
    {
      errorPolicy: 'all',
    },
  )

  const [
    deleteproductcart,
    { loading: loadingdeleteproductcart },
  ] = useMutation(DELETE_PRODUCT_CART, {
    errorPolicy: 'all',
  })

  const [
    updateinputproductcart,
    { loading: loadingupdateinputproductcart },
  ] = useMutation(UPDATE_INPUT_PRODUCT_CART, {
    errorPolicy: 'all',
  })

  const [searchSells, { loading: loadingSeachSells }] = useMutation(
    SEARCH_SELLS,
    {
      errorPolicy: 'all',
      onCompleted: (data) => {
        if (
          data &&
          data.filtrarVentasPaginado &&
          data.filtrarVentasPaginado.data
        )
          setCurrentLastSellsSearch(data.filtrarVentasPaginado.data)
      },
    },
  )

  const [deleteClientCart, { loading: loadingDeleteClientCart }] = useMutation(
    DELETE_CLIENT_CART,
    {
      onCompleted: (data) => {
        if (data && data.eliminarClienteCarrito) {
          setCart({ ...data.eliminarClienteCarrito })
          setCurrentClient(null)
          setCurrentPatient(null)
        }
      },
      onError: (e) => {
        const err = { ...e }
        showMessage(
          'alert',
          'Error al eliminar cliente del carrito',
          `${
            err && err.graphQLErrors
              ? getError(err.graphQLErrors).message
              : true
          }`,
        )
      },
    },
  )
  useEffect(() => {
    if (
      loadinginsertproductcart ||
      loadingclosesale ||
      loadinggetclientlist ||
      loadingupdateclientcart ||
      loadingdeleteproductcart ||
      loadingupdateinputproductcart ||
      loadinggetCartByID ||
      loadingfilterproducts ||
      loadinggetclient ||
      loadingseachpatient ||
      loadingDeleteClientCart ||
      loadingGetProduct
    )
      setLoading(true)
    else setLoading(false)
    return () => {
      setLoading(true)
    }
  }, [
    loadinginsertproductcart,
    loadingclosesale,
    loadinggetclientlist,
    loadingupdateclientcart,
    loadingdeleteproductcart,
    loadingupdateinputproductcart,
    loadinggetCartByID,
    loadingfilterproducts,
    loadinggetclient,
    loadingseachpatient,
    loadingDeleteClientCart,
    loadingGetProduct,
  ])

  // useEffect(() => {
  //   if (showModalProductDetail && currentCellRowNode) getProductDetails()
  // }, [showModalProductDetail])

  useEffect(() => {
    // It is importat to reset the current seleted row every time the cart is updated
    setCurrentCellRowNode(null)
  }, [currentCart])

  useEffect(() => {
    if (searchInput) {
      setShowModalSearchProduct(true)
    }
  }, [searchInput])

  useEffect(() => {
    if (!currentClient) setShowLastSells(false)
  }, [currentClient])

  const validateCurrentCounter = () => {
    if (!currentCounter || !Number.isInteger(currentCounter)) return false
    return true
  }

  const validateCurrentCashbox = () => {
    if (!currentCashbox || !Number.isInteger(currentCashbox)) return false
    return true
  }

  const validateCurrentCart = () => {
    if (
      currentCart &&
      currentCart.id &&
      (Number(currentCart.importe_a_pagar) ||
        Number(currentCart.importe_a_pagar) === 0)
    )
      return true
    return false
  }

  const validateCurrentPatient = () => {
    if (currentPatient && currentPatient.paciente_id) return true
    return false
  }

  const validateInputSearch = (input, colId) => {
    if (!['codigo'].includes(colId)) return false
    if (typeof input === 'string' || input instanceof String) {
      if (input && !Number.isNaN(Number(input.charAt(0)))) {
        return false
      }
      for (let i = 0; i < input.length; i += 1) {
        if (Number.isNaN(Number(input.charAt(i)))) {
          return input.length === 3
        }
      }
    }
    return false
  }

  const validateInputUpdate = (input, colId) => {
    if (
      ![
        'codigo',
        'unidades',
        'importe_dto_porcentaje',
        'importe_dto_directo',
      ].includes(colId)
    )
      return false
    if (input !== '') return true
    return false
  }

  const validateInputCode = (input, colId) => {
    if (!['codigo'].includes(colId)) return false
    if (
      (input !== 0 || input !== '') &&
      !Number.isNaN(Number(input[0])) &&
      Number.isInteger(Number(input[0]))
    ) {
      return true
    }
    return false
  }

  // const setClientPatient = (cart, client, patient)=>{
  //   setCurrentClient({
  //     carrito_id: currentCart.id,
  //     id: data.actualizarClienteCarrito.cliente.id,
  //     nombre: data.actualizarClienteCarrito.cliente.nombre,
  //   })
  //   setCurrentPatient({
  //     paciente_id: input.paciente_id,
  //     paciente_nombre: input.paciente_id,
  //   })
  // }

  const getCart = () => {
    if (!validateCurrentCart()) return false
    getcart({ variables: { id: currentCart.id } })
    return true
  }

  const insertLine = async (code) => {
    if (!validateCurrentCounter())
      return {
        success: false,
        data: null,
      }
    const input = {
      codigo: code,
      mostrador_id: currentCounter,
    }
    if (validateCurrentCart()) input.carrito_id = currentCart.id
    if (validateCurrentClient()) input.cliente_id = currentClient.id
    if (validateCurrentPatient()) input.paciente_id = currentPatient.paciente_id
    const { data, errors } = await insertproductcart({ variables: { input } })
    if (errors) {
      showMessage(
        'alert',
        'Error al isertar articulo al carrito',
        `${getError(errors) && getError(errors).message}`,
      )
      setError(getError(errors))
      return { success: false, error: getError(errors) }
    }
    if (data.insertarArticuloCarrito) {
      setCart(data.insertarArticuloCarrito)
      return {
        success: true,
        data: data.insertarArticuloCarrito,
      }
    }
    return { success: false, error: null }
  }

  const deleteLine = async (product) => {
    const { id } = product
    if (!product && !product.id && !validateCurrentCounter) {
      showMessage('alert', 'Error al borrar articulo al carrito')
      return { success: false, error: null }
    }

    const { data, errors } = await deleteproductcart({
      variables: {
        id: Number(id),
        mostrador_id: currentCounter,
      },
    })
    if (errors) {
      showMessage(
        'alert',
        'Error al borrar articulo al carrito',
        `${getError(errors) && getError(errors).message}`,
      )
      setError(getError(errors))
      return { success: false, error: getError(errors) }
    }
    if (data.borrarArticuloCarrito) {
      setCart(data.borrarArticuloCarrito)
      return {
        success: true,
        data: data.borrarArticuloCarrito,
      }
    }
    return { success: false, error: null }
  }

  const updateLine = async (input) => {
    if (!validateCurrentCounter())
      return {
        success: false,
        data: null,
      }
    input.mostrador_id = currentCounter
    if (!validateCurrentCart())
      return {
        success: false,
        data: null,
      }
    input.carrito_id = currentCart.id
    const { data, errors } = await updateinputproductcart({
      variables: { input },
    })
    if (errors) {
      showMessage(
        'alert',
        'Error al isertar articulo al carrito',
        `${getError(errors) && getError(errors).message}`,
      )
      setError(getError(errors))
      return { success: false, error: getError(errors) }
    }
    if (data.actualizarCampoCarrito) {
      setCart(data.actualizarCampoCarrito)
      return {
        success: true,
        data: data.actualizarCampoCarrito,
      }
    }
    return { success: false, error: null }
  }

  const resetStates = () => {
    setCurrentCart(null)
    setCurrentClient(null)
    setCurrentPatient(null)
  }

  const closeSale = async () => {
    if (
      !validateCurrentCounter() ||
      !validateCurrentCart() ||
      !validateCurrentCashbox()
    )
      return {
        success: false,
        data: null,
      }

    const input = {
      id: currentCart.id,
      importe_entregado: currentCart.importe_a_pagar,
      cajon_id: currentCashbox,
      mostrador_id: currentCounter,
    }

    if (validateCurrentClient()) input.cliente_id = currentClient.id
    const { data, errors } = await closesale({ variables: { input } })
    if (errors) {
      showMessage(
        'alert',
        'Error al momento de cerrar venta',
        `${getError(errors) && getError(errors).message}`,
      )
      setError(getError(errors))
      return { success: false, error: getError(errors) }
    }
    if (data.finalizarVenta && data.finalizarVenta.venta) {
      resetStates()
      setPreviouSale(data.finalizarVenta.venta)
      setLockTPV(true)
      return {
        success: true,
        data: data.finalizarVenta.venta,
      }
    }
    return { success: false, error: null }
  }

  const searchSellsbyKeys = (type, selector, idClient, idPatient) => {
    let patiente
    let client
    if (idClient) client = idClient
    else if (validateCurrentClient()) client = Number(currentClient.id)
    else return
    if (idPatient) patiente = idPatient
    else if (validateCurrentPatient())
      patiente = Number(currentPatient.paciente_id)
    else return
    const query = {
      where: {
        AND: [
          {
            column: selector.column,
            value:
              (selector.id === CLIENT.id && client) ||
              (selector.id === PATIENT.id && patiente),
            operator: 'EQ',
          },
        ],
      },
    }
    searchSells({ variables: { input: query } })
  }

  const setClient = async (input) => {
    if (
      input &&
      input.id &&
      input.paciente_id &&
      validateCurrentCart() &&
      validateCurrentCounter()
    ) {
      const { data, errors } = await updateclientcart({
        variables: {
          input: {
            carrito_id: currentCart.id,
            cliente_id: input.id,
            paciente_id: input.paciente_id,
            mostrador_id: currentCounter,
          },
        },
      })
      if (errors) {
        showMessage(
          'alert',
          'Error al actualizar cliente al carrito',
          `${getError(errors) && getError(errors).message}`,
        )
        setError(getError(errors))
        return { success: false, error: getError(errors) }
      }
      if (data.actualizarClienteCarrito) {
        setCurrentClient({ ...data.actualizarClienteCarrito.cliente })
        setCurrentPatient({
          paciente_id: input.paciente_id,
          paciente_nombre: input.paciente_nombre,
        })
        setCart(data.actualizarClienteCarrito)
        searchSellsbyKeys(
          currentLastSellsSearchType,
          currentLastSellsSearchSelector,
          Number(input.id),
          Number(input.paciente_id),
        )
        return {
          success: true,
          data: data.actualizarClienteCarrito,
        }
      }
      return { success: false, error: null }
    }
    if (!validateCurrentCart() && validateCurrentCounter()) {
      setCurrentClient({
        carrito_id: null,
        id: input.id,
        nombre: input.nombre,
      })
      setCurrentPatient({
        paciente_id: input.paciente_id,
        paciente_nombre: input.paciente_nombre,
      })
      if (
        currentLastSellsSearchType &&
        currentLastSellsSearchSelector &&
        Number(input.id) &&
        Number(input.paciente_id)
      )
        searchSellsbyKeys(
          currentLastSellsSearchType,
          currentLastSellsSearchSelector,
          Number(input.id),
          Number(input.paciente_id),
        )
      return { success: true, error: null }
    }
    return { success: false, error: null }
  }

  const getClient = async (input) => {
    let id = null
    let pacienteId = null
    if (input && input.id) {
      id = input.id
      pacienteId = input.paciente_id
    }
    if (id && pacienteId) {
      await setClient({
        carrito_id: null,
        id,
        paciente_id: pacienteId,
        paciente_nombre: input.paciente_nombre,
        nombre: input.nombre,
      })
      return
    }
    if (id) {
      getclient({
        variables: { id },
      })
    }
  }

  const searchPatientsByCurrentClient = async (value) => {
    setSearchPatient([])
    if (!validateCurrentClient()) return []
    const { id } = currentClient
    const match = value || ''
    if (!id) {
      return []
    }
    const query = {
      where: {
        AND: [
          {
            column: 'id',
            value: id,
            operator: 'EQ',
          },
        ],
        OR: [
          {
            column: 'paciente_nombre',
            value: `${match}%`,
            operator: 'LIKE',
          },
          {
            column: 'paciente_codigo',
            value: `${match}%`,
            operator: 'LIKE',
          },
          {
            column: 'paciente_cip',
            value: `${match}%`,
            operator: 'LIKE',
          },
        ],
      },
    }

    return seachpatient({
      variables: {
        input: query,
        first: 100,
      },
    })
      .then((data) => {
        const items = data.data.filtrarClientesPacientesPaginado.data.map(
          (d) => ({
            value: d.paciente_id,
            label: d.paciente_nombre,
          }),
        )
        setSearchPatient(items)
        return items
      })
      .catch(() => [])
  }

  const isAnyModalOpen = () =>
    showModalCashRegister ||
    showModalSearchClients ||
    showModalProductDetail ||
    showModalSearchProduct

  const editClientPatient = () => null

  const cloneClientPatient = () => null

  const resetClientPatient = () => {
    if (!validateCurrentCounter() || !validateCurrentCart()) {
      setCurrentPatient(null)
      setCurrentClient(null)
      return
    }
    deleteClientCart({
      variables: {
        input: {
          carrito_id: currentCart.id,
          mostrador_id: currentCounter,
        },
      },
    })
  }

  const actionRemoveArticle = () => {
    if (Object.prototype.hasOwnProperty.call(currentCellRowNode, 'id'))
      deleteLine(currentCellRowNode)
  }

  const getPhotos = async (registernumber) => {
    const dataImages = await getImageProduct(registernumber)
    const defaultImg = [{ url: null }]
    if (dataImages?.fotos) {
      return dataImages.fotos
    }
    return defaultImg
  }

  const getProductDetails = async () => {
    const {
      articulo: { id, numero_registro },
    } = currentCellRowNode
    if (id) {
      getProduct({ variables: { id: Number(id) } })
      const photos = await getPhotos(numero_registro)
      setCurrentArticlePhotos(photos)
    }
  }

  return {
    searchInput,
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
    setCurrentCounter,
    setCurrentCashbox,
    error,
    setCurrentCart,
    currentClient,
    currentPatient,
    currentCart,
    previouSale,
    closeSale,
    getclientlist,
    getCart,
    editClientPatient,
    cloneClientPatient,
    setSearchInput,
    filterArticles,
    validateInputCode,
    validateInputSearch,
    validateInputUpdate,
    getClient,
    searchPatientsByCurrentClient,
    searchPatient,
    isAnyModalOpen,
    loadingSeachSells,
    sellSearchTypes,
    currentLastSellsSearchType,
    setCurrentLastSellsSearchType,
    searchSellsbyKeys,
    currentLastSellsSearchSelector,
    setCurrentLastSellsSearchSelector,
    currentLastSellsSearch,
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
  }
}

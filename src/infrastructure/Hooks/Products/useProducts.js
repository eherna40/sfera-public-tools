import { useState } from 'react'
import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import {
  GET_LISTING,
  GET_PRODUCT,
  GET_LABS,
  LISTAR_CODIGOS_SEGUNDARIOS,
  ENTIDADMUTUAS,
  TIPO_DISPENSACION,
  GET_PRODUCT_INFO,
  GET_PRODUCT_HOMOGENEOUS_GROUP,
  GET_PRODUCT_BUSINESS_INTELLIGENCE,
  GET_PRODUCT_APPEARANCE,
  GET_PRODUCT_PRICE_LABELS,
  GET_PRODUCT_ALTERNATIVE_CODES,
  LISTAR_ANOTACIONES,
  GET_PRODUCT_UNIT_DETAILS,
} from '../../api/products'
import { getImageProduct } from '../../helpers/products'

const datastadisticsfake = [
  {
    ventas: 120,
    maxDiario: 5,
    DOE0: 356,
    compras: 45,
  },
  {
    ventas: 148,
    maxDiario: 3,
    DOE0: 180,
    compras: 100,
  },
  {
    ventas: 84,
    maxDiario: 1,
    DOE0: 145,
    compras: 140,
  },
  {
    ventas: 84,
    maxDiario: 2,
    DOE0: 124,
    compras: 75,
  },
  {
    ventas: 56,
    maxDiario: 3,
    DOE0: 96,
    compras: 80,
  },
  {
    ventas: 82,
    maxDiario: 2,
    DOE0: 137,
    compras: 32,
  },
  {
    ventas: 64,
    maxDiario: 1,
    DOE0: 92,
    compras: 20,
  },
  {
    ventas: 92,
    maxDiario: 1,
    DOE0: 142,
    compras: 40,
  },
  {
    ventas: 102,
    maxDiario: 4,
    DOE0: 256,
    compras: 80,
  },
  {
    ventas: 140,
    maxDiario: 5,
    DOE0: 328,
    compras: 100,
  },
  {
    ventas: 132,
    maxDiario: 2,
    DOE0: 154,
    compras: 80,
  },
  {
    ventas: 156,
    maxDiario: 1,
    DOE0: 247,
    compras: 100,
  },
  {
    ventas: 120,
    maxDiario: 5,
    DOE0: 356,
    compras: 45,
  },
  {
    ventas: 148,
    maxDiario: 3,
    DOE0: 180,
    compras: 100,
  },
  {
    ventas: 84,
    maxDiario: 1,
    DOE0: 145,
    compras: 140,
  },
  {
    ventas: 84,
    maxDiario: 2,
    DOE0: 124,
    compras: 75,
  },
  {
    ventas: 56,
    maxDiario: 3,
    DOE0: 96,
    compras: 80,
  },
  {
    ventas: 82,
    maxDiario: 2,
    DOE0: 137,
    compras: 32,
  },
  {
    ventas: 64,
    maxDiario: 1,
    DOE0: 92,
    compras: 20,
  },
  {
    ventas: 92,
    maxDiario: 1,
    DOE0: 142,
    compras: 40,
  },
  {
    ventas: 102,
    maxDiario: 4,
    DOE0: 256,
    compras: 80,
  },
  {
    ventas: 140,
    maxDiario: 5,
    DOE0: 328,
    compras: 100,
  },
  {
    ventas: 132,
    maxDiario: 2,
    DOE0: 154,
    compras: 80,
  },
  {
    ventas: 156,
    maxDiario: 1,
    DOE0: 247,
    compras: 100,
  },
  {
    ventas: 120,
    maxDiario: 5,
    DOE0: 356,
    compras: 45,
  },
  {
    ventas: 148,
    maxDiario: 3,
    DOE0: 180,
    compras: 100,
  },
  {
    ventas: 84,
    maxDiario: 1,
    DOE0: 145,
    compras: 140,
  },
  {
    ventas: 84,
    maxDiario: 2,
    DOE0: 124,
    compras: 75,
  },
  {
    ventas: 56,
    maxDiario: 3,
    DOE0: 96,
    compras: 80,
  },
  {
    ventas: 82,
    maxDiario: 2,
    DOE0: 137,
    compras: 32,
  },
  {
    ventas: 64,
    maxDiario: 1,
    DOE0: 92,
    compras: 20,
  },
  {
    ventas: 92,
    maxDiario: 1,
    DOE0: 142,
    compras: 40,
  },
  {
    ventas: 102,
    maxDiario: 4,
    DOE0: 256,
    compras: 80,
  },
  {
    ventas: 140,
    maxDiario: 5,
    DOE0: 328,
    compras: 100,
  },
  {
    ventas: 132,
    maxDiario: 2,
    DOE0: 154,
    compras: 80,
  },
  {
    ventas: 156,
    maxDiario: 1,
    DOE0: 247,
    compras: 100,
  },
  {
    ventas: 120,
    maxDiario: 5,
    DOE0: 356,
    compras: 45,
  },
  {
    ventas: 148,
    maxDiario: 3,
    DOE0: 180,
    compras: 100,
  },
  {
    ventas: 84,
    maxDiario: 1,
    DOE0: 145,
    compras: 140,
  },
  {
    ventas: 84,
    maxDiario: 2,
    DOE0: 124,
    compras: 75,
  },
  {
    ventas: 56,
    maxDiario: 3,
    DOE0: 96,
    compras: 80,
  },
  {
    ventas: 82,
    maxDiario: 2,
    DOE0: 137,
    compras: 32,
  },
  {
    ventas: 64,
    maxDiario: 1,
    DOE0: 92,
    compras: 20,
  },
  {
    ventas: 92,
    maxDiario: 1,
    DOE0: 142,
    compras: 40,
  },
  {
    ventas: 102,
    maxDiario: 4,
    DOE0: 256,
    compras: 80,
  },
  {
    ventas: 140,
    maxDiario: 5,
    DOE0: 328,
    compras: 100,
  },
  {
    ventas: 132,
    maxDiario: 2,
    DOE0: 154,
    compras: 80,
  },
  {
    ventas: 156,
    maxDiario: 1,
    DOE0: 247,
    compras: 100,
  },
]

const dataauditfake = [
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'ALMACÉN 1',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'FEDEFARMA',
    cantidad: '1',
    actualizado: false,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'FEDEFARMA',
    cantidad: '1',
    actualizado: false,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'FEDEFARMA',
    cantidad: '1',
    actualizado: false,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'FEDEFARMA',
    cantidad: '1',
    actualizado: false,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'FEDEFARMA',
    cantidad: '1',
    actualizado: false,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
  {
    fecha: '24/01/2021 - 08:32:31',
    empleado: 'JOAN M',
    tipoMovimiento: 'VENTA',
    desde: 'Mostrador 1',
    hasta: 'CLIENTE',
    cantidad: '1',
    actualizado: true,
    noDefinido: '-',
  },
]

const datalastyearfake = [
  {
    header: 'ENE 20',
    ventas: 120,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 5,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 356,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 45,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'FEB 20',
    ventas: 148,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 3,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 180,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 100,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'MAR 20',
    ventas: 84,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 1,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 145,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 140,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'ABR 20',
    ventas: 84,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 2,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 124,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 75,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'MAY 20',
    ventas: 56,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 3,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 96,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 80,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'JUN 20',
    ventas: 82,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 2,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 137,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 32,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'JUL 20',
    ventas: 64,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 1,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 92,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 20,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'AGO 20',
    ventas: 92,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 1,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 142,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 40,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'SEP 20',
    ventas: 102,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 4,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 256,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 80,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'OCT 20',
    ventas: 140,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 5,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 328,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 100,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'NOV 20',
    ventas: 132,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 2,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 154,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 80,
    comprasColor: 'rgba(63, 203, 217)',
  },
  {
    header: 'DIC 20',
    ventas: 156,
    ventasColor: 'rgba(113, 216, 116)',
    maxDiario: 1,
    maxDiarioColor: 'rgba(255, 181, 0)',
    DOE0: 247,
    DOE0Color: 'rgba(15, 102, 108)',
    compras: 100,
    comprasColor: 'rgba(63, 203, 217)',
  },
]

const totalslastyearfake = [
  {
    header: 'T (12)',
    ventas: 1271,
    maxDiario: 0,
    DOE0: 1508,
    compras: 862,
  },
  {
    header: 'M (6)',
    ventas: 686,
    maxDiario: 0,
    DOE0: 1219,
    compras: 390,
  },
]

const datadetailsfake = [
  {
    id: '1',
    ubicacion: 'MOSTRADOR (2)',
    fechaCompra: '',
    Caducidad: '',
    numLote: '',
    numSerie: '',
  },
]

const dataOfertSellsfake = [
  {
    proveedor: '1234',
    desde: '01-01-2021 - 0:0:00',
    hasta: '15-03-2021 - 0:0:00',
    pVenta: '21,25',
    bonificacion: '15+1',
    base: '1,24€',
    pva: '1,04€',
    pvp: '2,40€',
    costeFinal: '1,10€',
    descuento: '1,10€',
  },
  {
    proveedor: '1234',
    desde: '01-01-2021 - 0:0:00',
    hasta: '15-03-2021 - 0:0:00',
    pVenta: '21,25',
    bonificacion: '30+3',
    base: '1,24€',
    pva: '1,04€',
    pvp: '2,40€',
    costeFinal: '1,10€',
    descuento: '1,10€',
  },
]

const dataLastSellsfake = [
  {
    fecha: '12/08/2020 - 18:44',
    nPedido: '143950',
    caducidad: '-',
    proveedor: 'JOHNSON _ MCNEIL',
    unidades: '180',
  },
  {
    fecha: '12/08/2020 - 18:44',
    nPedido: '143950',
    caducidad: '-',
    proveedor: 'HEFAME',
    unidades: '180',
  },
]

export const useProducts = (id) => {
  const [loading, setloading] = useState(false)
  const [showModalAnnotations, setShowModalAnnotations] = useState(false)
  const [showModalBotPlus, setShowModalBotPlus] = useState(false)
  const [showCreateAnnotations, setShowCreateAnnotations] = useState(false)
  const [unlock, setunlock] = useState(false)
  const [pinmodal, setpinmodal] = useState(false)
  const [fechdatachart, setchartdata] = useState([])
  const [charfilterid, setcharfilterid] = useState(4)
  const [productDetail, setProductDetail] = useState(null)
  const [formArticleData, setFormArticleData] = useState(null)
  const [codes, setCodes] = useState(null)
  const [entities, setEntities] = useState(null)
  const [dispensation, setDispensation] = useState(null)
  const [info, setInfo] = useState(null)
  const [hGroupData, sethGroupData] = useState(null)
  const [biData, setBiData] = useState(null)
  const [appearanceData, setAppearanceData] = useState(null)
  const [priceLabelData, setPriceLabelData] = useState(null)
  const [altCodesData, setAltCodesData] = useState(null)
  const [unitDetails, setUnitDetails] = useState(null)

  useQuery(GET_PRODUCT, {
    errorPolicy: 'all',
    variables: { id },
    onCompleted: (productData) => {
      if (productData && productData.articulo) {
        setProductDetail(productData.articulo)
      }
    },
  })

  useQuery(GET_PRODUCT_UNIT_DETAILS, {
    errorPolicy: 'all',
    variables: { id },
    onCompleted: (details) => {
      if (details && details.articulo) {
        setUnitDetails(details.articulo)
      }
    },
  })

  useLazyQuery(LISTAR_ANOTACIONES, {
    variables: {
      articulo_id: id,
    },
  })
  const [getLisitng] = useMutation(GET_LISTING, {
    errorPolicy: 'all',
  })

  const handleUnlock = () => {
    if (unlock) setunlock(!unlock)
    else {
      setunlock(!unlock)
      setpinmodal(!pinmodal)
    }
  }

  const getPhotos = async (registernumber) => {
    const dataImages = await getImageProduct(registernumber)
    const defaultImg = [{ url: null }]

    if (dataImages?.fotos) {
      return dataImages.fotos
    }
    return defaultImg
  }

  const handlePinModal = () => {
    setpinmodal(!pinmodal)
  }

  const handleCreateAnnotationsModal = () => {
    setShowModalAnnotations(false)
    setShowCreateAnnotations(true)
  }

  const getChartData = (filter) => {
    const datas = []
    const totalsall = {}
    const datakeys = { ...datastadisticsfake[0] }
    const dataColors = {
      ventasColor: 'rgba(113, 216, 116)',
      maxDiarioColor: 'rgba(255, 181, 0)',
      DOE0Color: 'rgba(15, 102, 108)',
      comprasColor: 'rgba(63, 203, 217)',
    }
    if (filter && filter.callback()) {
      setcharfilterid(Number(filter.id))
      filter.callback().forEach((i, index) => {
        const mm = i.toLocaleString('default', { month: 'short' })
        const dd = i.getDate()
        const colors = {}
        if (datakeys) {
          Object.keys(datakeys).forEach((j) => {
            colors[`${j}Color`] = dataColors[`${j}Color`] || 'black'
            totalsall[`${j}`] = totalsall[`${j}`]
              ? totalsall[`${j}`] + datastadisticsfake[index][`${j}`]
              : datastadisticsfake[index][`${j}`]
          })
        }
        datas.push({
          header: `${
            filter.callback().length < 12 ? mm.toUpperCase() : ''
          } ${dd}`,
          ...datastadisticsfake[index],
          ...colors,
        })
      })
    }
    if (datas.length === 0)
      setchartdata({
        data: [...datalastyearfake],
        totals: [...totalslastyearfake],
      })
    else
      setchartdata({
        data: [...datas],
        totals: [{ header: 'TOTAL', ...totalsall }],
      })
  }

  const getAuditData = () => dataauditfake
  const getProductDetails = () => datadetailsfake
  const getOfertsSells = () => dataOfertSellsfake
  const getLastSells = () => dataLastSellsfake

  const [
    getArticleData,
    { loading: artLoading, error: artError },
  ] = useLazyQuery(GET_LABS, {
    errorPolicy: 'all',
    variables: { id },
    onCompleted: (data) => {
      if (data && data.articulo) setFormArticleData(data.articulo)
    },
  })
  const [getSecondaryCodes, { loading: formSecondaryLoading }] = useLazyQuery(
    LISTAR_CODIGOS_SEGUNDARIOS,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (data) => {
        if (data && data.articulo) setCodes(data.articulo.codigosSecundarios)
      },
    },
  )

  const [getEntities, { loading: loadingEntities }] = useLazyQuery(
    ENTIDADMUTUAS,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (entity) => {
        setEntities(entity)
      },
    },
  )

  const [getDispensation, { loading: loadingDispensation }] = useLazyQuery(
    TIPO_DISPENSACION,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (dis) => {
        setDispensation(dis)
      },
    },
  )

  const [getInfo, { loading: loadingInfo }] = useLazyQuery(GET_PRODUCT_INFO, {
    variables: { id },
    errorPolicy: 'all',
    onCompleted: (infoData) => {
      setInfo(infoData)
    },
  })

  const [gethGroupData, { loading: hGroupLoading }] = useLazyQuery(
    GET_PRODUCT_HOMOGENEOUS_GROUP,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (hgData) => {
        sethGroupData(hgData)
      },
    },
  )

  const [getBiData, { loading: loadingBI }] = useLazyQuery(
    GET_PRODUCT_BUSINESS_INTELLIGENCE,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (bi) => {
        setBiData(bi)
      },
    },
  )

  const [getAppearance, { loading: loadingAppearance }] = useLazyQuery(
    GET_PRODUCT_APPEARANCE,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (ap) => {
        setAppearanceData(ap)
      },
    },
  )

  const [getPriceLabels, { loading: loadingPriceLabels }] = useLazyQuery(
    GET_PRODUCT_PRICE_LABELS,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (plData) => {
        setPriceLabelData(plData)
      },
    },
  )

  const [getAltCodes, { loading: loadingAltCodes }] = useLazyQuery(
    GET_PRODUCT_ALTERNATIVE_CODES,
    {
      variables: { id },
      errorPolicy: 'all',
      onCompleted: (acData) => {
        setAltCodesData(acData)
      },
    },
  )

  return {
    loading,
    setloading,
    showModalAnnotations,
    setShowModalAnnotations,
    showModalBotPlus,
    setShowModalBotPlus,
    handleUnlock,
    handlePinModal,
    unlock,
    pinmodal,
    getPhotos,
    showCreateAnnotations,
    setShowCreateAnnotations,
    handleCreateAnnotationsModal,
    getChartData,
    fechdatachart,
    getAuditData,
    charfilterid,
    getOfertsSells,
    getLastSells,
    getProductDetails,
    productDetail,
    getLisitng,
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
    unitDetails,
  }
}

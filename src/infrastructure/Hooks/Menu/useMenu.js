/* eslint-disable no-empty-pattern */
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_FAVORITOS,
  GET_SOFTWARES,
  INSERT_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  REMOVE_FOLDER_FROM_FAVORITE,
  UPDATE_FOLDER,
  SEARCH_RESOURCES,
} from '../../api/menu'
import { actionFavoritesSucess } from '../../redux/actions/favorites'
import {
  actionSelectSoftwareSuccess,
  // actionSelectSoftwareSuccess,
  // actionSelectSoftwareSuccess,
  actionSetSoftwaresSuccess,
} from '../../redux/actions/software'
// import { useNavigation } from '../navigation/useNavigation'
// import { URL_AREA_PRIVADA } from '../../api/login'

export const useMenu = () => {
  const { t } = useTranslation()
  const user = useSelector((state) => state.userReducer.usuario)
  // const { token } = useSelector((state) => state.userReducer)

  const [userSearch, setUserSearch] = useState([])
  // const stack = useSelector((state) => state.navigationReducer.stack)
  const favorites = useSelector((state) => state.favoritesReducer.favorites)
  const [module, setModule] = useState({})
  const dispatch = useDispatch()
  // eslint-disable-next-line no-empty-pattern
  // const navigation = useNavigation()
  const [getFavoritos, { data }] = useLazyQuery(GET_FAVORITOS, {
    variables: { id: Number(user.id) },
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: ({ favoritosCarpeta }) => {
      const favs = favoritosCarpeta.data
      dispatch(actionFavoritesSucess(favs))
    },
  })
  // const [urlAreaprivada, setUrlAreaprivada] = useState(null)
  // const [getAreaPrivada] = useMutation(URL_AREA_PRIVADA, {
  //   errorPolicy: 'ignore',
  //   fetchPolicy: 'no-cache',
  //   onCompleted: (d) => {
  //     if (d && d.obtenerSemillaLoginIofnet) {
  //       setUrlAreaprivada(d.obtenerSemillaLoginIofnet.url_acceso_iofnet)
  //     }
  //   },
  // })

  // useEffect(() => {
  //   // cada vez que se modifica el token, pedimos la url de la semilla, ya que cada usuario tendra una unica
  //   if (token) getAreaPrivada()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token])

  const softwares = useSelector((state) => state.softwareReducer.softwares)
  const software = useSelector((state) => state.softwareReducer.software)

  const [getMenus, { loading: loadingMenu }] = useMutation(GET_SOFTWARES, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    errorPolicy: 'all',
    onCompleted: ({ listarMenus }) => {
      dispatch(actionSetSoftwaresSuccess(listarMenus))
      let menu = {}
      if (software.id) {
        menu = listarMenus?.find((i) => i.id === software.id)
      }
      if (`${module.software_id}` === '0' && listarMenus) {
        const tempSoftware = listarMenus.find(
          (i) => i.id === `${module.software_id}`,
        )
        if (tempSoftware && tempSoftware.children && module.id) {
          const tempModule = tempSoftware.children.find(
            (i) => i.id === module.id,
          )
          if (tempModule) setModule(tempModule)
        }
      }
      // else {
      // menu = listarMenus?.find((i) => i.id !== '0' && i.activo)
      // }
      if (menu && menu.id) dispatch(actionSelectSoftwareSuccess(menu))
      getFavoritos()
    },
  })
  // const loadingMenu = false
  // const getMenus = () => {
  //   const { listarMenus } = fakeMenuData
  //   // debugger
  //   dispatch(actionSetSoftwaresSuccess(listarMenus))
  //   let menu = {}
  //   if (software.id) {
  //     menu = listarMenus.find((i) => i.id === software.id)
  //   } else {
  //     menu = listarMenus.find((i) => i.id !== '0' && i.activo)
  //   }
  //   dispatch(actionSelectSoftwareSuccess(menu))
  //   getFavoritos()
  //   let defaultTab = {}

  //   const activeResource = menu.children.find((i) => i.children)

  //   if (
  //     navigation.stack.length === 0 &&
  //     activeResource &&
  //     activeResource.children &&
  //     activeResource.children.length > 0
  //   ) {
  //     defaultTab = [...activeResource.children].shift()

  //     navigation.push(defaultTab)
  //   }
  // }

  const [handleInsertFavorite, { loading: loadingFav }] = useMutation(
    INSERT_TO_FAVORITE,
    {
      errorPolicy: 'all',
      onCompleted: () => {
        setTimeout(() => {
          getMenus()
        }, 200)
      },
    },
  )

  const [handleRemoveFavorite] = useMutation(REMOVE_FROM_FAVORITE, {
    errorPolicy: 'all',
    onCompleted: () => {
      setTimeout(() => {
        getMenus()
      }, 200)
    },
  })

  const [
    handleRemoveFolderFavorite,
    { loading: rmFolderLoading },
  ] = useMutation(REMOVE_FOLDER_FROM_FAVORITE, {
    errorPolicy: 'all',
    onCompleted: () => getFavoritos(),
  })

  const [
    handleUpdateFolderFavorite,
    { loading: updateFolderLoading },
  ] = useMutation(UPDATE_FOLDER, {
    errorPolicy: 'all',
  })

  const [handleSearchResources, { loading: searchLoading }] = useMutation(
    SEARCH_RESOURCES,
    {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  )

  const toggleFavorite = (item) => {
    const temp = []
    favorites.forEach((el) => {
      const items = {
        ...el,
        favoritos: el.favoritos.filter((i) => i.id !== item.id),
      }
      temp.push(items)
    })
    dispatch(actionFavoritesSucess(temp))
  }

  const getResoursesErp = () => {
    if (
      softwares &&
      Array.isArray(softwares) &&
      softwares.length > 0 &&
      softwares[0].id === '0'
    ) {
      return softwares[0].recursos[0]
    }
    return {}
  }

  const getModulesErp = (id) => {
    if (softwares && Array.isArray(softwares) && softwares.length > 0) {
      const soft = softwares.find((i) => Number(i.id) === Number(id))
      if (soft && soft.children) {
        // const children = soft.children.filter((i) => i.visible)
        // children.forEach((i) => {
        //   const j = i.children.filter((i) => !i.visible)
        //   i.children = j
        // })
        // return children
        return soft.children
      }
      return []
    }
    return []
  }

  const onSelectModule = (idSoftware, idModule, idModuleSoftware) => {
    try {
      // Double check for the module software_id and idSofware.
      if (`${Number(idSoftware)}` === `${Number(idModuleSoftware)}`) {
        const selectSoftware = softwares.find(
          (i) => Number(i.id) === Number(idSoftware),
        )
        const selectModule = selectSoftware.children.find(
          (i) => i.id === idModule,
        )
        // console.log(selectModule)
        if (!selectModule.children) {
          return {
            type: 'link',
            data: selectModule,
          }
        }
        setModule(selectModule)
        return {
          type: 'open',
          data: 1,
        }
      }
      return null
    } catch (err) {
      setModule({})
      return null
    }
  }

  useEffect(() => {
    if (module.id) {
      onSelectModule(software.id, module.id, module.software_id)
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [software])

  const setFavorite = async (input) => {
    const { errors } = await handleInsertFavorite({
      variables: { input },
    })
    if (errors) {
      return {
        status: false,
        error: errors,
      }
    }

    return {
      status: true,
    }
  }

  const removeFavorite = async (id) => {
    const temp = favorites.map((el) => {
      const filteredFavs = el.favoritos.filter((i) => i.id !== id)
      return { ...el, favoritos: filteredFavs }
    })
    dispatch(actionFavoritesSucess(temp))
    const { errors } = await handleRemoveFavorite({
      variables: { id },
    })
    if (errors) {
      return false
    }
    return true
  }

  const moveFavorite = async (folder, item) => {
    const input = {
      id: item.recurso.id,
      es_menu: false,
      carpeta_id: folder,
    }
    const temp = []
    favorites.forEach((i) => {
      const items = {
        ...i,
        favoritos: i.favoritos.filter((e) => e.id !== item.id),
      }
      if (folder === i.id) {
        items.favoritos.push(item)
      }
      temp.push(items)
    })
    dispatch(actionFavoritesSucess(temp))

    setFavorite(input)
  }

  const removeFolder = async (id) => {
    const temp = favorites.filter((el) => el.id !== id)
    dispatch(actionFavoritesSucess(temp))
    const { errors } = await handleRemoveFolderFavorite({
      variables: { id },
    })
    if (errors) {
      return { status: false, error: errors }
    }
    return { status: true }
  }

  const updateFolder = async (id, name) => {
    const temp = favorites.map((el) => {
      if (el.id === id) {
        return { ...el, descripcion: name }
      }
      return el
    })
    dispatch(actionFavoritesSucess(temp))
    handleUpdateFolderFavorite({
      variables: { id, descripcion: name },
    })
    // if (errors) {
    //   return { status: false, error: errors }
    // }
    return { status: true }
  }

  const searchResources = async (texto) => {
    setUserSearch([])
    if (!texto) {
      return null
    }
    const { data: searchData } = await handleSearchResources({
      variables: { input: { texto } },
    })
    if (
      searchData.buscarRecursosSoftware &&
      searchData.buscarRecursosSoftware.length > 0
    ) {
      setUserSearch(searchData.buscarRecursosSoftware)
    } else
      setUserSearch([
        {
          nombre: t('messages.No se encuentran resultados'),
          visible: true,
          id: -1,
          fav_id: null,
        },
      ])
    return { status: true }
  }

  return {
    favorites,
    data,
    toggleFavorite,
    moveFavorite,
    softwares,
    getModulesErp,
    getResoursesErp,
    onSelectModule,
    module,
    software,
    loadingMenu,
    setFavorite,
    loadingFav,
    removeFavorite,
    getMenus,
    removeFolder,
    rmFolderLoading,
    updateFolder,
    updateFolderLoading,
    getFavoritos,
    searchResources,
    userSearch,
    searchLoading,
    // urlAreaprivada,
    // getAreaPrivada,
  }
}

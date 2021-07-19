import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CAMBIAR_IDIOMA } from '../../api/languages'
import {
  FIRST_LOGIN_TITULAR,
  LOGIN,
  LOGOUT,
  PSEUDO_LOGIN,
} from '../../api/login'
import { warehouseHelpers } from '../../helpers/warehouse'
import { actionSetSoftwaresSuccess } from '../../redux/actions/software'
import {
  actionLoginUser,
  actionLoginUserSuccess,
  actionSessionOff,
} from '../../redux/actions/user'
import { useNavigation } from '../navigation/useNavigation'
import { useAggrid } from '../useAggrid'
import { useGql } from '../useGql'
import { useUser } from '../User/useUser'

export const useLogin = () => {
  const { getTablesSettings } = useAggrid()
  const session = useSelector((state) => state.userReducer.session)
  const { usuario } = useSelector((state) => state.userReducer)
  const { addMultiuser, removeMultiuser, users } = useUser()
  const navigation = useNavigation()
  const history = useHistory()
  const { i18n } = useTranslation()
  const [cambiarIdioma] = useMutation(CAMBIAR_IDIOMA, {
    errorPolicy: 'all',
  })

  const [firstLoginTitular, { loading: loadingLoginFirts }] = useMutation(
    FIRST_LOGIN_TITULAR,
    {
      errorPolicy: 'all',
    },
  )
  const [handleLogin, { loading: loadingLogin }] = useMutation(LOGIN, {
    errorPolicy: 'all',
  })
  const [handleLogut, { loading: loadingLogout }] = useMutation(LOGOUT, {
    errorPolicy: 'all',
  })

  const [
    handlePseudoLogin,
    { loading: loadingPseudo },
  ] = useMutation(PSEUDO_LOGIN, { errorPolicy: 'all' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const dispatcher = useDispatch()

  const { getError } = useGql()

  useEffect(() => {
    if (loadingLogin || loadingLogout || loadingPseudo || loadingLoginFirts) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [loadingLogin, loadingLogout, loadingPseudo, loadingLoginFirts])

  // const setStateThemeResourcesFromLoginData = ({
  //   grupoCorporativo,
  //   logotipo,
  // }) => {
  //   if (grupoCorporativo) {
  //     if (logotipo) {
  //       setStateThemeResources(grupoCorporativo.color, logotipo.url)
  //     } else {
  //       setStateThemeResources(grupoCorporativo.color, grupoCorporativo.logo)
  //     }
  //   }
  // }

  const manageUser = async (data, errors) => {
    // dispatcher(actionLoginUser())
    setError(null)
    if (data) {
      // SETEAMOS TODOS LOS DATOS QUE IRAN AL userReducer
      const values = {
        ...data,
        // farmacia:{
        //   id:"731",
        //   grupoCorporativo: {
        //     id: "2",
        //     logo: null,
        //     nombre: "Xarxafarma",
        //     paleta: {id: "3", nombre: "Xarxafarma", primario: "#a41e1e", secundario: "#a91e1e", terciario: "#000000"},
        //   },
        //   paleta: {id: "3", nombre: "Xarxafarma", primario: "#a41e1e", secundario: "#a91e1e", terciario: "#000000"},
        //   grupos:['2']
        // },
        almacenes: warehouseHelpers.formatWarehouses(data.almacenes),
        usuario: {
          ...data.usuario,
          almacenLogueado: warehouseHelpers.format(
            data.usuario.almacenLogueado,
          ),
        },
      }
      if (
        data &&
        data.usuario &&
        data.usuario.idioma &&
        data.usuario.idioma.codigo
      )
        if (!usuario.id && usuario?.idioma?.id) {
          i18n.changeLanguage(usuario.idioma.codigo)
          values.usuario.idioma = usuario.idioma
          cambiarIdioma({
            variables: {
              idioma_iso: usuario.idioma.id,
            },
          })
        } else {
          i18n.changeLanguage(data.usuario.idioma.codigo)
        }
      dispatcher(actionLoginUserSuccess(values))
      // creamos los multiusuarios
      addMultiuser(values)
      if (data.menus) {
        // Establecemos los menus y softwares de la palicacion
        dispatcher(actionSetSoftwaresSuccess(data.menus))
        // let menu = {}
        // menu = data.menus.find((i) => i.id !== '0' && i.activo)
        // dispatcher(actionSelectSoftwareSuccess(menu))
      }
      // Cargamos de forma sincrona los filtros de tablas del usuario
      getTablesSettings()
      // Cargamos el tema y el logo de la farmacia con los datos del login
      // if (!theme && data.farmacia) {
      //   setStateThemeResourcesFromLoginData(data.farmacia)
      // }
      return {
        success: true,
        values: data,
      }
    }
    // if (!isfirtstime) dispatcher(actionLoginUserFailed(reset))
    setError(getError(errors))
    return {
      success: false,
    }
  }

  const onLogin = async (input, isfirtstime) => {
    setError(null)
    dispatcher(actionLoginUser(input.codigo))
    if (i18n.language) input.idioma_iso = i18n.language
    try {
      const { data, errors } = await handleLogin({
        variables: input,
      })
      // CHANGE -> There is a new param under the manageruser func. this params define once a funtions is firsttime or not
    
      return manageUser(data?.login, errors, true, isfirtstime)
    } catch (err) {
      setError({
        success: false,
        message: 'Error al conectar con BBDD',
      })
      return {
        success: false,
        message: 'Error al conectar con BBDD',
      }
    }
  }

  const onLogout = async () => {
    setError(null)
    navigation.reset([], true)
    removeMultiuser(usuario)
    if (users.length === 1) {
      handleLogut()
      // dispatcher(actionLogoutUser())
      history.replace('/login')
    } else {
      onCloseSession()
    }
  }

  const pseudoLogin = async (pin, id) => {
    setError(null)
    const input = { pin }
    if (id) input.usuario_id = id
    dispatcher(actionLoginUser(null))
    const { data, errors } = await handlePseudoLogin({
      variables: { input },
    })
    // console.log(data)
    return manageUser(data?.pseudoLogin, errors, false)
  }

  const onCloseSession = () => {
    dispatcher(actionSessionOff(false))
  }

  const clearError = () => {
    setError(null)
  }

  const onFirtsLogin = async (input) => {
    setError(null)
    // TODO - ERROR LANGUAGES
    // if (i18next.language) input.idioma_iso = i18next.language
    try {
      const { data, errors } = await firstLoginTitular({
        variables: {
          ...input,
          idioma_iso: i18n.language,
        },
      })
      if (errors) {
        const err = getError(errors)
        setError(err)
        return {
          success: false,
          message: err.message,
        }
      }
      if (data) {
        const {
          token,
          usuario: user,
          farmacia,
        } = data.validarUsuarioPrimerLogin
        user.almacenLogueado = warehouseHelpers.format(user.almacenLogueado)
        const values = {
          token,
          usuario: user,
          farmacia,
        }
        dispatcher(actionLoginUserSuccess(values))
        history.push('/invitations')
      }
      return {
        success: true,
      }
    } catch (err) {
      return {
        success: false,
        message: 'Error al conectar con BBDD',
      }
    }
  }

  const onFirtsLogout = () => {
    setError(null)
    history.push('/login')
  }

  return {
    loading,
    onLogin,
    error,
    onLogout,
    pseudoLogin,
    onCloseSession,
    session,
    clearError,
    onFirtsLogin,
    onFirtsLogout,
  }
}

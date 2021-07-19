import { useMutation, useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { GET_USER, UPDATE_USER, EXISTING_INPUT } from '../../api/profile'
import { useGql } from '../useGql'
import useFlashMessage from '../useFlashMessage'
import { actionUpdateUser } from '../../redux/actions/user'

export const useProfile = () => {
  const { showMessage } = useFlashMessage()
  const userReducer = useSelector((state) => state.userReducer)
  const { getError, getErrorValidation } = useGql()
  const [user, setuser] = useState(null)
  const [softwares, setsoftwares] = useState([])
  const [loading, setloading] = useState(null)
  const [updateloading, setupdateloading] = useState(null)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [credentials, setcredentials] = useState({
    ereceta: {
      keys: {
        user: {
          key: 'receta_usuario',
          name: 'Usuario',
        },
        password: {
          key: 'receta_password',
          name: 'Contraseña',
        },
      },
    },
    loyalty: {
      keys: {
        user: {
          key: 'fidel_codigo',
          name: 'Codigo',
        },
        password: {
          key: 'fidel_password',
          name: 'Contraseña',
        },
      },
    },
  })
  const [geuser, { loading: loadinggetuser }] = useLazyQuery(GET_USER, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: ({ usuario }) => {
      const telefono =
        usuario.usuarioTelefono.length > 0
          ? usuario.usuarioTelefono[0].telefono.substring(2)
          : ''
      const telefonoid =
        usuario.usuarioTelefono.length > 0 ? usuario.usuarioTelefono[0].id : ''
      const provincia = usuario.provincia
        ? usuario.provincia[0].descripcion
        : null
      const u = {
        ...usuario,
        softwares: usuario.recursos,
      }
      delete u.usuarioTelefono
      delete u.provincia
      u.usuarioTelefono = telefono
      u.usuarioTelefonoid = telefonoid
      u.provincia = provincia
      u.id_sertec =
        userReducer && userReducer.farmacia
          ? userReducer.farmacia.id_sertec
          : null
      delete u.recursos
      setuser(u)
    },
  })
  const [updateuser, { loading: loadingupdate }] = useMutation(UPDATE_USER, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      if (data && data.actualizarUsuario)
        dispatch(actionUpdateUser(data.actualizarUsuario))
    },
  })
  const [validateinput, { loading: loadingvalidateinput }] = useMutation(
    EXISTING_INPUT,
    {
      errorPolicy: 'all',
    },
  )
  useEffect(() => {
    if (loadinggetuser) setloading(true)
    else setloading(false)
  }, [loadinggetuser])

  useEffect(() => {
    if (loadingupdate || loadingvalidateinput) setupdateloading(true)
    else setupdateloading(false)
  }, [loadingupdate, loadingvalidateinput])

  // useEffect(() => {
  //     if (user) {
  //         console.log(user)
  //     }
  // }, [user])

  useEffect(() => {
    if (user && user.softwares) {
      setsoftwares(user.softwares)
    }
  }, [user])

  const setCredentials = (u) => {
    let c = { ...credentials }
    if (user) {
      c = {
        ...c,
        ereceta: {
          ...c.ereceta,
          value: {
            receta_usuario: u.receta_usuario ? u.receta_usuario : null,
            receta_password: u.receta_password ? u.receta_password : null,
          },
        },
      }
    } else {
      c = {
        ...c,
        ereceta: {
          ...c.ereceta,
          value: {
            receta_usuario: null,
            receta_password: null,
          },
        },
      }
    }
    if (user) {
      c = {
        ...c,
        loyalty: {
          ...c.loyalty,
          value: {
            fidel_codigo: u.fidel_codigo ? u.fidel_codigo : null,
            fidel_password: u.fidel_password ? u.fidel_password : null,
          },
        },
      }
    } else {
      c = {
        ...c,
        loyalty: {
          ...c.loyalty,
          value: {
            fidel_codigo: null,
            fidel_password: null,
          },
        },
      }
    }
    setcredentials(c)
  }

  useEffect(() => {
    if (user) setCredentials(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const update = async (id, input) => {
    if (Object.keys(input).length === 0) return null
    try {
      const { data, errors } = await updateuser({
        variables: { id, input },
      })
      if (data && data.actualizarUsuario) {
        showMessage('success', '', t('actions.Acción realizada con éxito'))
        return {
          success: true,
          data: data.actualizarUsuario,
        }
      }
      showMessage(
        'Error',
        'No se puede editar el usuario',
        `${getError(errors) && getError(errors).message}`,
      )
      return { success: false, error: getError(errors) }
    } catch (err) {
      showMessage('alert', `${err}`)
      return {
        success: false,
        error: err,
      }
    }
  }

  const uploadImageProfile = async (file, id) => {
    try {
      if (!file) {
        update(id, { borrar_avatar: true })
        return false
      }
      if (!userReducer && !userReducer.token) return false
      const formdata = new FormData()
      formdata.append(
        'operations',
        `{ "query": "mutation ($file: Upload!) { subirArchivoAvatarUsuario(id: ${id},file: $file) { url url_miniatura, url_250} }", "variables": { "file": null } }`,
      )
      formdata.append('map', '{ "0": ["variables.file"] }')
      formdata.append('0', file, `user_${id}.png`)
      const myHeaders = new Headers()
      myHeaders.append('Authorization', `Bearer ${userReducer.token}`)
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }
      const avatar = await fetch(
        process.env.REACT_APP_URL_ENVIRONMENT,
        requestOptions,
      )
        .then((response) => response.json())
        .then((data) => data)

      const {
        data: {
          subirArchivoAvatarUsuario: { url, url_miniatura, url_250 },
        },
      } = avatar
      dispatch(
        actionUpdateUser({
          avatar: { url, url_miniatura, url_250 },
          id,
        }),
      )
      return url
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      return null
    }
  }

  const validateInput = async (value, key) => {
    const input = {
      [key]: value,
    }
    const { errors } = await validateinput({
      variables: { input },
    })
    if (errors) {
      return getErrorValidation(errors)
    }

    return true
  }

  const reload = (active) => {
    if (active)
      geuser({
        variables: {
          id: userReducer.usuario.id,
        },
      })
    else setloading(true)
  }

  const updateOnlyPin = async (id, input) => {
    if (Object.keys(input).length === 0) return null
    try {
      const { data, errors } = await updateuser({
        variables: { id, input },
      })
      // console.log('asssss')
      if (data && data.actualizarUsuario) {
        showMessage('success', '', t('actions.Acción realizada con éxito'))
        return {
          success: true,
          data: data.actualizarUsuario,
        }
      }
      showMessage(
        'Error',
        'No se puede editar el usuario',
        `${getError(errors) && getError(errors).message}`,
      )
      return { success: false, error: getError(errors) }
    } catch (err) {
      showMessage('alert', `${err}`)
      return {
        success: false,
        error: err,
      }
    }
  }

  return {
    user,
    softwares,
    credentials,
    update,
    loading,
    updateloading,
    uploadImageProfile,
    validateInput,
    reload,
    updateOnlyPin,
  }
}

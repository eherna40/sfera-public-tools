import { useLazyQuery, useMutation } from '@apollo/client'
// import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  CREATE_USER,
  DELETE_USER,
  EXISTING_EMPLOYEE,
  GET_LISTING,
  GET_SOFTWARE_ROLES,
  GET_USER,
  UPDATE_USER,
  UPDATE_USER_FIRST_TIME,
  INVITE_USERS,
  NOTIFICATION_SMS,
} from '../../api/employee'
import {
  actionDeleteUserSuccess,
  actionLoginUserFailed,
  actionSetToken,
  actionUpdateUser,
} from '../../redux/actions/user'
import { useLogin } from '../Login/useLogin'
import useFlashMessage from '../useFlashMessage'
import { useGql } from '../useGql'

export const useEmployee = (idEmployee, hasSoftwares, firstTme) => {
  const { onLogin, loading: loadinguseLogin, onFirtsLogout } = useLogin()
  const dispatcher = useDispatch()
  const { showMessage } = useFlashMessage()
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState({})
  const [tokentemp, settokentemp] = useState()
  const [firstlogin, setfirstlogin] = useState({})
  const { getError, getErrorValidation } = useGql()
  const farmacia = useSelector((state) => state.userReducer.farmacia)
  const { token } = useSelector((state) => state.userReducer)
  const [create, { loading: loadingCreate }] = useMutation(CREATE_USER, {
    errorPolicy: 'all',
  })
  // const [uploadImage] = useMutation(UPLOAD_IMAGE)
  const [update, { loading: loadingUpdate }] = useMutation(UPDATE_USER, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      if (data) {
        const { actualizarUsuario } = data
        dispatch(actionUpdateUser(actualizarUsuario))
      }
    },
  })
  const [inviteusers, { loading: loadingInviteusers }] = useMutation(
    INVITE_USERS,
    {
      errorPolicy: 'all',
      onError: () => {},
    },
  )
  const [notificationsms] = useMutation(NOTIFICATION_SMS, {
    errorPolicy: 'all',
  })
  const [get, { update: updateListing }] = useMutation(GET_LISTING, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })
  const [validateInput, { loading: loadingValidation }] = useMutation(
    EXISTING_EMPLOYEE,
    {
      errorPolicy: 'all',
    },
  )
  const [remove, { loading: loadingDelete }] = useMutation(DELETE_USER, {
    errorPolicy: 'all',
  })
  const [getUser, { loading: loadignGetUser }] = useLazyQuery(GET_USER, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: ({ usuario }) => {
      const telefono =
        usuario.usuarioTelefono.length > 0
          ? usuario.usuarioTelefono[0].telefono
          : ''
      const user = {
        ...usuario,
        softwares: usuario.recursos,
      }
      user.usuarioTelefono = user.usuarioTelefono.shift()
      user.telefono = telefono.substring(2)
      delete user.recursos
      setProfile(user)
    },
  })
  const [
    getSoftwares,
    { data: softwares, loading: loadingSoftwares },
  ] = useLazyQuery(GET_SOFTWARE_ROLES)

  const uploadImageProfile = async (file, userID, tk) => {
    try {
      const formdata = new FormData()
      formdata.append(
        'operations',
        `{ "query": "mutation ($file: Upload!) { subirArchivoAvatarUsuario(id: ${userID},file: $file) { url url_miniatura url_250} }", "variables": { "file": null } }`,
      )
      formdata.append('map', '{ "0": ["variables.file"] }')
      formdata.append('0', file, `user_${userID}.png`)
      const myHeaders = new Headers()
      myHeaders.append('Authorization', `Bearer ${tk || token}`)
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }
      fetch(process.env.REACT_APP_URL_ENVIRONMENT, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          const {
            data: {
              subirArchivoAvatarUsuario: { url, url_miniatura, url_250 },
            },
          } = response
          dispatch(
            actionUpdateUser({
              avatar: { url, url_miniatura, url_250 },
              id: userID,
            }),
          )
        })

      return true
    } catch (err) {
      showMessage('alert', 'Error al actualizar usuario')
      return null
    }
  }
  const [updatefirsttime, { loading: loadingFirsttime }] = useMutation(
    UPDATE_USER_FIRST_TIME,
    {
      errorPolicy: 'all',
    },
  )

  useEffect(() => {
    if (idEmployee && !firstTme) {
      getUser({
        variables: {
          id: idEmployee,
        },
      })
    } else if (hasSoftwares && !firstTme) getSoftwares()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hasSoftwares && softwares && !idEmployee) {
      setProfile({
        softwares: softwares.listarRolesPublicos,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [softwares])

  useEffect(() => {
    if (
      loadingSoftwares ||
      loadingCreate ||
      loadignGetUser ||
      loadingUpdate ||
      loadingFirsttime ||
      loadingInviteusers ||
      loadinguseLogin ||
      submitting
    ) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    loadingSoftwares,
    loadingCreate,
    loadignGetUser,
    loadingUpdate,
    loadingFirsttime,
    loadingInviteusers,
    loadinguseLogin,
    submitting,
  ])

  const getEmployees = async (first, page) => {
    try {
      const { data } = await get({
        variables: {
          first,
          page,
          input: {
            where: {
              column: 'deleted_at',
              operator: 'IS_NULL',
            },
          },
        },
        fetchPolicy: 'no-cache',
      })
      if (data) {
        return {
          data: data.filtrarUsuariosPaginado.data,
          paginatorInfo: data.filtrarUsuariosPaginado.paginatorInfo,
        }
      }
      return {
        error: null,
      }
    } catch (err) {
      return {
        error: null,
        err,
      }
    }
  }

  const deleteEmployee = async (id) => {
    try {
      const { data, errors } = await remove({ variables: { id } })

      if (data.borrarUsuario) {
        dispatch(actionDeleteUserSuccess(data.borrarUsuario))
        return {
          success: true,
          data: data.borrarUsuario,
        }
      }
      return { success: false, error: getError(errors) }
    } catch (err) {
      return {
        success: false,
        error: err,
      }
    }
  }

  const updateEmployee = async (values) => {
    const { id, input } = values
    try {
      const { data, errors } = await update({
        variables: { id, input },
      })
      if (data.actualizarUsuario) {
        return {
          success: true,
          data: data.actualizarUsuario,
        }
      }
      return { success: false, error: getError(errors) }
    } catch (err) {
      return {
        success: false,
        error: err,
      }
    }
  }

  const updateEmployeeFirtsTime = async (values) => {
    const { input, avatar } = values
    if (input && input.telefono && input.telefono !== '') {
      input.usuarioTelefono = {
        create: [
          {
            nombre: 'telefono',
            telefono: `34${input.telefono}`,
            es_sms: true,
          },
        ],
      }
      delete input.telefono
    }
    delete input.telefono
    if (input && input.repeatPin) delete input.repeatPin

    try {
      const { data, errors } = await updatefirsttime({ variables: { input } })

      setSubmitting(false)
      if (errors) {
        showMessage(
          'alert',
          'Error al actualizar usuario',
          `${getError(errors) && getError(errors).message}`,
        )
        return false
      }
      if (data) {
        const {
          usuario,
          token_temporal: tkT,
        } = data.actualizarPerfilFarmaceuticoPrimerLogin
        if (tkT) settokentemp(tkT)
        try {
          if (avatar)
            uploadImageProfile(
              avatar.file,
              usuario.id,
              data.actualizarPerfilFarmaceuticoPrimerLogin.token,
            )
        } catch (err) {
          // eslint-disable-next-line no-console
          return null
        }

        dispatcher(
          actionSetToken(data.actualizarPerfilFarmaceuticoPrimerLogin.token),
        )
        setfirstlogin({
          ...input,
          codigo_farmacia:
            data.actualizarPerfilFarmaceuticoPrimerLogin.codigo_farmacia,
        })
        return true
      }
      return false
    } catch (err) {
      setSubmitting(false)
      setError({
        success: false,
        message: 'Error al intentar actualizar el usuario',
      })
      return false
    }
  }

  const onChangePermission = (idRecurso, idModulo, idRol) => {
    const foo = []
    profile.softwares.forEach((soft) => {
      const roles = []

      soft.roles.forEach((rol) => {
        const modules = []
        if (rol.id === idRol && rol.modulo) {
          rol.modulo.forEach((modulo) => {
            const resources = []
            if (modulo.id === idModulo) {
              modulo.recursos.forEach((recurso) => {
                resources.push({
                  ...recurso,
                  autorizar:
                    recurso.id === idRecurso
                      ? !recurso.autorizar
                      : recurso.autorizar,
                })
              })
            } else {
              resources.push(...modulo.recursos)
            }
            if (!idRecurso && idModulo === modulo.id) {
              modules.push({
                ...modulo,
                recursos: resources,
                autorizar: true,
              })
            } else {
              modules.push({
                ...modulo,
                recursos: resources,
              })
            }
          })
        } else {
          modules.push(...rol.modulo)
        }

        roles.push({
          ...rol,
          modulo: modules,
        })
      })
      foo.push({
        ...soft,
        roles,
      })
    })

    setProfile({
      ...profile,
      softwares: foo,
    })
  }

  const handleGetSoftware = () => {
    getSoftwares()
  }

  const createUser = async (val = null) => {
    const values = val || profile
    const { picture } = values

    // if (values.telefono)
      if (!profile.usuarioTelefono) {
        values.usuarioTelefono = {
          create: [
            {
              nombre: 'personal',
              telefono: `34${values.telefono}`,
              es_sms: false,
            },
          ],
        }
      } else
        values.usuarioTelefono = {
          update: [
            {
              id: profile.usuarioTelefono.id,
              nombre: 'personal',
              telefono: `34${values.telefono}`,
              es_sms: false,
            },
          ],
        }
    // if (!values.telefono) delete values.usuarioTelefono
    delete values.telefono
    delete values.picture
    delete values.avatar
    delete values.nivel
    delete values.primer_login
    values.permisos = {
      almacen_id: 1,
      farmacia: {
        software: values.softwares,
        id: farmacia.id,
      },
    }
    const softws = []
    values.permisos.farmacia.software.forEach((s) => {
      const roles = []
      s.roles.forEach((r) => {
        roles.push({
          id: r.id,
          autorizar: r.autorizar,
          modulo: r.modulo,
        })
      })
      softws.push({
        ...s,
        roles,
      })
    })
    values.permisos.farmacia.software = softws
    delete values.softwares
    delete values.usuarioRol
    if (values.email === '') {
      delete values.email
    }
    if (values.dni === '') {
      delete values.dni
    }
    const rolid = softws[0].roles.find((i) => i.autorizar)
    if (values.dni === '') {
      delete values.dni
    }
    if (!values.id) {
      delete values.id
      // values.rol_id:
      const { errors, data } = await create({
        variables: {
          input: values,
          rol_id: Number(rolid.id),
        },
      })
      if (errors) {
        return false
      }
      if (picture.file) {
        uploadImageProfile(picture.file, data.crearUsuario.id)
      }
      return true
    }

    const { id } = values
    delete values.id
    if (values.pin === '') delete values.pin
    // values.rol_id:
    if (picture.delete) {
      values.borrar_avatar = true
    }
    delete values.rol
    const { errors } = await update({
      variables: {
        input: values,
        id,
        rol_id: Number(rolid.id),
      },
    })
    if (errors) {
      setError(getError(errors))
      return false
    }
    if (picture.file) values.avatar = await uploadImageProfile(picture.file, id)
    return true
  }

  const validateData = async (value, key) => {
    if (profile.id && profile[key] === value) {
      return true
    }

    const input = {
      [key]: value,
    }
    const { errors } = await validateInput({
      variables: { input },
    })
    if (errors) {
      return getErrorValidation(errors)
    }
    return true
  }

  const onInviteEmployee = async (event) => {
    setError(null)
    if (event.length > 0) {
      const usuarios = event.map((i) => {
        const n = i.find((j) => j.id === 1).data
        const e = i.find((j) => j.id === 2).data
        const t = i.find((j) => j.id === 3).data
        const r = i.find((j) => j.id === 4).rol_id

        if (e === 'no asignado' || !e) {
          return {
            nombre: n,
            usuarioTelefono: {
              create: [
                {
                  nombre: 'telefono',
                  telefono: t,
                  es_sms: true,
                },
              ],
            },
            rol_id: r,
          }
        }
        return {
          nombre: n,
          email: e,
          usuarioTelefono: {
            create: [
              {
                nombre: 'telefono',
                telefono: t,
                es_sms: true,
              },
            ],
          },
          rol_id: r,
        }
        // return {
        //   nombre: i.find((j) => j.id === 1).data,
        //   email: i.find((j) => j.id === 2).data,
        //   usuarioTelefono: {
        //     create: [
        //       {
        //         nombre: 'telefono',
        //         telefono: i.find((j) => j.id === 3).data,
        //         es_sms: true,
        //       },
        //     ],
        //   },
        //   rol_id: i.find((j) => j.id === 4).rol_id,
        // }
      })
      // input.rol_id = e.find((j) => j.id === 1).data
      if (!tokentemp) {
        showMessage(
          'alert',
          'Error al invitar usuarios',
          `El token temporal esta indefinido`,
        )
        return false
      }
      const { errors } = await inviteusers({
        variables: { input: { usuarios, token_temporal: tokentemp } },
      })
      if (errors) {
        showMessage(
          'alert',
          'Error al invitar usuarios',
          `${getError(errors) && getError(errors).message}`,
        )
        return false
      }
      return true
    }
    return false
  }

  const onNotifications = async () => {
    const { errors } = await notificationsms({
      variables: { token_temporal: tokentemp },
    })
    if (errors) {
      showMessage(
        'alert',
        'Error al invitar usuarios',
        `${getError(errors) && getError(errors).message}`,
      )
      return false
    }
    return true
  }

  const onInitSession = async () => {
    // console.log({ codigo: firstlogin.codigo_farmacia, identificador: firstlogin.nickname, pin: `${firstlogin.pin}` })
    const response = await onLogin(
      {
        codigo: firstlogin.codigo_farmacia,
        identificador: firstlogin.nickname,
        pin: `${firstlogin.pin}`,
      },
      true,
    )
    if (response && !response.success) {
      // showMessage(
      //   'alert',
      //   'Error al iniciar seccion',
      //   'intentarlo de nuevo en esta página',
      // )
      return false
    }
    return response && true
  }

  const onInitSessionFail = () => dispatcher(actionLoginUserFailed(true))

  const onFinish = () => history.push('/')

  return {
    uploadImageProfile,
    getEmployees,
    deleteEmployee,
    loadingDelete,
    handleGetSoftware,
    loading,
    setProfile,
    profile,
    onChangePermission,
    createUser,
    validateData,
    loadingValidation,
    loadingCreate,
    updateEmployee,
    updateEmployeeFirtsTime,
    loadingUpdate,
    error,
    updateListing,
    onInitSession,
    onInitSessionFail,
    onInviteEmployee,
    onNotifications,
    onFirtsLogout,
    setSubmitting,
    submitting,
    onFinish,
  }
}

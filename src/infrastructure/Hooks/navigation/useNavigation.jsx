import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { uuid } from 'uuidv4'
import { GET_SESSION } from '../../api/login'
import { UPDATE_SESSION } from '../../api/navigation'
import {
  actionDelete,
  actionPush,
  actionToggle,
  // actionSetSession,
} from '../../redux/actions/navigation'
import { actionSelectSoftware } from '../../redux/actions/software'

export const useNavigation = () => {
  const stack = useSelector((state) => state.navigationReducer.stack)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.usuario)
  const software = useSelector((state) => state.softwareReducer.software)

  const [updateSession] = useMutation(UPDATE_SESSION, {
    errorPolicy: 'all',
  })
  const [getSession] = useMutation(GET_SESSION, {
    errorPolicy: 'all',
  })

  const updatesession = (input) => {
    const session = input.filter((i) => i.key && Number(i.key) !== -1)
    updateSession({
      variables: { input: { sesion: JSON.stringify(session) } },
    })
  }

  // funcion principal para poder agregar nuevos tabs
  // Usamos codigos especificos para aquellas ventanas que son multitabs
  // 333 para articulos
  const push = async (item, params = {}) => {
    try {
      item.params = params
      if (item.multiTab) item.multiTab = [params]
      // verificamos si el tab esta duplicado, si esta duplicado ponemos el foco alli
      const duplicate = stack.find((i) => i.id === item.id)
      if (duplicate) {
        const temporal = stack.filter((i) => {
          if (i.key === duplicate.key) {
            i.active = true
            i.params = params
            if (i.multiTab) i.multiTab = [params, ...i.multiTab]
            // if (i.multiparams) i.multiparams = [params, ...i.multiparams]
          } else {
            i.active = false
          }
          return i
        })
        dispatch(actionPush(temporal))
        return true
      }
      const link = {
        ...item,
        key: item.key || uuid(),
        active: true,
        warehouse: user.almacenLogueado,
      }
      Object.preventExtensions(link)
      const temporal = stack.filter((i) => {
        const nav = i
        nav.active = false
        return nav
      })
      temporal.push(link)
      updatesession(temporal)
      dispatch(actionPush(temporal))

      return true
    } catch (err) {
      return false
    }
  }

  const setParamsMultitab = (item, id) => {
    const foo = stack.filter((i) => {
      i.active = false
      if (i.id === id) {
        i.params = item
        i.active = true
      }
      return i
    })
    updatesession(foo)
    dispatch(actionPush(foo))
  }

  const getActive = () => {
    const active = stack.find((i) => i.active)
    return active
  }

  const remove = (key) => {
    let index = 0
    let sesion = stack.filter((i, idx) => {
      if (i.key === key) {
        index = idx
        return null
      }
      return i
    })
    const active = getActive()
    if (key === active.key) {
      if (sesion.length > 0 && key === active.key) {
        sesion[index === 0 ? 0 : index - 1].active = true
      }
    }
    updatesession(sesion)
    // dispatch(actionDelete(sesion))

    if (sesion && sesion.length === 0) {
      if (software && software.children && software.children.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        let item = software.children[0]
        if (item.children && item.children.length > 0) {
          // eslint-disable-next-line prefer-destructuring

          item = item.children[0]
        }
        item = {
          ...item,
          active: true,
          warehouse: user.almacenLogueado,
        }

        sesion = [item]
      }
    }
    sesion.forEach(
      (item) =>
        item.active &&
        dispatch(actionSelectSoftware(item.software || {})),
    )
    dispatch(actionDelete(sesion))
  }


  //cuando cliclamos una pestaña
  const toggle = (key) => {
    let item = {}
    const sesion = stack.filter((i) => {
      if (i.key === key) {
        i.active = true
        item = i
      } else {
        i.active = false
      }
      return i
    })
    // console.log(item)
    dispatch(actionToggle(sesion))
    dispatch(actionSelectSoftware(item.software || {}))
    updatesession(sesion)
  }

  const getUserSession = async () => {
    const { data } = await getSession()
    const defaulttap = {
      componente: 'softwares',
      nombre: '',
      key: '-1',
      warehouse: { color: '#EEE' },
      active: true,
    }
    if (user.primer_login) {
      dispatch(
        actionPush([
          { ...defaulttap, active: false },
          {
            componente: 'perfil_usuario',
            nombre: 'Perfil de usuario',
            key: uuid(),
            active: true,
            warehouse: user.almacenLogueado,
          },
        ]),
      )
      return
    }

    if (data && data.obtenerSesion) {
      const {
        obtenerSesion: { sesion },
      } = data
      const session = JSON.parse(sesion)
      if (session.length === 0) dispatch(actionPush([defaulttap]))
      else if (session.length > 0) {
        const active = session.find((i) => i.active)
        session.unshift({ ...defaulttap, active: !active })
        dispatch(actionPush(session))
      }
      return
    }

    if (data && !data.obtenerSesion) {
      push({
        componente: 'softwares',
        nombre: '',
        key: '-1',
        warehouse: { color: '#000' },
      })
    }
  }

  const removeParamsMultitab = (item, id) => {
    const foo = stack.filter((i) => {
      if (i.id === id) {
        i.multiTab = i.multiTab.filter((param) => param.id !== item.id)
        i.params = i.multiTab[0]
      }
      return i
    })
    updatesession(foo)
    dispatch(actionPush(foo))
  }

  const reset = (items = [], isclosesession) => {
    dispatch(actionPush(items))
    if (isclosesession) {
      updatesession([])
    }
  }

  return {
    push,
    remove,
    toggle,
    stack,
    getUserSession,
    reset,
    setParamsMultitab,
    removeParamsMultitab,
  }
}

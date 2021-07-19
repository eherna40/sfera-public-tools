import { useDispatch, useSelector } from 'react-redux'
import { actionMultiuserAddUserSuccess } from '../../redux/actions/multiuser'

export const useUser = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.multiuserReducer.users)
  const activeUser = useSelector((state) => state.userReducer)
  const pharmacy = useSelector((state) => state.generalReducer.pharmacy)

  const addMultiuser = (user) => {
    const value = {
      token: user.token,
      nombre: user.usuario.nombre,
      id: user.usuario.id,
      active: true,
      rol: user.usuario.rol,
      avatar: user.usuario.avatar,
    }
    const temp = []
    users.forEach((i) => {
      const items = i
      if (items.id !== value.id) {
        items.active = false
        temp.push(items)
      }
      return false
    })
    temp.unshift(value)
    dispatch(actionMultiuserAddUserSuccess(temp))
    return true
  }

  const getInitials = (name) => {
    const splited = name.split(' ')
    if (splited.length > 1) {
      return splited[0][0] + splited[1][0]
    }

    return name[0] + name[1]
  }

  const getPharmacyParams = (attr) => pharmacy[attr]

  const removeMultiuser = (user) => {
    const temp = []
    users.forEach((i) => {
      const items = i
      if (items.id !== user.id) {
        items.active = false
        temp.push(items)
      }
      return false
    })
    dispatch(actionMultiuserAddUserSuccess(temp))
    return true
  }

  return {
    addMultiuser,
    users,
    getInitials,
    getPharmacyParams,
    removeMultiuser,
    activeUser,
  }
}

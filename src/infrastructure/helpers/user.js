import { store } from '../redux/store'
import { actionLogoutUser, actionSetToken } from '../redux/actions/user'

export const getToken = () => store.getState().userReducer.token
export const getRol = () => store.getState().userReducer.user.userRol
export const getUser = () => store.getState().userReducer.user
export const getPharmacy = () => store.getState().userReducer.farmacia
export const aggridTable = (id) => {
  if (id) return store.getState().aggridReducer.tables[id].columnDefs
  return null
}

export const getEmployeesPermits = (value) => {
  const {
    data: { id, usuarioRol },
  } = value
  if (getUser().id === id) {
    return true
  }
  if (getRol().id < usuarioRol.id) {
    return true
  }
  return false
}

export const refreshToken = (token, pharmacy) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token}`)
  headers.append('Content-Type', 'application/json')
  const graphql = JSON.stringify({
    query: `mutation refresh { refresh (farmacia_id: ${pharmacy.id}) }`,
    operationName: 'refresh',
    variables: {},
  })
  return fetch(process.env.REACT_APP_URL_ENVIRONMENT, {
    method: 'POST',
    headers,
    body: graphql,
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((response) => {
      const { data: refresh, errors } = response

      if (!errors) {
        store.dispatch(actionSetToken(refresh.refresh))
      } else {
        const {
          extensions: { code },
        } = errors[0]
        throw code
      }
    })
}

export const removeToken = () => {
  store.dispatch(actionLogoutUser())
}

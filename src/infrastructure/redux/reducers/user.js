import {
  SET_TOKEN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  UPDATE_WAREHOUSES_SUCCESS,
  TURN_SESSION,
  UPDATE_USER_SUCCESS,
  UPDATE_PHARACY,
} from '../constants/user'

const initialState = {
  token: null,
  session: false,
  usuario: {},
  almacenes: [],
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...action.data,
        session: true,
      }

    case UPDATE_WAREHOUSES_SUCCESS: {
      return {
        ...state,
        almacenes: action.warehouse,
      }
    }

    case LOGIN_USER_FAILED:
      return !action.reset ? state : initialState

    case LOGOUT_USER:
      return initialState

    case TURN_SESSION:
      return {
        ...state,
        session: action.session,
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        usuario: {
          ...state.usuario,
          ...action.data,
        },
      }

    case UPDATE_PHARACY: {
      return {
        ...state,
        farmacia: {
          ...state.farmacia,
          ...action.farmacia,
        },
      }
    }

    default:
      return state
  }
}

export default userReducer

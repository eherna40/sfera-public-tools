import {
  MULTIUSER_ADD_USER,
  MULTIUSER_ADD_USER_SUCCESS,
  MULTIUSER_REMOVE_USER_SUCCESS,
  MULTIUSER_REMOVE_USER,
  MULTIUSER_UPDATE_SUCCESS,
} from '../constants/multiuser'

const initialState = {
  users: [],
}

const multiuserReducer = (state = initialState, action) => {
  switch (action.type) {
    case MULTIUSER_ADD_USER:
      return {
        ...state,
      }
    case MULTIUSER_ADD_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
      }
    case MULTIUSER_UPDATE_SUCCESS:
      return {
        ...state,
        users: action.data,
      }
    case MULTIUSER_REMOVE_USER:
      return {
        ...state,
      }
    case MULTIUSER_REMOVE_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
      }
    // case LOGOUT_USER:
    //   return {
    //     users: [],
    //   }
    default:
      return state
  }
}

export default multiuserReducer

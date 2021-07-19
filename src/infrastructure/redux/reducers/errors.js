import { SET_ERROR_GLOBAL, HIDE_ERRROR } from '../constants/errors'

const initialState = {
  error: false,
  message: '',
  category: '',
}

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_GLOBAL:
      return {
        error: true,
        message: action.message,
        category: action.category,
      }
    case HIDE_ERRROR:
      return {
        error: false,
        message: '',
        category: action.category,
      }
    default:
      return state
  }
}

export default errorsReducer

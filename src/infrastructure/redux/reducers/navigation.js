import {
  NAVIGATION_DELETE,
  NAVIGATION_TOGGLE,
  SET_SESSION,
  SET_SESSION_SUCCESS,
  CLEAN_NAVIGATION,
  NAVIGATION_PUSH_SUCCESS,
} from '../constants/navigations'

const initialState = {
  stack: [],
}
const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_NAVIGATION:
      return initialState

    case NAVIGATION_PUSH_SUCCESS:
      return {
        ...state,
        stack: action.stack,
      }

    case NAVIGATION_DELETE:
      return {
        ...state,
        stack: action.stack,
      }

    case NAVIGATION_TOGGLE:
      return {
        ...state,
        stack: action.stack,
      }

    case SET_SESSION:
      return initialState

    case SET_SESSION_SUCCESS:
      return {
        ...state,
        stack: action.session,
      }

    default:
      return state
  }
}

export default navigationReducer

import {
  GET_FAVORITES,
  GET_FAVORITES_SUCCESS,
  CLEAN_FAVORITES,
} from '../constants/favorites'

const initialState = {
  favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_FAVORITES:
      return initialState

    case GET_FAVORITES:
      return state

    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.favorites,
      }
    default:
      return state
  }
}

export default favoritesReducer

import {
  GET_FAVORITES,
  GET_FAVORITES_FAILED,
  GET_FAVORITES_SUCCESS,
} from '../constants/favorites'

export const actionFavorites = () => ({
  type: GET_FAVORITES,
})

export const actionFavoritesSucess = (favorites) => ({
  type: GET_FAVORITES_SUCCESS,
  favorites,
})

export const actionFavoritesFailed = () => ({
  type: GET_FAVORITES_FAILED,
})

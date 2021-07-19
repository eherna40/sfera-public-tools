import {
  SELECT_MENU,
  SELECT_MENU_ITEM,
  BACK_TO_MENU,
  OPEN_MENU,
  UPDATE_MENU,
  UPDATE_FAVS,
  SEARCH_DATA,
  GET_MENU,
  GET_MENU_SUCCES,
  GET_MENU_FAILED,
  ADD_FAVORITES,
  ADD_FAVORITES_SUCCES,
  ADD_FAVORITES_FAILED,
  GET_FAVORITES,
  GET_FAVORITES_SUCCES,
  GET_FAVORITES_FAILED,
  DEL_FAVORITES,
  DEL_FAVORITES_SUCCES,
  SEARCH_MENU,
  SEARCH_MENU_SUCCESS,
  SEARCH_MENU_FAILED,
  SEARCH_LOADING_RESOURCES,
  SEARCH_LOADING_RESOURCES_SUCCESS,
} from '../constants/menu'

export const actionSetSelectMenu = (selected) => ({
  type: SELECT_MENU,
  selected,
})
export const actionSetSelectMenuItem = (selected, id) => ({
  type: SELECT_MENU_ITEM,
  selected,
  id,
})
export const actionBackToMenu = () => ({ type: BACK_TO_MENU })

export const actionOpenMenu = (open) => ({ type: OPEN_MENU, open })
export const actionUpdateMenu = (menu) => ({ type: UPDATE_MENU, menu })
export const actionsUpdateFavs = (favoritos) => ({
  type: UPDATE_FAVS,
  favoritos,
})

export const actionSearchData = (data, isSearching) => ({
  type: SEARCH_DATA,
  data,
  isSearching,
})

export const actionGetMenu = (menu, idSoftware) => ({
  type: GET_MENU,
  menu,
  idSoftware,
})
export const actionGetMenuSucces = (menu, idSoftware) => ({
  type: GET_MENU_SUCCES,
  menu,
  idSoftware,
})
export const actionGetMenuFailed = () => ({ type: GET_MENU_FAILED })

export const actionAddFavorites = (menu) => ({
  type: ADD_FAVORITES,
  menu,
})
export const actionAddFavoritesSucces = (menu) => ({
  type: ADD_FAVORITES_SUCCES,
  menu,
})
export const actionAddFavoritesFailed = () => ({ type: ADD_FAVORITES_FAILED })

export const actionGetFavorite = (favorites) => ({
  type: GET_FAVORITES,
  favorites,
})
export const actionGetFavoriteSucces = (favorites) => ({
  type: GET_FAVORITES_SUCCES,
  favorites,
})
export const actionGetFavoriteFailed = () => ({
  type: GET_FAVORITES_FAILED,
})

export const actionDelFavorite = (favorites) => ({
  type: DEL_FAVORITES,
  favorites,
})
export const actionDeFavoriteSucces = (favorites) => ({
  type: DEL_FAVORITES_SUCCES,
  favorites,
})
export const actionDelFavoriteFailed = () => ({
  type: GET_FAVORITES_FAILED,
})

export const actionSearchMenu = () => ({
  type: SEARCH_MENU,
})

export const actionSearchLoadingResources = (loading) => ({
  type: SEARCH_LOADING_RESOURCES,
  loading,
})
export const actionSearchLoadingResourcesSuccess = (loading) => ({
  type: SEARCH_LOADING_RESOURCES_SUCCESS,
  loading,
})

export const actionSearchMenuSuccess = (search) => ({
  type: SEARCH_MENU_SUCCESS,
  search,
})
export const actionSearchMenuFailed = () => ({
  type: SEARCH_MENU_FAILED,
})

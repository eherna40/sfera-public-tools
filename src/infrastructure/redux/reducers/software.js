import {
  OPEN_SELECT_SOFTWARE,
  SEARCH_RESOURCES_SUCCESS,
  SELECT_SOFTWARE_SUCCESS,
  SET_SOFTWARES_SUCCESS,
  CLEAN_SOFTWARE,
} from '../constants/software'

const initialState = {
  open: false,
  software: {},
  softwares: [],
  searched: [],
}

const softwareReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_SOFTWARE:
      return initialState

    case OPEN_SELECT_SOFTWARE:
      return {
        ...state,
        open: !state.open,
      }

    case SELECT_SOFTWARE_SUCCESS:
      return {
        ...state,
        open: false,
        software: action.software,
      }
    case SET_SOFTWARES_SUCCESS:
      return {
        ...state,
        softwares: action.softwares,
      }

    case SEARCH_RESOURCES_SUCCESS:
      return {
        ...state,
        searched: action.searched,
      }

    default:
      return state
  }
}

export default softwareReducer

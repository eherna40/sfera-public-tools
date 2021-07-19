import { SET_CONFIGS, SET_THEME } from '../constants/config'

const initialState = {
  configurations: {
    color_corporativo: { value: null },
    logo_corporativo: { value: null },
  },
  theme: 'green',
}

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIGS:
      return {
        ...state,
        configurations: action.configurations,
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.color,
      }

    default:
      return state
  }
}

export default configReducer

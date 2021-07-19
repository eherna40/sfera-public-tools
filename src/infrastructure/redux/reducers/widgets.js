import { GET_WIDGETS_SUCCESS, SET_WIDGET_SUCCESS } from '../constants/widgets'

const initialState = {
  widgets: [],
  userWidgets: [],
}

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WIDGETS_SUCCESS:
      return {
        ...state,
        widgets: action.widgets,
      }

    case SET_WIDGET_SUCCESS:
      return {
        ...state,
        userWidgets: action.userWidgets,
      }

    default:
      return state
  }
}

export default widgetsReducer

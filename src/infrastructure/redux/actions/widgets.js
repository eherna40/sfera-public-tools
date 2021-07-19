import { GET_WIDGETS_SUCCESS, SET_WIDGET_SUCCESS } from '../constants/widgets'

export const actionGetWidgetsSuccess = (widgets) => ({
  type: GET_WIDGETS_SUCCESS,
  widgets,
})
export const actionSetWidgetSuccess = (userWidgets) => ({
  type: SET_WIDGET_SUCCESS,
  userWidgets,
})

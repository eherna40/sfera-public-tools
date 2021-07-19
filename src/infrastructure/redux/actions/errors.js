import { SET_ERROR_GLOBAL, HIDE_ERRROR } from '../constants/errors'

export const actionSetErrorsGlobal = (error, message, category) => ({
  type: SET_ERROR_GLOBAL,
  error,
  message,
  category,
})
export const actionHiddeError = () => ({ type: HIDE_ERRROR })

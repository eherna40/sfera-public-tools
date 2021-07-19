import { CREATE_ROW_DATA, ADD_ROW, DELETE_ROW } from '../constants/tpv'

export const actionCreacteRowData = () => ({ type: CREATE_ROW_DATA })
export const actionAddRow = (row) => ({ type: ADD_ROW, row })
export const actionDeleteRow = () => ({ type: DELETE_ROW })

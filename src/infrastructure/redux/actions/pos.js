import {
  CREATE_CART,
  CREATE_CART_SUCCESS,
  CREATE_NEW_CART,
  CREATE_NEW_CART_SUCCESS,
  DELETE_LINE,
  DELETE_LINE_SUCCESS,
  SET_CASHDESK,
  SET_CLIENT_BALANCE,
  SET_CLIENT_TPV,
  SET_CLIENT_TPV_SUCCESS,
  SET_ERECETA_CODE,
  SET_MODAL_ERECETA,
} from '../constants/pos'

export const actionCreateCart = (cart) => ({ type: CREATE_CART, cart })
export const actionCreateCartSuccess = (cart) => ({
  type: CREATE_CART_SUCCESS,
  cart,
})

export const actionSetNewCart = (cart) => ({ type: CREATE_NEW_CART, cart })
export const actionSetNewCartSuccess = () => ({
  type: CREATE_NEW_CART_SUCCESS,
})

export const actionDeleteLine = (cart) => ({ type: DELETE_LINE, cart })
export const actionDeleteLineSuccess = (cart) => ({
  type: DELETE_LINE_SUCCESS,
  cart,
})

export const actionSetClientTpv = (client) => ({
  type: SET_CLIENT_TPV,
  client,
})

export const actionSetClientTpvSuccess = (client) => ({
  type: SET_CLIENT_TPV_SUCCESS,
  client,
})

export const actionSetModalEreceta = (value) => ({
  type: SET_MODAL_ERECETA,
  value,
})

export const actionSetErecetaCode = (barcode) => ({
  type: SET_ERECETA_CODE,
  barcode,
})

export const actionSetCashDesk = (cashDesk) => ({
  type: SET_CASHDESK,
  cashDesk,
})

export const actionSetClientBalance = (balance, credit = null) => ({
  type: SET_CLIENT_BALANCE,
  balance,
  credit,
})

import {
  CREATE_CART_SUCCESS,
  CREATE_NEW_CART_SUCCESS,
  DELETE_LINE_SUCCESS,
  SET_CASHDESK,
  SET_CLIENT_BALANCE,
  SET_CLIENT_TPV,
  SET_ERECETA_CODE,
  SET_MODAL_ERECETA,
} from '../constants/pos'

const initialState = {
  cart: {
    carritoLinea: [{}],
  },
  cash_desk: {},
  client: {},
  ereceta: {
    modal: false,
  },
}

const posReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART_SUCCESS:
      return {
        ...state,
        cart: action.cart,
      }

    case CREATE_NEW_CART_SUCCESS:
      return {
        ...state,
        cart: {
          carritoLinea: [{}],
        },
      }

    case DELETE_LINE_SUCCESS:
      return {
        ...state,
        cart: action.cart,
      }

    case SET_CLIENT_TPV:
      return {
        ...state,
        client: action.client,
      }

    case SET_MODAL_ERECETA:
      return {
        ...state,
        ereceta: {
          modal: action.value,
        },
      }

    case SET_ERECETA_CODE:
      return {
        ...state,
        cart: {
          ...state.cart,
          erecetaCode: action.barcode,
        },
      }

    case SET_CASHDESK:
      return {
        ...state,
        cash_desk: action.cash_desk,
      }

    case SET_CLIENT_BALANCE:
      return {
        ...state,
        client: {
          ...state.client,
          cliente_saldo: action.balance,
          cliente_importe_pendiente: action.credit,
        },
      }

    default:
      return state
  }
}

export default posReducer

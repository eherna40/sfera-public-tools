import { SET_CART_CURRENT } from '../constants/tpv'

const initialState = {
  idCart: null,
  idUser: null,
}

const tpvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_CURRENT:
      return action.cart

    default:
      return state
  }
}

export default tpvReducer

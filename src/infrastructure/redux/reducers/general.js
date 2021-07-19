import { SET_PHARMA_CODE } from '../constants/general'

const initialState = {
  pharmacy: {},
}

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHARMA_CODE: {
      return {
        ...state,
        pharmacy: {
          code: action.code || state.pharmacy,
        },
      }
    }

    default:
      return state
  }
}

export default generalReducer

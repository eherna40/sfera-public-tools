const {
  SET_COUNTER_DESK,
  SET_COUNTER_DESK_FAIL,
  SET_COUNTER_DESK_SUCCESS,
  CHECK_OPEN_CASH,
  CHECK_OPEN_CASH_SUCCESS,
  CHECK_OPEN_CASH_FAILED,
} = require('../constants/counterDesk')

const initialState = {
  loading: true,
  data: null,
  error: false,
}

const counterDeskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER_DESK:
      return { ...state, loading: true, error: false }
    case SET_COUNTER_DESK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.counterDesk,
      }
    case SET_COUNTER_DESK_FAIL:
      return { ...state, loading: false, error: action.error }

    case CHECK_OPEN_CASH:
      return { ...state, loading: true, error: false }

    case CHECK_OPEN_CASH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...state.data,
          open: action.open,
        },
      }

    case CHECK_OPEN_CASH_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          ...state.data,
          open: false,
        },
      }

    default:
      return state
  }
}

export default counterDeskReducer

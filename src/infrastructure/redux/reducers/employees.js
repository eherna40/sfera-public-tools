import { OPEN_MODAL_EMPLOYEE } from '../constants/employees'

const initialState = {
  loading: true,
  error: false,
  input: {
    nombre: '',
  },
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_EMPLOYEE:
      return {
        ...state,
        token: action.token,
      }

    default:
      return state
  }
}

export default employeesReducer

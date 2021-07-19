import {
  SET_WORKSTATION,
  SET_WORKSTATION_SUCCESS,
  SET_WORKSTATION_FAILED,
  CLOSE_WORKSTATION,
  OPEN_WORKSTATION,
  OPEN_WORKSTATION_SUCCESS,
  OPEN_WORKSTATION_FAILED,
} from '../constants/workstation'

const initialState = {
  loading: false,
  error: false,
  workstation: {},
}

const workstationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKSTATION:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case SET_WORKSTATION_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        workstation: action.workstation,
      }
    case SET_WORKSTATION_FAILED:
      return {
        error: true,
        loading: false,
      }

    case CLOSE_WORKSTATION:
      return {
        ...state,
        workstation: {
          ...state.workstation,
          isOpen: false,
        },
      }

    case OPEN_WORKSTATION:
      return {
        ...state,
        loading: true,
        error: false,
        workstation: {
          ...state.workstation,
          isOpen: false,
        },
      }

    case OPEN_WORKSTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        workstation: {
          ...state.workstation,
          isOpen: true,
        },
      }

    case OPEN_WORKSTATION_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        workstation: {
          ...state.workstation,
          isOpen: false,
        },
      }

    default:
      return state
  }
}

export default workstationReducer

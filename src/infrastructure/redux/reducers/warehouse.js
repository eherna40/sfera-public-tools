import {
  GET_WAREHOUSES,
  GET_WAREHOUSES_FAILED,
  GET_WAREHOUSES_SUCCESS,
  SET_WAREHOUSE,
  SET_WAREHOUSE_FAILED,
  SET_WAREHOUSE_SUCCESS,
} from '../constants/warehouse'

const initialState = {
  loading: false,
  error: false,
  warehouses: [],
  activeWarehouse: {},
}

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WAREHOUSES:
      return {
        ...state,
        error: false,
        loading: true,
        warehouse: [],
      }
    case GET_WAREHOUSES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        warehouses: action.warehouses,
      }
    case GET_WAREHOUSES_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case SET_WAREHOUSE:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case SET_WAREHOUSE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        activeWarehouse: action.activeWarehouses,
      }
    case SET_WAREHOUSE_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }

    default:
      return state
  }
}

export default warehouseReducer

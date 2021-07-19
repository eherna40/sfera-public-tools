import {
  SET_WAREHOUSE,
  SET_WAREHOUSE_FAILED,
  SET_WAREHOUSE_SUCCESS,
  GET_WAREHOUSES,
  GET_WAREHOUSES_FAILED,
  GET_WAREHOUSES_SUCCESS,
} from '../constants/warehouse'

export const actionGetWarehouses = (warehouses) => ({
  type: GET_WAREHOUSES,
  warehouses,
})
export const actionGetWarehousesSuccess = (warehouses) => ({
  type: GET_WAREHOUSES_SUCCESS,
  warehouses,
})
export const actionGetWarehousesFailed = () => ({
  type: GET_WAREHOUSES_FAILED,
})

export const actionSetWarehouse = (activeWarehouses) => ({
  type: SET_WAREHOUSE,
  activeWarehouses,
})
export const actionSetWarehouseSuccess = (activeWarehouses) => ({
  type: SET_WAREHOUSE_SUCCESS,
  activeWarehouses,
})
export const actionSetWarehouseFailed = () => ({
  type: SET_WAREHOUSE_FAILED,
})

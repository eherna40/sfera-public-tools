import { DELETE_USER } from '../../api/employee'
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_WAREHOUSES,
  UPDATE_WAREHOUSES_SUCCESS,
  UPDATE_WAREHOUSES_FAILED,
  TURN_SESSION,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  SET_TOKEN,
  UPDATE_PHARACY,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from '../constants/user'

export const actionLoginUser = (code) => ({
  type: LOGIN_USER,
  code,
})

export const actionSetToken = (token) => ({
  type: SET_TOKEN,
  token,
})
export const actionLoginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  data,
})

export const actionLoginUserFailed = (reset = false) => ({
  type: LOGIN_USER_FAILED,
  reset,
})

export const actionLogoutUser = () => ({
  type: LOGOUT_USER,
})

export const actionUpdateUser = (data, multiuser = true) => ({
  type: UPDATE_USER,
  data,
  multiuser,
})

export const actionUpdateUserSuccess = (data) => ({
  type: UPDATE_USER_SUCCESS,
  data,
})
export const actionUpdateUserFailed = () => ({
  type: UPDATE_USER_FAILED,
})

export const actionUpdateWarehouses = (code) => ({
  type: UPDATE_WAREHOUSES,
  code,
})
export const actionUpdateWarehousesSuccess = (warehouse) => ({
  type: UPDATE_WAREHOUSES_SUCCESS,
  warehouse,
})

export const actionUpdateWarehousesFailed = () => ({
  type: UPDATE_WAREHOUSES_FAILED,
})

export const actionSessionOff = (session) => ({
  type: TURN_SESSION,
  session,
})

export const actionUpdatePharmacy = (farmacia) => ({
  type: UPDATE_PHARACY,
  farmacia,
})

export const actionDeleteUser = (user) => ({
  type: DELETE_USER,
  user,
})

export const actionDeleteUserSuccess = (user) => ({
  type: DELETE_USER_SUCCESS,
  user,
})

export const actionDeleteUserFailed = (user) => ({
  type: DELETE_USER_FAILED,
  user,
})

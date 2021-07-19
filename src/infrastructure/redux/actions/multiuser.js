import {
  MULTIUSER_ADD_USER,
  MULTIUSER_ADD_USER_SUCCESS,
  MULTIUSER_REMOVE_USER,
  MULTIUSER_REMOVE_USER_SUCCESS,
  MULTIUSER_UPDATE,
  MULTIUSER_UPDATE_FAILED,
  MULTIUSER_UPDATE_SUCCESS,
} from '../constants/multiuser'

export const actionMultiuserAddUser = () => ({
  type: MULTIUSER_ADD_USER,
})
export const actionMultiuserAddUserSuccess = (users) => ({
  type: MULTIUSER_ADD_USER_SUCCESS,
  users,
})
export const actionMultiuserUpdate = (users) => ({
  type: MULTIUSER_UPDATE,
  users,
})

export const actionMultiuserUpdateFailed = (data) => ({
  type: MULTIUSER_UPDATE_FAILED,
  data,
})

export const actionMultiuserUpdateSuccess = (data) => ({
  type: MULTIUSER_UPDATE_SUCCESS,
  data,
})
export const actionMultiuserRemoveUser = (userId) => ({
  type: MULTIUSER_REMOVE_USER,
  userId,
})
export const actionMultiuserRemoveUserSuccess = (users) => ({
  type: MULTIUSER_REMOVE_USER_SUCCESS,
  users,
})

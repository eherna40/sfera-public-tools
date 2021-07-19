import {
  SET_WORKSTATION,
  SET_WORKSTATION_SUCCESS,
  SET_WORKSTATION_FAILED,
  CLOSE_WORKSTATION,
  CLOSE_WORKSTATION_FAILED,
  CLOSE_WORKSTATION_SUCCESS,
  OPEN_WORKSTATION,
  OPEN_WORKSTATION_SUCCESS,
  OPEN_WORKSTATION_FAILED,
} from '../constants/workstation'

export const actionSetWorkstation = (workstation) => ({
  type: SET_WORKSTATION,
  workstation,
})
export const actionSetWorkstationSuccess = (workstation) => ({
  type: SET_WORKSTATION_SUCCESS,
  workstation,
})
export const actionSetWorkstationFailed = () => ({
  type: SET_WORKSTATION_FAILED,
})

export const actionCloseWorkstation = () => ({
  type: CLOSE_WORKSTATION,
})

export const actionCloseWorkstationSuccess = () => ({
  type: CLOSE_WORKSTATION_SUCCESS,
})

export const actionCloseWorkstationFailed = () => ({
  type: CLOSE_WORKSTATION_FAILED,
})

export const actionOpenWorkstation = () => ({
  type: OPEN_WORKSTATION,
})

export const actionOpenWorkstationSuccess = () => ({
  type: OPEN_WORKSTATION_SUCCESS,
})

export const actionOpenWorkstationFailed = () => ({
  type: OPEN_WORKSTATION_FAILED,
})

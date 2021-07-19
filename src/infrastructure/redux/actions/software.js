import {
  OPEN_SELECT_SOFTWARE,
  SELECT_SOFTWARE,
  SELECT_SOFTWARE_FAILED,
  SELECT_SOFTWARE_SUCCESS,
  SET_SOFTWARES,
  SET_SOFTWARES_FAILED,
  SET_SOFTWARES_SUCCESS,
} from '../constants/software'

export const actionOpenSelectSoftware = () => ({
  type: OPEN_SELECT_SOFTWARE,
})

export const actionSelectSoftware = (software) => ({
  type: SELECT_SOFTWARE,
  software,
})

export const actionSelectSoftwareSuccess = (software) => ({
  type: SELECT_SOFTWARE_SUCCESS,
  software,
})

export const actionSelectSoftwareFailed = () => ({
  type: SELECT_SOFTWARE_FAILED,
})

export const actionSetSoftwares = () => ({
  type: SET_SOFTWARES,
})

export const actionSetSoftwaresSuccess = (softwares) => ({
  type: SET_SOFTWARES_SUCCESS,
  softwares,
})

export const actionSetSoftwaresFailed = () => ({
  type: SET_SOFTWARES_FAILED,
})

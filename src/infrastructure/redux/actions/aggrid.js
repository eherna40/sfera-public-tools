import {
  RESTORE_SETTINGS,
  RESTORE_SETTINGS_SUCCESS,
  RESTORE_SETTINGS_FAILED,
  UPDATE_SETTING,
  UPDATE_SETTING_SUCCESS,
  UPDATE_SETTING_FAILED,
  RESTORE_FILTERS,
  RESTORE_FILTERS_SUCCESS,
  RESTORE_FILTERS_FAILED,
  SAVE_FILTER,
  SAVE_FILTER_SUCCESS,
  SAVE_FILTER_FAILED,
  DELETE_FILTER,
  DELETE_FILTER_SUCCESS,
  DELETE_FILTER_FAILED,
  CURRENT_USER_PERMISSIONS,
} from '../constants/aggrid'

export const actionRestoreSettings = (settings) => ({
  type: RESTORE_SETTINGS,
  settings,
})

export const actionRestoreSettingsSuccess = (settings) => ({
  type: RESTORE_SETTINGS_SUCCESS,
  settings,
})

export const actionRestoreSettingsFailed = () => ({
  type: RESTORE_SETTINGS_FAILED,
})

export const actionUpdateSetting = (setting) => ({
  type: UPDATE_SETTING,
  setting,
})

export const actionUpdateSettingSuccess = (setting) => ({
  type: UPDATE_SETTING_SUCCESS,
  setting,
})

export const actionUpdateSettingFailed = () => ({
  type: UPDATE_SETTING_FAILED,
})

export const actionRestoreFilters = (filters) => ({
  type: RESTORE_FILTERS,
  filters,
})

export const actionRestoreFiltersSuccess = (filters) => ({
  type: RESTORE_FILTERS_SUCCESS,
  filters,
})

export const actionRestoreFiltersFailed = () => ({
  type: RESTORE_FILTERS_FAILED,
})

export const actionSaveFilter = (filter) => ({
  type: SAVE_FILTER,
  filter,
})

export const actionSaveFilterSuccess = (filter) => ({
  type: SAVE_FILTER_SUCCESS,
  filter,
})

export const actionSaveFilterFailed = () => ({
  type: SAVE_FILTER_FAILED,
})

export const actionDeleteFilter = (filter) => ({
  type: DELETE_FILTER,
  filter,
})

export const actionDeleteFilterSuccess = (filter) => ({
  type: DELETE_FILTER_SUCCESS,
  filter,
})

export const actionDeleteFilterFailed = () => ({
  type: DELETE_FILTER_FAILED,
})

export const actionSetCurrentUserPermissions = (currentUserPermissions) => ({
  type: CURRENT_USER_PERMISSIONS,
  currentUserPermissions,
})

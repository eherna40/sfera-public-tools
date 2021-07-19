import { SET_CONFIGS, SET_THEME } from '../constants/config'

export const actionSetConfigurations = (configurations) => ({
  type: SET_CONFIGS,
  configurations,
})

export const actionSetTheme = (color) => ({
  type: SET_THEME,
  color,
})

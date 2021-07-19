import {
  DELETE_FILTER_SUCCESS,
  RESTORE_SETTINGS_SUCCESS,
  SAVE_FILTER_SUCCESS,
  UPDATE_SETTING_SUCCESS,
  CLEAN_AGGRID,
  CURRENT_USER_PERMISSIONS,
} from '../constants/aggrid'

const initialState = {
  value: '',
  tables: {},
  currentUserPermissions: {},
}

const aggridReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_AGGRID: {
      return initialState
    }
    case CURRENT_USER_PERMISSIONS: {
      return {
        ...state,
        currentUserPermissions: {
          ...state.currentUserPermissions,
          ...action.currentUserPermissions,
        },
      }
    }
    case SAVE_FILTER_SUCCESS: {
      return {
        ...state,
        tables: {
          ...state.tables,
          [Object.keys(action.filter)[0]]: {
            ...action.filter[[Object.keys(action.filter)[0]]],
          },
        },
      }
    }
    case DELETE_FILTER_SUCCESS: {
      return {
        ...state,
        tables: {
          ...state.tables,
          [Object.keys(action.filter)[0]]: {
            ...action.filter[[Object.keys(action.filter)[0]]],
          },
        },
      }
    }
    case UPDATE_SETTING_SUCCESS: {
      return {
        ...state,
        tables: {
          ...state.tables,
          [Object.keys(action.setting)[0]]: {
            ...action.setting[[Object.keys(action.setting)[0]]],
          },
        },
      }
    }

    case RESTORE_SETTINGS_SUCCESS:
      return { ...action.settings, ...state.currentUserPermissions }
    // case RESTORE_TABLES_SUCCESS:
    //   return {
    //     ...state,
    //     tables: action.tables,
    //   }
    // case UPDATE_SESSION_TABLE_SUCCESS:
    //   return {
    //     ...state,
    //     tables: {
    //       [Object.keys(action.table)[0]]:
    //         action.table[Object.keys(action.table)[0]],
    //     },
    //   }
    // case RESTORE_FILTERS_SUCCESS:
    //   return {
    //     ...state,
    //     filters: action.filters,
    //   }
    // case UPDATE_FILTER_SUCCESS:
    //   return {
    //     ...state,
    //     filters: {
    //       [Object.keys(action.filter)[0]]:
    //         action.filter[Object.keys(action.filter)[0]],
    //     },
    //   }
    default:
      return state
  }
}

export default aggridReducer

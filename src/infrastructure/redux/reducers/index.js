import { combineReducers } from 'redux'
import userReducer from './user'
import generalReducer from './general'
import softwareReducer from './software'

import multiuserReducer from './multiuser'
// import menuReducer from './menu'
import favoritesReducer from './favorites'
import configReducer from './config'
// import tpvReducer from './tpv'
// import errorsReducer from './errors'
// // import warehouseReducer from './warehouse'
import aggridReducer from './aggrid'
// import widgetsReducer from './widgets'
// import posReducer from './pos'
// import workstationReducer from './workstation'
import navigationReducer from './navigation'
import flashMessageReducer from './flashMessage'
import counterDeskReducer from './counterDesk'

export default combineReducers({
  userReducer,
  generalReducer,
  softwareReducer,
  // menuReducer,
  configReducer,
  navigationReducer,
  favoritesReducer,
  // tpvReducer,
  // errorsReducer,
  // // warehouseReducer,
  aggridReducer,
  // widgetsReducer,
  // posReducer,
  multiuserReducer,
  // workstationReducer,
  flashMessageReducer,
  counterDeskReducer,
})

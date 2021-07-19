// import workstationReducer from '../reducers/workstation'

export const getTabs = (state) => state.tabsReducer
export const getAggrid = (state) => state.aggridReducer
export const getUser = (state) => state.userReducer
export const getUsers = (state) => state.multiuserReducer.users
export const getVisualizacionColores = (state) =>
  state.userReducer.user.visualizacionColores
export const getWorkstation = (state) => state.workstationReducer
export const getUsuario = (state) => state.userReducer.usuario
export const getSoftware = (state) => state.softwareReducer

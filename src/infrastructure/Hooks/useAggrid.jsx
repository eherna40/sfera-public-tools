import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import FilterStats from '../../components/Aggrid/ToolsPanels/FilterStats/FilterStats'
import ItemState from '../../components/Aggrid/FloatingFilters/ItemState/ItemState'
import {
  actionSaveFilterSuccess,
  actionDeleteFilterSuccess,
  actionRestoreSettingsSuccess,
  actionSetCurrentUserPermissions,
  // actionUpdateSettingSuccess,
} from '../redux/actions/aggrid'
import {
  USER_HAS_PERMISSION,
  CREATE_SETTINGS,
  DELETE_SETTINGS,
  TOGGLE_USER_PERMISSIONS,
  GET_TABLES,
  // UPDATE_SETTINGS,
} from '../api/tables'
import MenuOptions from '../../components/Aggrid/components/MenuOptions/MenuOptions'
import CellSearch from '../../components/Aggrid/components/CellSearch/CellSearch'
import StatusBarButton from '../../components/commons/StatusBarButton/StatusBarButton'

export const useAggrid = (id, bottomBar) => {
  const [error, setError] = useState(null)
  const [params, setparam] = useState(null)
  const [loading, setLoading] = useState(false)
  const hasPermissions = useSelector(
    (state) => state.aggridReducer.currentUserPermissions,
  )
  const config = useSelector((state) => state.aggridReducer.tables)
  const currentUser = useSelector((state) => state.userReducer.usuario)
  const dispatch = useDispatch()

  const [
    userHasPermission,
    { loading: userHasPermissionsLoading },
  ] = useMutation(USER_HAS_PERMISSION, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })
  const [
    togglePermissions,
    { loading: togglePermissionsLoading },
  ] = useMutation(TOGGLE_USER_PERMISSIONS, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })
  const [getTables] = useMutation(GET_TABLES, {
    errorPolicy: 'all',
  })
  const [createSettings] = useMutation(CREATE_SETTINGS, {
    errorPolicy: 'all',
  })
  const [deleteSettings] = useMutation(DELETE_SETTINGS, {
    errorPolicy: 'all',
  })
  // const [updateSettings, { loading: loadingupdatesettings }] = useMutation(
  //   UPDATE_SETTINGS,
  //   {
  //     errorPolicy: 'all',
  //   },
  // )

  useEffect(() => {
    if (
      params &&
      config &&
      config[id] &&
      config[id].settings &&
      config[id].settings.valor
    ) {
      params.columnApi.applyColumnState({
        state: config[id].settings.valor.columnDefs,
        applyOrder: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, params])

  // useEffect(() => {
  //   if (
  //     loadinggetTables ||
  //     loadingcreatesettings ||
  //     loadingdeletesettings
  //     // loadingupdatesettings
  //   )
  //     setloading(true)
  //   else setloading(false)
  // }, [
  //   loadinggetTables,
  //   loadingcreatesettings,
  //   loadingdeletesettings,
  //   // loadingupdatesettings,
  // ]) // eslint-disable-line react-hooks/exhaustive-deps

  const adminSidebar = {
    hiddenByDefault: true,
    toolPanels: [
      {
        id: 'filterStats',
        field: 'filterStats',
        labelDefault: 'Filtros',
        labelKey: 'filterStats',
        iconKey: 'custom-stats',
        toolPanel: 'customFilters',
        component: 'filterStats',
      },
      {
        id: 'columns',
        field: 'columns',
        labelDefault: 'Columnas',
        labelKey: 'columns',
        iconKey: null,
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
        },
      },

      // {
      //   id: 'exportOptions',
      //   labelDefault: 'Exportar',
      //   labelKey: 'exportOptions',
      //   iconKey: null,
      //   toolPanel: 'exportPanel',
      // },
    ],
  }

  const userSidebar = {
    hiddenByDefault: true,
    toolPanels: [
      {
        id: 'filterStats',
        field: 'filterStats',
        labelDefault: 'Filtros',
        labelKey: 'filterStats',
        iconKey: 'custom-stats',
        toolPanel: 'customFilters',
        component: 'filterStats',
      },
    ],
  }

  const frameworkComponents = {
    customFilters: FilterStats,
    // exportPanel: ExportOptions,
    agDateColumnFilter: ItemState,
    // customPinnedRowRenderer: PinnedRowRenderer,
    menuOptions: MenuOptions,
    statusBarButton: StatusBarButton,
    cellSearch: CellSearch,
  }

  // const components = {
  //   customFilters: FilterStats,
  //   // exportPanel: ExportOptions,
  //   agDateColumnFilter: ItemState,
  //   // customPinnedRowRenderer: PinnedRowRenderer,
  //   menuOptions: MenuOptions,
  //   statusBarButton: StatusBarButton,
  //   cellSearch: CellSearch,
  // }

  const statusBar = {
    statusPanels: [
      {
        statusPanel: 'statusBarButton',
        align: 'center',
        statusPanelParams: bottomBar,
      },
    ],
  }

  const saveFilterGroupState = async (
    namefilter,
    filterModel,
    rowGroupColumns,
    quicksearch,
  ) => {
    if (filterModel && rowGroupColumns) {
      // INPUT
      const i = {
        filters: [],
        groups: [],
        quicksearch: quicksearch || null,
      }

      // SAVE FILTER FIELD
      for (const f in filterModel) {
        const _filterType = Object.keys(filterModel[f]).find(
          (i) => i === 'operator',
        )
        if (_filterType !== undefined) {
          i.filters.push({
            key: f,
            filterType: filterModel[f].filterType,
            condition1_filter: filterModel[f].condition1.filter,
            condition1_filterType: filterModel[f].condition1.filterType,
            condition1_type: filterModel[f].condition1.type,
            condition2_filter: filterModel[f].condition2.filter,
            condition2_filterType: filterModel[f].condition2.filterType,
            condition2_type: filterModel[f].condition2.type,
            operator: filterModel[f].operator,
          })
        } else {
          i.filters.push({
            key: f,
            filterType: filterModel[f].filterType,
            condition1_filter: filterModel[f].filter,
            condition1_type: filterModel[f].type,
            condition1_filterType: null,
            condition2_filter: null,
            condition2_filterType: null,
            condition2_type: null,
            operator: null,
          })
        }
      }

      // SAVE GROUPS
      for (const g in rowGroupColumns) {
        i.groups.push({
          order: g,
          actualWidth: rowGroupColumns[g].actualWidth,
          left: rowGroupColumns[g].left,
          minWidth: rowGroupColumns[g].minWidth,
          colId: rowGroupColumns[g].colId,
          userProvidedColDef_field: rowGroupColumns[g].userProvidedColDef.field,
          userProvidedColDef_width: rowGroupColumns[g].userProvidedColDef.width,
          userProvidedColDef_headerName:
            rowGroupColumns[g].userProvidedColDef.headerName,
          userProvidedColDef_colId: rowGroupColumns[g].userProvidedColDef.colId,
        })
      }

      // SAVE FILTER
      const input = {
        nombre: namefilter,
        descripcion: namefilter,
        tipo: 'filtros',
        tabla: id,
        color: '#000',
        valor: JSON.stringify(i),
      }

      if (input) {
        const { data } = await createSettings({
          variables: { input },
        })

        const actionSave = { [id]: { filters: [], settings: {} } }
        if (Object.prototype.hasOwnProperty.call(config, id)) {
          actionSave[`${id}`].filters = config[`${id}`].filters

          actionSave[`${id}`].filters = config[`${id}`].filters
          actionSave[`${id}`].settings = config[`${id}`].settings
        }
        actionSave[`${id}`].filters.push({
          ...input,
          valor: i,
          id: data.crearUsuarioTablaConfiguracion.id,
        })
        dispatch(actionSaveFilterSuccess(actionSave))
      }
    }
  }

  const deleteFilterGroupState = async (input) => {
    if (hasPermissions) {
      const actionDelete = { [id]: { filters: [], settings: {} } }
      if (Object.prototype.hasOwnProperty.call(config, id)) {
        actionDelete[`${id}`].filters = config[`${id}`].filters.filter(
          (i) => i.id !== input,
        )
      }
      actionDelete[`${id}`].settings = config[`${id}`].settings
      await deleteSettings({
        variables: { id: input },
      })
      dispatch(actionDeleteFilterSuccess(actionDelete))
    }
  }

  const setFilterGroupState = (filter) => {
    // COLUMN FILTER STATE
    const config = filter.valor
    // FILTERS
    let filterModel = {}
    config.filters.map((i) => {
      if (i.operator === null) {
        filterModel = {
          ...filterModel,
          [i.key]: {
            type: i.condition1_type,
            filter: i.condition1_filter,
          },
        }
      } else {
        filterModel = {
          ...filterModel,
          [i.key]: {
            condition1: {
              filter: i.condition1_filter,
              filterType: i.condition1_filterType,
              type: i.condition1_type,
            },
            condition2: {
              filter: i.condition2_filter,
              filterType: i.condition2_filterType,
              type: i.condition2_type,
            },
            filterType: i.filterType,
            operator: i.operator,
          },
        }
      }
      return null
    })

    // GROUP ROW STATE
    const _rowGroup = []
    config.groups.map((j) => {
      _rowGroup.push({
        order: j.order,
        colId: j.colId,
      })
      return null
    })

    const sortRowGroup = _rowGroup.sort((a, b) => a.order - b.order)
    const rowGroup = sortRowGroup.map((i) => i.colId)
    return { rowGroup, filterModel, quicksearch: config.quicksearch }
  }

  const getSelectedRow = (params, multiple = false) => {
    // seleccionamos el multiple a true si queremos que nos retorne un array de filas seleccionadas si esta a false, retornara un objeto con una sola fila
    if (!multiple) {
      if (params && params.length > 0) {
        return params[0]
      }
    }
    return params
  }

  // const updateConfi = (reponse) => {
  //   const actionSave = { [reponse.tabla]: { filters: [], settings: {} } }
  //   if (Object.prototype.hasOwnProperty.call(config, reponse.tabla)) {
  //     actionSave[reponse.tabla].filters = config[reponse.tabla].filters
  //   }
  //   actionSave[reponse.tabla].settings = reponse
  //   // dispatch(actionUpdateSettingSuccess(actionSave))
  // }

  const updateColumnState = async (params) => {
    // const input = {
    //   nombre: `${id}-configuracion`,
    //   descripcion: `${id}-configuracion`,
    //   tipo: 'configuracion',
    //   tabla: id,
    //   color: '#000',
    //   valor: JSON.stringify({ columnDefs: params.columnApi.getColumnState() }),
    // }
    if (config[id] && config[id].settings && config[id].settings.id) {
      // UPDATE SETTINGS
      // const { settings } = config[id]
      // await updateSettings({
      //   variables: { id: settings.id, input },
      // }).then((reponse) => {
      //   const {
      //     data: {
      //       actualizarUsuarioTablaConfiguracion: { id },
      //     },
      //   } = reponse
      //   updateConfi({ ...input, id })
      // })
    } else {
      // CREATE SETTINGS
      // await createSettings({
      //   variables: { input },
      // }).then((reponse) => {
      //   const {
      //     data: {
      //       crearUsuarioTablaConfiguracion: { id },
      //     },
      //   } = reponse
      //   updateConfi({ ...input, id })
      // })
    }
  }

  const formatSettings = (data) => {
    try {
      const {
        data: { usuarioTablaConfiguracionesByTablas },
      } = data
      const settingsTables = {}
      usuarioTablaConfiguracionesByTablas.map((i) => {
        settingsTables[i.tabla] = { filters: [], settings: {} }
        if (i.configuraciones && i.configuraciones.filtros) {
          settingsTables[i.tabla].filters = i.configuraciones.filtros.map(
            (j) => {
              try {
                return {
                  id: j.id,
                  nombre: j.nombre,
                  tipo: j.tipo,
                  tabla: j.tabla,
                  color: j.color,
                  valor: JSON.parse(j.valor),
                }
              } catch (Exception) {
                return Exception
              }
            },
          )
        }

        if (
          i.configuraciones.configuracion &&
          i.configuraciones.configuracion.length > 0
        ) {
          settingsTables[i.tabla].settings = {
            id: i.configuraciones.configuracion[0].id,
            nombre: i.configuraciones.configuracion[0].nombre,
            tipo: i.configuraciones.configuracion[0].tipo,
            tabla: i.configuraciones.configuracion[0].tabla,
            color: i.configuraciones.configuracion[0].color,
            valor: JSON.parse(i.configuraciones.configuracion[0].valor),
          }
        }
        return false
      })
      return { tables: settingsTables }
    } catch (error) {
      return { tables: {} }
    }
  }

  const userHasPermissions = async () => {
    const { data } = await userHasPermission({
      variables: {
        tabla: id,
      },
    })
    if (data) {
      const { usuarioTienePermisoConfiguracion } = data

      dispatch(
        actionSetCurrentUserPermissions({
          [id]: usuarioTienePermisoConfiguracion,
        }),
      )
    }
  }

  const toggleGridPermissions = async (pin) => {
    const { errors } = await togglePermissions({
      variables: {
        input: {
          tabla: id,
          pin,
        },
      },
    })

    if (!errors) {
      await userHasPermissions()
    }
  }

  const getTablesSettings = async () => {
    try {
      const input = await getTables()
      dispatch(actionRestoreSettingsSuccess(formatSettings(input)))
    } catch (error) {}
  }

  const getFilters = (input) => {
    if (config[`${input}`] && config[`${input}`].filters) {
      return config[`${input}`].filters
    }
    return []
  }

  useEffect(() => {
    if (userHasPermissionsLoading || togglePermissionsLoading) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userHasPermissionsLoading || togglePermissionsLoading])

  return {
    adminSidebar,
    userSidebar,
    frameworkComponents,
    currentUser,
    hasPermissions: hasPermissions && hasPermissions[id],
    getFilters,
    loading,
    getSelectedRow,
    saveFilterGroupState,
    toggleGridPermissions,
    deleteFilterGroupState,
    userHasPermissions,
    setFilterGroupState,
    updateColumnState,
    getTablesSettings,
    error,
    setError,
    setparam,
    statusBar,
  }
}

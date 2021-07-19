import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import PropTypes from 'prop-types'
import { AllModules } from '@ag-grid-enterprise/all-modules'
import { columnTypes } from '../../infrastructure/Aggrid/columnType'
import { useAggrid } from '../../infrastructure/Hooks/useAggrid'
import 'ag-grid-enterprise'
import FilterButton from './FilterButton/FilterButton'
import IcLocked from '../commons/Icons/IcLocked'
import { Container, PadlockWrapper } from './styles'
import IcUnlock from '../commons/Icons/IcUnlock'
import UnlockModal from '../commons/UnlockModal/UnlockModal'
import SearchInput from '../commons/Form/SearchInput/SearchInput'
import './index.css'
import { LOCALES } from '../../infrastructure/Aggrid/locale/locales'

const serverSideRowBlockSize = 20
const types = {
  contains: 'LIKE',
  notContains: 'NEQ',
  starsWidth: '',
  endsWith: '',
  equals: 'EQ',
  notEqual: 'NEQ',
}

const buildValue = (value, filter) => {
  switch (filter) {
    case 'LIKE':
      return `%${value}%`

    default:
      return value
  }
}

const buildQuery = (filters) => {
  // funcion que se encarga de construor la query para bbdd
  let { filterModel } = filters
  const { rowGroupCols, groupKeys, sortModel } = filters
  const AND = []
  const relations = {}
  let groupBy = ''
  const orderBy = []
  sortModel.forEach((i) => {
    orderBy.push({
      field: i.colId,
      order: i.sort.toUpperCase(),
    })
  })

  // realizamos arreglos de agrupaciones
  // se usaran los parametros rowGroupCols y groupKey

  let numberCol = groupKeys.length > 0 ? groupKeys.length - 1 : 0
  if (rowGroupCols.length > 0) {
    if (groupKeys.length === rowGroupCols.length) {
      groupBy = ''
      filterModel = {
        ...filterModel,
        [rowGroupCols[numberCol].field]: {
          filter: groupKeys[groupKeys.length - 1],
          filterType: 'text',
          type: 'contains',
        },
      }
    } else {
      numberCol = groupKeys.length > 0 ? groupKeys.length - 1 : 0
      groupBy = rowGroupCols[numberCol].field
      // si el grupo seleccionado tiene un punto es que es una relacion y para la bbdd se envian diferente
      if (groupBy.includes('.')) {
        relations[groupBy.split('.')[0]] = {
          groupBy,
        }
        groupBy = ''
      }
    }
  }
  // valores que corresponden a los filtros de texto flotantes
  const values = Object.values(filterModel)
  Object.keys(filterModel).forEach((i, idx) => {
    const value = values[idx]
    let object = {}
    if (Object.keys(value).length > 3) {
      object = {
        column: i,
        operator: types[value.condition1.type],
        value: buildValue(
          value.condition2.filter,
          types[value.condition1.type],
        ),
        [value.operator]: [
          {
            column: i,
            operator: types[value.condition2.type],
            value: buildValue(
              value.condition2.filter,
              types[value.condition2.type],
            ),
          },
        ],
      }
      // si tiene punto es que es una relacion
    } else if (i.includes('.')) {
      const relation = i.split('.')
      relations[relation[0]] = {
        column: relation[1],
        operator: types[value.type],
        value: buildValue(value.filter, types[value.type]),
      }
    } else {
      // puede ser un filtro simple, sin comparaciones dentro del mismo filtro
      object = {
        column: i,
        operator: types[value.type],
        value: buildValue(value.filter, types[value.type]),
      }
    }
    AND.push(object)
  })
  return AND.length > 0
    ? { AND, relations, groupBy, orderBy }
    : { relations, groupBy, orderBy }
}

const createDatasource = async (server) => ({
  rowCount: null,
  getRows: async (params) => {
    // creamos la query para los filtros
    const where = buildQuery(params.request)
    const page = params.request.startRow / serverSideRowBlockSize + 1
    const { data, success, paginatorInfo } = await server.getData(
      server.func, // mutacion
      server.name, // nombre de la mutacion
      serverSideRowBlockSize, // numero de items
      where, // filtros
      page, // numero de page,
      params.columnApi.columnController.columnDefs,
    )
    let lastRow
    if (paginatorInfo && !paginatorInfo.hasMorePages) {
      lastRow = paginatorInfo.lastItem
    }
    if (paginatorInfo && paginatorInfo.count === 0) lastRow = 0
    if (success) {
      params.success({
        rowData: data,
        rowCount: lastRow,
      })
    } else {
      params.fail()
    }
  },
})

const Aggrid = ({
  id, // id de tabla para guardar configuraciones y filtros
  height, // tamaño 100% para full height o algun numero para establecer un tamaño
  onReady, // funcion que returna en caso de clientside un array de datos o en caso de serverSide un objeto con un mutacion y un nombre de mutacion
  rowModelType, // clientSide o serverSide
  columns, // columnas que va a tener la tabla
  onRowSelected, // accion cuando se selecciona una fila
  noRowsOverlayComponent, //nombre del componente de overlay que queremos sustituir
  customFrameworkComponents, //si queremos sustituir algum componente core de aggrid especifico
  rowSelection, // tipo de seleccion de la tabla
  options, // los tres puntotos que salen en los diseños de cada fila con sus opciones
  hideSidebar, // ocultar la  sidebar
  bottomBar, // si va a tener la barra de abajo
  onRowDoubleClicked, // accion cuando un fila en clicada dos veces
  searchBar, // objeto para activar la barra de busqueda, pasar el placeholder,
  rowGroupPanelShow, // si quieremos que el aggrid sea capaz de filtrar
  onCellKeyPress, // accion cuando las teclas son precionadas
  onCellEditingStopped, // accion cuando en una celda se ha finalizado de editar
  onCellEditingStarted, // accion cuando en una celda se ha empezado a editar
  onCellFocused, // accion cuando en una celda esta en focus
  onCellKeyDown, // accion cuando en tecla es pulsada
  defaultValue, // valor defecto para el search bar
  navigateToNextCell,
  searchBarAutoFocus, // force autofocus wiout default value,
  searchBarIcon, // tipo de icono de la barra de busqueda,
  searchBarOnClickAdd, // Accion al hacer click en el boton de add de la search bar
}) => {
  const { t, i18n } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [gridApi, setGridApi] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [externalValue, setexternalValue] = useState('')
  const externalInput = useRef(null)
  const {
    adminSidebar,
    userSidebar,
    frameworkComponents,
    toggleGridPermissions,
    userHasPermissions,
    updateColumnState,
    setparam,
    loading,
    hasPermissions,
    statusBar,
  } = useAggrid(id, bottomBar)

  const handleKeyDown = (event) => {
    const keCodes = [38, 40]
    if (!searchBar || !gridApi || !keCodes.includes(event.keyCode)) {
      return
    }
    const firstRow = gridApi.getDisplayedRowAtIndex(
      gridApi.getFirstDisplayedRow(),
    )
    if (
      (!gridApi.getCacheBlockState() ||
        !gridApi.getCacheBlockState()[0] ||
        gridApi.getCacheBlockState()[0].pageStatus === 'loading') &&
      externalInput
    ) {
      event.preventDefault()
      externalInput.current.focus()
      return
    }

    if (
      document.activeElement === externalInput.current &&
      event.keyCode === 40 &&
      firstRow
    ) {
      event.preventDefault()
      const {
        columnApi: {
          columnController: { columnDefs },
        },
      } = firstRow
      gridApi.setFocusedCell(
        gridApi.getFirstDisplayedRow(),
        columnDefs[1].colId || columnDefs[0].colId,
      )
      gridApi.forEachNode((node) => {
        if (
          node.rowIndex === gridApi.getFirstDisplayedRow() &&
          node &&
          node.data
        ) {
          node.setSelected(true)
        }
      })
    }
  }

  useEffect(() => {
    // console.log(externalValue, '-----')
    if (gridApi && rowModelType === 'clientSide') {
      gridApi.setQuickFilter(externalValue)
    }
    if (externalValue && gridApi) {
      gridApi.onFilterChanged()
    }
    // eslint-disable-next-line
  }, [externalValue])

  useEffect(() => {
    if (gridApi && rowModelType === 'clientSide') {
      gridApi.setQuickFilter(externalValue)
    }
    if (externalValue && gridApi) {
      gridApi.onFilterChanged()
    }
    // eslint-disable-next-line
  }, [externalValue])

  useEffect(() => {
    userHasPermissions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const executeMutation = async (
    func,
    name,
    firstEl,
    where,
    page,
    columnsBBDD,
  ) => {
    // mutacion de bbdd
    let input = {
      where: {
        AND: where.AND,
        OR: [],
        groupBy: where.groupBy,
      },
    }

    if (where.orderBy.length > 0) {
      input.where.orderBy = where.orderBy
    }
    columnsBBDD.forEach((i) => {
      if (i.field.includes('.')) {
        // const relation = i.field.split('.')
        // input[relation[0]] = {
        //   column: relation[1],
        //   operator: 'LIKE',
        //   value: `%${externalInput.current.value}%`,
        // }
      } else if (searchBar)
        input.where.OR.push({
          column: i.field,
          operator: 'LIKE',
          value: `%${externalInput.current.value}%`,
        })
    })

    // input.where.OR = [...input.where.AND, ...where.AND]

    if (where.relations) {
      input = {
        ...input,
        ...where.relations,
      }
    }

    try {
      const { data } = await func({
        variables: {
          first: firstEl,
          input,
          page,
        },
      })
      if (data && data[name]) {
        return {
          ...data[name],
          success: true,
        }
      }
      return {
        success: false,
      }
    } catch (error) {
      return {
        success: false,
      }
    }
  }
  const onGridReady = async (params) => {
    setGridApi(params.api)
    if (rowModelType === 'clientSide') {
      const data = await onReady(params)
      if (data) {
        // cogemos array de datos y lo insertamos en la tabla
        params.api.setRowData(data)
      }
    }
    if (rowModelType === 'serverSide') {
      // si es serverside viene la funcion de la mutacion y su nombre
      const { func, name } = await onReady(params)
      const dataSource = await createDatasource({
        getData: executeMutation,
        name,
        func,
      })
      params.api.setServerSideDatasource(dataSource)
    }
    setparam(params)
  }

  const onSelect = (params) => {
    const rows = params.api.getSelectedRows()
    let res = null
    if (rows) {
      res = rowSelection === 'single' ? rows[0] : rows
    }
    onRowSelected(res)
  }

  const handleUnlock = async (pinCode) => {
    setSidebarVisible(false)
    await toggleGridPermissions(pinCode)
    setShowModal(false)
  }

  const moveHeaderFocusUp = (previousHeader, headerRowCount, isUp, event) => {
    const previousColumn = previousHeader.column
    const lastRowIndex = previousHeader.headerRowIndex
    let nextRowIndex = isUp ? lastRowIndex - 1 : lastRowIndex + 1
    let nextColumn = null
    // parentColumn
    if (nextRowIndex === -1) {
      return previousHeader
    }
    if (nextRowIndex === headerRowCount) {
      nextRowIndex = -1
    }
    // let parentColumn = previousColumn.getParent()
    if (isUp && externalInput) {
      // All the funtion is the same with the diference that
      // instead of setting the focus  on other cell. the focus is set on the externalInput
      event.preventDefault()
      externalInput.current.focus()
      return null
    }
    nextColumn = previousColumn.children
      ? previousColumn.children[0]
      : previousColumn

    return {
      headerRowIndex: nextRowIndex,
      column: nextColumn,
    }
  }

  const navigateToNextHeader = (params) => {
    // this funtion is acopy from the folowing example
    // https://www.ag-grid.com/react-grid/keyboard-navigation/
    // this funtion use the funtion moveHeaderFocusUp. under the example the funtion have the name of moveHeaderFocusUpDown
    const nextHeader = params.nextHeaderPosition
    if (params.key !== 'ArrowDown' && params.key !== 'ArrowUp') {
      return nextHeader
    }
    const processedNextHeader = moveHeaderFocusUp(
      params.previousHeaderPosition,
      params.headerRowCount,
      params.key === 'ArrowUp',
      params.event,
    )
    return processedNextHeader === nextHeader ? null : processedNextHeader
  }

  return (
    <div id={id} onKeyDown={handleKeyDown} className="tw-h-full">
      {searchBar && (
        <SearchInput
          refInput={externalInput}
          className={`tw-mb-3 ${id}`}
          border
          onChange={(e) => setexternalValue(e)}
          icon={searchBarIcon || 'search'}
          onClickAdd={searchBarOnClickAdd}
          placeholder="Escanee o introduzca su búsqueda"
          defaultValue={defaultValue}
          autoFocus={!!defaultValue || searchBarAutoFocus}
        />
      )}

      <Container
        id="myGrid"
        height={height}
        searchBar={searchBar}
        className={`ag-theme-alpine ${id} tw-relative`}
      >
        {showModal && (
          <UnlockModal
            loading={loading}
            toggle={() => setShowModal(!showModal)}
            onUnlock={handleUnlock}
          />
        )}
        {!hideSidebar && (
          <FilterButton
            rowGroupPanelShow={rowGroupPanelShow === 'always'}
            onClick={() => {
              gridApi.setSideBarVisible(!gridApi.isSideBarVisible())
              gridApi.openToolPanel('filterStats')
              setSidebarVisible(!sidebarVisible)
            }}
            sidebarVisible={sidebarVisible}
          />
        )}

        {sidebarVisible && (
          <PadlockWrapper
            onClick={() => setShowModal(true)}
            style={{ width: '26px', height: '26px' }}
            className="padlock tw-absolute tw-z-10 tw-bottom-0 tw-right-0 tw-items-center tw-justify-center tw-cursor-pointer"
          >
            {hasPermissions ? <IcUnlock size={22} /> : <IcLocked size={21} />}
          </PadlockWrapper>
        )}

        <AgGridReact
          statusBar={bottomBar && statusBar}
          headerHeight={32}
          animateRows
          rowModelType={rowModelType}
          modules={AllModules}
          cacheBlockSize={serverSideRowBlockSize}
          localeText={LOCALES[i18n.language]}
          floatingFiltersHeight={36}
          rowHeight={32}
          gridOptions={{
            rowGroupPanelShow,
          }}
          sidebarVisible={sidebarVisible}
          options={options}
          onRowDoubleClicked={onRowDoubleClicked}
          onGridReady={onGridReady}
          columnTypes={columnTypes}
          rowSelection={rowSelection}
          pivotMode={false}
          sideBar={hasPermissions ? adminSidebar : userSidebar}
          frameworkComponents={{
            ...frameworkComponents,
            ...customFrameworkComponents,
          }}
          noRowsOverlayComponent={noRowsOverlayComponent}
          onRowSelected={onSelect}
          id={id}
          serverSideStoreType="partial"
          isExternalFilterPresent
          onDragStopped={updateColumnState}
          onColumnRowGroupChanged={updateColumnState}
          onColumnVisible={updateColumnState}
          onCellKeyPress={onCellKeyPress}
          onCellEditingStopped={onCellEditingStopped}
          onCellEditingStarted={onCellEditingStarted}
          onCellFocused={onCellFocused}
          onCellKeyDown={onCellKeyDown}
          navigateToNextCell={navigateToNextCell}
          externalInput={externalInput}
          hasPermissions={hasPermissions}
          navigateToNextHeader={navigateToNextHeader}
        >
          {columns.map((i, idx) => (
            <AgGridColumn
              key={idx}
              {...i}
              colId={i.field}
              headerName={t(`tables.${i.headerName}`)}
            />
          ))}
        </AgGridReact>
      </Container>
    </div>
  )
}

Aggrid.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  onReady: PropTypes.func,
  rowModelType: PropTypes.oneOf([
    'clientSide',
    'infinite',
    'viewport',
    'serverSide',
    'iofnet',
  ]),
  columns: PropTypes.arrayOf(PropTypes.object),
  sideBar: PropTypes.bool,
  onRowSelected: PropTypes.func,
  rowSelection: PropTypes.oneOf(['single', 'multiple']),
  onRowDoubleClicked: PropTypes.func,
  gridOptions: PropTypes.object,
  hasSidebar: PropTypes.bool,
  onClickPadlock: PropTypes.func,
  unlock: PropTypes.bool,
  bottomBar: PropTypes.object,
  searchBar: PropTypes.bool,
  rowGroupPanelShow: PropTypes.oneOf(['always', 'never', 'onlyWhenGrouping']),
  defaultValue: PropTypes.string,
  navigateToNextCell: PropTypes.func,
  searchBarAutoFocus: PropTypes.bool,
}

Aggrid.defaultProps = {
  rowModelType: 'serverSide',
  searchBar: null,
  columns: [],
  sideBar: true,
  onReady: () => null,
  onRowSelected: () => null,
  rowSelection: 'single',
  onRowDoubleClicked: null,
  gridOptions: {},
  hasSidebar: true,
  onClickPadlock: () => null,
  unlock: false,
  bottomBar: null,
  rowGroupPanelShow: 'never',
  // navigateToNextCell: () => null,
}

export default Aggrid

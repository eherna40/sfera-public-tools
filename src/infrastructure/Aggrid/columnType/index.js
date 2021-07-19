// Icons
import icChecked from '../../../assets/img/aggrid/ic_checked.png'
import icUnchecked from '../../../assets/img/aggrid/ic_unchecked.png'
import icSuccess from '../../../assets/img/aggrid/ic_success.svg'
import icError from '../../../assets/img/aggrid/ic_error.svg'
// import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor'

const handleStockClass = (val) => {
  if (val <= 0) {
    return 'tw-text-alert'
  }
  if (val > 0 && val < 21) {
    return 'tw-text-warning'
  }
  return 'tw-text-success'
}

export const columnTypes = {
  // para columnas no editables
  nonEditableColumn: { editable: false },
  // para el orden de las tipo id
  id: {
    comparator: (value) => value,
    floatingFilter: true,
    filter: 'agTextColumnFilter',
  },
  // columnas tipo texto
  text: {
    filter: 'agTextColumnFilter',
    sortable: true,
    floatingFilter: true,
    type: 'text',
  },
  // tipo numericas con floating filters
  number: {
    cellClass: () => 'tw-text-right tw-font-bold ',
    width: 130,
    filter: 'agNumberColumnFilter',
    floatingFilter: true,
    valueSetter: (params) => {
      if (
        params.colDef &&
        params.colDef.colId &&
        (params.newValue || params.newValue === 0) &&
        (params.oldValue || params.oldValue === 0) &&
        !Number.isNaN(Number(params.newValue)) &&
        params.newValue
      ) {
        params.data[params.colDef.colId] = params.newValue
        return true
      }
      if (
        params.colDef &&
        params.colDef.colId &&
        (params.oldValue || params.oldValue === 0)
      ) {
        params.data[params.colDef.colId] = params.oldValue
      }
      return false
    },
  },
  // columnas sin filtros
  noFilters: { floatingFilter: false, filter: false },

  // columnas con option de true o false con el text actvio o no
  actives: {
    valueFormatter: ({ value }) => (!value ? 'Activo' : 'Desactivado'),
    floatingFilter: true,
    sortable: true,
    filter: 'agTextColumnFilter',
  },

  // fila que le coloca una flecha adelante
  first: {
    cellClass: 'icon-first',
    filter: 'agTextColumnFilter',
    lockPosition: true,
  },

  // cambia color automaticamentes de los numeros
  stock: {
    cellClass: (value) =>
      `tw-text-right tw-font-bold ${handleStockClass(Number(value.value))}`,
    type: 'numericColumn',
    width: 130,
    filter: 'agNumberColumnFilter',
    floatingFilter: true,
  },

  // coloca el simbolo de euro
  price: {
    valueFormatter: ({ value }) => `${value ? `${value}€` : ''}`,
  },

  // coloca el simbolo de porcentage
  porcentage: {
    valueFormatter: (params) => {
      if (params && params.value) {
        return `${params.value}%`
      }
      if (params && params.data) {
        return ''
      }
      return '0'
    },
  },

  // coloca iconos de check cuando hay un valor
  show: {
    floatingFilter: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    cellRenderer: ({ value }) =>
      value
        ? `<span><img src=${icChecked} alt="checked-icon" /></span>`
        : `<span><img src=${icUnchecked} alt="checked-icon" /></span>`,
  },

  updated: {
    floatingFilter: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    cellRenderer: ({ value }) =>
      value
        ? `<span><img style="width: 25px" src=${icSuccess} alt="checked-icon" /></span>`
        : `<span><img style="width: 25px" src=${icError} alt="checked-icon" /></span>`,
  },

  // que tenga opciones de tres puntos, hay que mandarle las opciones desde el componente
  options: {
    cellStyle: { overflow: 'visible' },
    cellRenderer: 'menuOptions',
    filter: 'agTextColumnFilter',
    lockPosition: true,
  },

  // pasarle un onChange para gestionar que ocurre al hacer check
  checkbox: {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    filter: 'agTextColumnFilter',
  },

  // autocompleteSelect: {
  //   cellEditor: AutocompleteSelectCellEditor,
  //   cellStyle: { overflow: 'visible' },
  //   cellClass: () => 'tw-h-full tw-w-full ',
  //   cellEditorParams: {
  //     autocomplete: {
  //       showOnFocus: true,
  //       minLength: 0,
  //       fetch: () => [],
  //     },
  //   },
  // },
}

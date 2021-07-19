import { currencyFormatter } from '../../helpers/agGrid'

export const gridOptions = {
  columnDefs: [
    {
      headerName: '#',
      field: 'linea',
      width: 50,
      filter: false,
      resizable: false,
      type: 'rightAligned',
      enableRowGroup: false,
    },
    {
      headerName: 'Info',
      field: 'number',
      width: 100,
      resizable: false,
      enableRowGroup: false,
      cellRenderer: 'cellRendererInfo',
      type: 'rightAligned',
    },
    {
      colId: 'codigo',
      headerName: 'Código',
      field: 'codigo',
      enableRowGroup: false,
      editable: true,
      width: 150,
    },
    {
      headerName: 'Descripción',
      field: 'descripcion',
      editable: true,
      width: 200,
    },
    {
      headerName: 'Unidades',
      field: 'unidades',
      editable: true,
      width: 120,
      type: 'rightAligned',
    },
    {
      headerName: 'PVP',
      field: 'importe_pvp',
      valueFormatter: currencyFormatter,
      editable: true,
      width: 120,
      type: 'rightAligned',
    },
    {
      headerName: 'Importe',
      field: 'importe_a_pagar',
      valueFormatter: currencyFormatter,
      editable: false,
      width: 120,
      type: 'rightAligned',
    },
    { headerName: 'Stock', field: 'stock', editable: true, width: 120 },
    { headerName: 'Descuento', field: 'discounts' },
    { headerName: 'Cod. ent.', field: 'code_entity' },
    { headerName: 'Cod. reg.', field: 'cod_reg' },
    { headerName: 'Apr. Fin.', field: 'finance' },
    { headerName: 'Id Articulo', field: 'articulo_id' },
  ],

  defaultColDef: {
    sortable: false,
    filter: true,
    resizable: true,
  },
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columnas',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
          suppressSideButtons: false,
          suppressColumnFilter: false,
          suppressColumnSelectAll: false,
          suppressColumnExpandAll: true,
        },
      },
    ],
  },
}

// var cellRendererInfo = function(params) {
//     return 'ass';
// }

export const search = {
  columnDefs: [
    {
      headerName: 'COD ART.',
      field: 'codigo',
      width: 120,
      type: 'rightAligned',
    },
    { headerName: 'Descripción', field: 'descripcion', width: 400 },
    {
      headerName: 'PVP',
      field: 'pvp',
      valueFormatter: currencyFormatter,
      width: 100,
      type: 'rightAligned',
    },
    {
      headerName: 'STOCK',
      field: 'stock',
      editable: false,
      width: 100,
      type: 'rightAligned',
    },
    {
      headerName: 'ST. DISP',
      field: 'stock_disp',
      editable: false,
      width: 100,
      type: 'rightAligned',
    },
  ],
  defaultColDef: {
    sortable: false,
    filter: false,
    resizable: true,
  },
}

export const gridOptions = {
  columnDefs: [
    {
      headerName: '#',
      field: 'linea',
      width: 50,
      floatingFilter: false,
      type: 'rightAligned',
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'ID',
      field: 'id',
      width: 100,
      type: 'rightAligned',
      filter: 'agNumberColumnFilter',
      hide: true,
      suppressToolPanel: true,
    },
    // { colId: "codigo", headerName: "Código", field: 'codigo', editable: true, width: 150 },
    {
      headerName: 'Nombre',
      field: 'nombre',
      width: 200,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Apellidos',
      field: 'apellidos',
      width: 200,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Usuario',
      field: 'user',
      width: 120,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Tipo de usuario',
      field: 'rol',
      width: 120,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        cellHeight: 50,
        values: ['Ireland', 'USA'],
      },
    },
    {
      headerName: 'Estado',
      field: 'estado',
      width: 120,

      cellRenderer(params) {
        const text = params.value ? 'Activo' : 'Desactivado'
        if (params.value)
          return `<span class="d-flex align-items-center "><span class="material-icons cell-icon mr-2">done</span> ${text}</span>`
        return `<span class="d-flex align-items-center "><span class="material-icons cell-icon mr-2">highlight_off</span>${text}</span>`
      },
      cellClassRules: {
        success(params) {
          return params.value
        },
        danger(params) {
          return !params.value
        },
      },
    },
    {
      floatingFilter: false,
      headerName: '',
      field: 'edit',
      editable: false,
      width: 20,
      type: 'rightAligned',
      cellRenderer() {
        return '<span class="d-flex align-items-center edit-icon h-100"><span class="material-icons cell-icon">create</span></span>'
      },
    },
  ],
  rowModelType: 'serverSide',
  paginationPageSize: 10,
  cacheBlockSize: 10,
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
    enableRowGroup: true,
  },
  autoGroupColumnDef: { minWidth: 200 },
  rowGroupPanelShow: 'always',
  rowHeight: 30,
  domLayout: 'autoHeight',
}

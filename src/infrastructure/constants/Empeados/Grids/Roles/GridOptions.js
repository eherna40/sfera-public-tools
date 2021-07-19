export const gridOptions = {
  columnDefs: [
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
    // { headerName: "Descripción", field: "descripcion" },
  ],

  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  },
  rowHeight: 30,
  domLayout: 'autoHeight',
}

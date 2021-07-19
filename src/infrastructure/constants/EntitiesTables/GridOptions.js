import i18n from 'i18next'

export const gridOptions = () => ({
  columnDefs: [
    // {
    //   headerName: i18n.t('tables.headerId'),
    //   colId: 'id',
    //   field: 'id',
    //   width: 50,
    //   type: 'rightAligned',
    //   filter: 'agNumberColumnFilter',
    //   hide: true,
    //   suppressToolPanel: true,
    // },
    {
      headerName: i18n.t('tables.headerDescription'),
      field: 'descripcion',
      width: 110,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: i18n.t('tables.headerprovinces'),
      field: 'provincias.descripcion',
      width: 110,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: i18n.t('tables.headerTypeRegimes'),
      field: 'tipo_regimenes.descripcion',
      width: 110,
      filter: 'agTextColumnFilter',
    },
  ],
  paginationPageSize: 100,
  defaultColDef: {
    filter: true,
    resizable: true,
    floatingFilter: false,
  },
  rowSelection: 'single',
  rowHeight: 30,
})

export const gridOptionsTypology = () => ({
  columnDefs: [
    {
      headerName: 'ID',
      field: 'id',
      width: 50,
      type: 'rightAligned',
      hide: true,
      suppressToolPanel: true,
    },
    {
      headerName: 'Descripcion',
      field: 'descripcion',
    },
  ],
  defaultColDef: {
    suppressMenu: true,
  },
  suppressPaginationPanel: true,
  rowHeight: 30,
})

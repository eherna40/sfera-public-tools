export const labs = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    type: ['options', 'id'],
    floatingFilter: true,
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    width: 100,
    type: 'number',
    floatingFilter: true,
  },
  {
    field: 'codigo_ss',
    headerName: 'Código',
    width: 100,
    type: 'number',
    floatingFilter: true,
  },
  {
    field: 'nombre',
    headerName: 'Laboratorio',
    width: 300,
    type: 'text',
  },
  {
    field: 'web',
    headerName: 'Web',
    width: 300,
    type: 'text',
  },
  {
    field: 'proveedor.descripcion',
    headerName: 'Proveedor',
    width: 300,
    type: 'text',
  },
  {
    field: 'pais.nombre',
    headerName: 'Origen',
    width: 300,
    type: 'text',
  },
]

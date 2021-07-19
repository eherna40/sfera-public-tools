export const audit = [
  {
    field: 'fecha',
    headerName: 'Fecha',
    width: 100,
    type: 'numericColumn',
    floatingFilter: false,
  },
  {
    field: 'empleado',
    headerName: 'Empleado',
    width: 300,
    type: 'text',
  },
  {
    field: 'tipoMovimiento',
    headerName: 'Tipo de movimiento',
    width: 300,
    type: 'text',
  },
  {
    field: 'desde',
    headerName: 'De',
    width: 180,
    type: 'text',
  },
  {
    field: 'hasta',
    headerName: 'A',
    width: 180,
    type: 'text',
  },
  {
    field: 'cantidad',
    headerName: 'Cantidad',
    width: 180,
    type: 'text',
  },
  {
    field: 'actualizado',
    headerName: 'Actualizado',
    width: 180,
    type: 'updated',
  },
  {
    field: 'noDefinido',
    headerName: '¿?',
    width: 180,
    type: 'text',
  },
]

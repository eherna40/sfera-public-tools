export const entities = [
  {
    field: 'nombre',
    headerName: 'Régimen',
    width: 300,
    type: 'text',
  },
  {
    field: 'aportacion',
    headerName: 'Ap. %',
    width: 100,
    type: 'number',
    floatingFilter: true,
  },
  {
    field: 'aportacion_maxima',
    headerName: 'Ap. Máx.',
    width: 100,
    type: 'number',
  },
  {
    field: 'recetas_por_paquete',
    headerName: 'R x P',
    width: 100,
    type: 'number',
  },
  {
    field: 'impresion_paquete',
    headerName: 'Impresión',
    width: 100,
    type: 'boolean',
  },
  {
    field: 'paquete_venta',
    headerName: 'P. Venta',
    width: 100,
    type: 'boolean',
  },
  {
    field: 'tipoRegimen',
    headerName: 'Tipo Régimen',
    width: 300,
    type: 'text',
  },
  {
    field: 'precio_unico',
    headerName: 'P. Único',
    width: 100,
    type: 'number',
  },
]

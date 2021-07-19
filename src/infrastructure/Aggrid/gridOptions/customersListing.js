import icAnnotations from '../../../assets/img/ic_icons/ic_annotations.svg'

export const customersListing = [
  {
    field: 'id',
    headerName: 'Código',
    width: 100,
    type: 'text',
  },
  {
    field: 'nombre',
    headerName: 'Cliente',
    width: 400,
    type: 'text',
  },
  {
    field: 'cip',
    headerName: 'CIP',
    width: 300,
    type: 'text',
  },
  {
    field: 'telefono_movil',
    headerName: 'Teléfono',
    width: 300,
    type: 'text',
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 300,
    type: 'text',
  },
  {
    field: 'fecha_nacimiento',
    headerName: 'Fecha nacimiento',
    width: 300,
    type: 'text',
  },
  {
    field: 'anotaciones',
    headerName: 'Anotaciones',
    width: 200,
    type: 'text',
    cellRenderer: () =>
      `<span><img src=${icAnnotations} alt="annotations-icon" /></span>`,
  },
  {
    field: 'nif',
    headerName: 'DNI/CIF/NIE',
    width: 300,
    type: 'text',
  },
]

import { gql } from '@apollo/client'

export default gql`
  {
    usuarios(first: 300) {
      data {
        id
        nombre
        usuarioHorarioPermiso {
          id
          farmaciaAlmacen {
            id
            nombre
          }
          usuarioHorario {
            id
            nombre
            desde
            hasta
            color
          }
        }
        usuarioHorarioExcepcion {
          id
          razon {
            id
            nombre
            color
          }
          fecha
          usuarioHorario {
            id
            nombre
          }
          farmaciaAlmacen {
            id
            nombre
          }
        }
      }
    }
  }
`

import { gql } from '@apollo/client'
import { loggedWarehouse } from '../warehouse/variables'

export const GETUSERBYID = gql`
  query($id: ID!) {
    usuario(id: $id) {
      nombre
      id
      email
      dni
      nickname
      almacenLogueado {
        ${loggedWarehouse}
      }
      usuarioHorarioPermiso {
        id
        autorizar
        farmaciaAlmacen {
          id
          nombre
          descripcion
        }
        usuarioHorario {
          id
          nombre
          desde
          hasta
        }
      }
      usuarioHorarioExcepcion {
        id
        razon {
          id
          nombre
        }
      }
    }
  }
`

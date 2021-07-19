import { gql } from '@apollo/client'
import { loggedWarehouse, warehouses } from './variables'

export const SELECT_WAREHOUSE = gql`
  mutation($id: ID!) {
    cambiarAlmacen(id: $id) {
      almacenLogueado{
      ${loggedWarehouse}
      }
    }
  }
`

export const GET_ALL_WAREHOUSES = gql`
  query {
    almacenes(first: 999, page: 1) {
      data {
       ${warehouses}
      }
    }
  }
`

export const UPDATE_WAREHOUSE = gql`
  mutation($id: ID!, $input: FarmaciaAlmacenActualizarInput) {
    actualizarAlmacen(id: $id, input: $input) {
      id
      nombre
      direccion
      color
    }
  }
`

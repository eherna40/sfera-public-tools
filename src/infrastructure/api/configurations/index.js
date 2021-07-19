import { gql } from '@apollo/client'

export const GET_CONFIGURATIONS = gql`
  query {
    configuraciones {
      id
      clave
      valor
    }
  }
`
export const UPDATE_CONFIGURATIONS = gql`
  mutation($id: ID!, $input: ConfiguracionInput) {
    actualizarConfiguracion(id: $id, input: $input) {
      id
      clave
      valor
    }
  }
`

export const CREATE_CONFIGURATiON = gql`
  mutation($input: ConfiguracionInput) {
    crearConfiguracion(input: $input) {
      id
      clave
      valor
    }
  }
`

import { gql } from '@apollo/client'

export const UPDATE_SESSION = gql`
  mutation($input: crearOActualizaSesionInput) {
    crearOActualizarSesion(input: $input) {
      id
    }
  }
`

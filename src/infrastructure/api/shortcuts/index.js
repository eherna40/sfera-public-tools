import { gql } from '@apollo/client'

export const updateShortcut = gql`
  mutation($id: ID!, $input: UsuarioAtajoInput) {
    actualizarAtajo(id: $id, input: $input) {
      id
    }
  }
`

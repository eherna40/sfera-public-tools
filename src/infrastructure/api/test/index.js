import { gql } from '@apollo/client'

export const TEST_USER = gql`
  query {
    usuario(id: 3) {
      id
      nombre
    }
  }
`
export const TEST_USER_MUTATION = gql`
  mutation($iso: Int) {
    cambiarIdioma(idioma_iso: $iso) {
      id
    }
  }
`

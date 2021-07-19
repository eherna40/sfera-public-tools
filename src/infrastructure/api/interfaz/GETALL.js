import { gql } from '@apollo/client'

export const GETTIPOSHORARIOS = gql`
  {
    usuariohorarios(first: 100) {
      data {
        id
        nombre
      }
    }
  }
`

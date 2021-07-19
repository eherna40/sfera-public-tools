import { gql } from '@apollo/client'

export default gql`
  mutation($id: ID!) {
    borrarPaciente(id: $id) {
      id
    }
  }
`

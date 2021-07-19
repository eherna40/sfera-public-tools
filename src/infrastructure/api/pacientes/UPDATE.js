import { gql } from '@apollo/client'

export default gql`
  mutation($id: ID!, $input: PacienteInput) {
    actualizarPaciente(id: $id, input: $input) {
      id
      nombre
      email
    }
  }
`

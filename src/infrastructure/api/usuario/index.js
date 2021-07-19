import { gql } from '@apollo/client'

export const GET = gql`
  {
    usuario(id: 1) {
      nombre
      email
    }
  }
`

export const LOGIN = gql`
  mutation($nickname: String!, $codigo: String!, $password: String!) {
    login(nickname: $nickname, codigo: $codigo, password: $password) {
      token
      usuario {
        atajos {
          id
          clave
          valor
        }
      }
    }
  }
`

export const CREATE_SHORTSCUTS = gql`
  mutation($usuario_id: Int, $clave: String, $valor: String) {
    crearAtajo(
      input: { usuario_id: $usuario_id, clave: $clave, valor: $valor }
    ) {
      id
    }
  }
`

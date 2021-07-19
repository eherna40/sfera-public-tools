import { gql } from '@apollo/client'
import { fields } from './variables'

export const GET_LANGUAGES = gql`
  mutation {
    idiomasLogin{
        ${fields}
    }
  }
`

export const CAMBIAR_IDIOMA = gql`
  mutation($idioma_iso: String) {
    cambiarIdioma(idioma_iso: $idioma_iso) {
      id
    }
  }
`

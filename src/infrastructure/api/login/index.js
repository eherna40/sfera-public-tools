import { gql } from '@apollo/client'
import { usuario } from '../variables'
import { fields } from './variables'

export const LOGIN = gql`
  mutation login(
    $identificador: String!
    $codigo: String!
    $pin: String!
    $idioma_iso: String
  ) {
    login(
      identificador: $identificador
      codigo: $codigo
      pin: $pin
      idioma_iso: $idioma_iso
    ) {
      ${fields}
    }
  }
`

export const LOGOUT = gql`
  mutation {
    logout {
      status
      message
    }
  }
`

export const PSEUDO_LOGIN = gql`
  mutation($input: PseudoLoginInput) {
    pseudoLogin(input: $input) {
      ${fields} 
    }
  }
`

export const GET_SESSION = gql`
  mutation {
    obtenerSesion {
      id
      sesion
    }
  }
`

export const FIRST_LOGIN_TITULAR = gql`
  mutation($codigo_socio: String!, $password: String! $idioma_iso: String) {
    validarUsuarioPrimerLogin(
      codigo_socio: $codigo_socio
      password: $password
      idioma_iso: $idioma_iso
    ) {
      token
      ${usuario}
      farmacia{
        id
        id_sertec
      }
    }
  }
`
export const URL_AREA_PRIVADA = gql`
  mutation {
    obtenerSemillaLoginIofnet {
      url_acceso_iofnet
    }
  }
`
export const OBTENER_AREA_PRIVADA = gql`
  mutation($codigo_socio: String!, $password: String!) {
    guardarCredencialesAreaprivada(
      input: { codigo_socio: $codigo_socio, password: $password }
    ) {
      url_acceso_iofnet
    }
  }
`

export const URL_FARMA_PEMIUM = gql`
  mutation {
    obtenerAutologinFarmapremium {
      url
    }
  }
`

export const URL_FARMA_PEMIUM_CODE = gql`
  mutation($code: String, $state: String) {
    callbackFarmapremium(input: { code: $code, state: $state }) {
      url
    }
  }
`

import { gql } from '@apollo/client'

export const GETALLEXCEPTIONSMOTIVES = gql`
  query {
    usuarioRazonesDeExcepcion {
      id
      nombre
      color
    }
  }
`

export const GETALLUSEREXCEPTIONS = gql`
  query($id: ID!, $first: Int) {
    usuarioRazonesDeExcepcion {
      id
      nombre
      color
    }
    usuario(id: $id) {
      nombre
      id
      usuarioHorarioExcepcion {
        id
        razon {
          id
          nombre
          color
        }
      }
    }
    usuariohorario(first: $first) {
      data {
        id
        nombre
      }
    }
  }
`

export const ADDNEWEXCEPTIONMOTIVE = gql`
  mutation($input: UsuarioHoraExcepcionRazonInput) {
    crearUsuarioRazonDeExcepcion(input: $input) {
      id
      nombre
      color
    }
  }
`

export const ADDUSEREXCEPTION = gql`
  mutation(
    $usuario_id: Int!
    $farmacia_almacen_id: Int!
    $usuario_horario_razon_excepcion_id: Int!
    $usuario_horario_id: Int!
    $fecha: String!
  ) {
    crearUsuarioHorarioExcepcion(
      usuario_id: $usuario_id
      farmacia_almacen_id: $farmacia_almacen_id
      usuario_horario_id: $usuario_horario_id
      usuario_horario_razon_excepcion_id: $usuario_horario_razon_excepcion_id
      fecha: $fecha
    ) {
      id
      fecha
    }
  }
`

export const UPDATEUSEREXCEPTION = gql`
  mutation(
    $id: Int!
    $usuario_id: Int!
    $farmacia_almacen_id: Int!
    $usuario_horario_razon_excepcion_id: Int!
    $usuario_horario_id: Int!
    $fecha: String!
  ) {
    actualizarUsuarioHorarioExcepcion(
      id: $id
      usuario_id: $usuario_id
      farmacia_almacen_id: $farmacia_almacen_id
      usuario_horario_id: $usuario_horario_id
      usuario_horario_razon_excepcion_id: $usuario_horario_razon_excepcion_id
      fecha: $fecha
    ) {
      id
      fecha
    }
  }
`

export const DELTEEXEPTIONUSER = gql`
  mutation($id: Int!) {
    borrarUsuarioHorarioExcepcion(id: $id) {
      id
    }
  }
`

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
// BORRADO
export const UPDATECOLOR = gql`
  mutation($id: ID!, $farmacia_almacen_id: Int!, $color: String!) {
    actualizarColorAlmacen(
      id: $id
      farmacia_almacen_id: $farmacia_almacen_id
      color: $color
    ) {
      id
      farmaciaAlmacen {
        id
        color {
          color
        }
        nombre
      }
    }
  }
`

export const UPDATE_SESSION = gql`
  mutation($input: crearOActualizaSesionInput) {
    crearOActualizarSesion(input: $input) {
      id
      usuario {
        id
      }
      sesion
    }
  }
`

export const GET_SESSION = gql`
  mutation {
    obtenerSesion {
      usuario {
        id
        nombre
      }
      sesion
    }
  }
`

export const GET_PALETTES = gql`
  query {
    paletas {
      id
      nombre
      primario
      secundario
      terciario
      cuaternario
      grupo {
        id
        nombre
        logo
      }
    }
  }
`

export const GET_GROUPS = gql`
  query {
    gruposCorporativos {
      id
      nombre
      logo
      paleta {
        id
        nombre
        primario
        secundario
        terciario
        cuaternario
      }
    }
  }
`

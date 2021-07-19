const { gql } = require('@apollo/client')

export const GET_FILTERS = gql`
  query {
    usuarioTablaConfiguraciones {
      id
      nombre
      tabla
    }
  }
`

export const USER_HAS_PERMISSION = gql`
  mutation($tabla: String) {
    usuarioTienePermisoConfiguracion(tabla: $tabla)
  }
`

export const TOGGLE_USER_PERMISSIONS = gql`
  mutation($input: ActivarUsuarioTablaConfiguracionInput) {
    activarUsuarioTablaConfiguracion(input: $input)
  }
`

export const GET_TABLES = gql`
  mutation {
    usuarioTablaConfiguracionesByTablas {
      tabla
      configuraciones {
        filtros {
          id
          nombre
          descripcion
          tabla
          tipo
          color
          valor
        }
        configuracion {
          id
          nombre
          descripcion
          tabla
          tipo
          color
          valor
        }
      }
    }
  }
`

export const GET_CONFIG_TABLES = gql`
  query {
    usuarioTablaConfiguraciones {
      tabla
    }
  }
`
export const GET_SETTINGS = gql`
  query($tabla: String!) {
    filtrosByTabla(tabla: $tabla) {
      id
      usuario_id
      nombre
      descripcion
      tabla
      color
      filtroCampos {
        id
        filtro_id
        clave
        valor
      }
      filtroGrupos {
        id
        filtro_id
        valor
      }
      config
    }
  }
`

export const CREATE_SETTINGS = gql`
  mutation($input: UsuarioTablaConfiguracionesInput) {
    crearUsuarioTablaConfiguracion(input: $input) {
      id
    }
  }
`

export const DELETE_SETTINGS = gql`
  mutation($id: ID!) {
    borrarUsuarioTablaConfiguracion(id: $id) {
      id
    }
  }
`
export const UPDATE_SETTINGS = gql`
  mutation($id: ID, $input: UsuarioTablaConfiguracionesInput) {
    actualizarUsuarioTablaConfiguracion(id: $id, input: $input) {
      id
    }
  }
`

export const GET_CONFIG = gql`
  query($tabla: String!) {
    filtrosByTabla(tabla: $tabla) {
      id
      usuario_id
      nombre
      descripcion
      tabla
      color
      filtroCampos {
        id
        filtro_id
        clave
        valor
      }
      filtroGrupos {
        id
        filtro_id
        valor
      }
      config
    }
  }
`

export const CREATE_CONFIG = gql`
  mutation($input: FiltroInput) {
    crearFiltro(input: $input) {
      id
    }
  }
`

export const DELETE_CONFIG = gql`
  mutation($id: ID!) {
    borrarFiltro(id: $id) {
      id
    }
  }
`
export const UPDATE_CONFIG = gql`
  mutation($id: ID!, $input: FiltroInput) {
    actualizarFiltro(id: $id, input: $input) {
      id
    }
  }
`

import { gql } from '@apollo/client'

export const GET_LISTING = gql`
  mutation($input: FiltrarUsuariosInput, $first: Int, $page: Int) {
    filtrarUsuariosPaginado(
      input: $input
      first: $first
      page: $page # trashed: WITH
      useWriteDB: true
    ) {
      data {
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
        id
        rol {
          id
          nivel
        }
        nivel
        nombre
        email
        nickname
        direccion
        codigo_postal
        localidad
        deleted_at
        dni
        rolesPublicos {
          rol {
            id
            nombre
            autorizar
            descripcion
          }
        }
        recursos {
          id
          nombre
        }
      }
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
    }
  }
`

export const DELETE_USER = gql`
  mutation($id: ID!) {
    borrarUsuario(id: $id, liberarPin: true) {
      id
      nombre
      deleted_at
    }
  }
`

export const GET_SOFTWARE_ROLES = gql`
  {
    listarRolesPublicos {
      id
      nombre
      activo
      roles {
        id
        nivel
        nombre
        descripcion
        rolAsociado {
          id
          nombre
        }
        modulo {
          autorizar
          id
          nombre
          recursos {
            id
            nombre
            descripcion
            autorizar
          }
        }
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation($input: UsuarioCrearInput, $rol_id: Int) {
    crearUsuario(input: $input, rol_id: $rol_id) {
      id
    }
  }
`

export const UPDATE_USER = gql`
  mutation($id: ID, $input: UsuarioActualizaInput, $rol_id: Int) {
    actualizarUsuario(id: $id, input: $input, rol_id: $rol_id) {
      id
      nombre
      email
      dni
      nickname
      deleted_at
      avatar {
        url
        url_miniatura
        url_250
      }
    }
  }
`

export const UPDATE_USER_FIRST_TIME = gql`
  mutation($input: ActualizaPrimerLoginInput) {
    actualizarPerfilFarmaceuticoPrimerLogin(input: $input) {
      usuario {
        id
        nombre
        email
        dni
        nickname
        deleted_at
        avatar {
          url
        }
      }
      token
      token_temporal
      codigo_farmacia
    }
  }
`

export const EXISTING_EMPLOYEE = gql`
  mutation($input: DatoUsuario) {
    existeDatoUsuario(input: $input) {
      id
    }
  }
`
export const INVITE_USERS = gql`
  mutation($input: InvitarUsuariosPrimerLoginInput) {
    invitarUsuariosPrimerLogin(input: $input) {
      usuario {
        id
      }
      codigo_farmacia
    }
  }
`

export const GET_USER = gql`
  query($id: ID) {
    usuario(id: $id) {
      id
      primer_login
      nombre
      email
      dni
      rol {
        id
      }
      nivel
      nickname
      avatar {
        url
        url_250
        url_miniatura
      }
      recursos {
        activo
        id
        nombre
        roles {
          id
          nivel
          nombre
          descripcion
          rolAsociado {
            id
            nombre
          }
          modulo {
            id
            nombre
            autorizar
            recursos {
              id
              nombre
              descripcion
              autorizar
            }
          }
          autorizar
        }
      }
      permisos {
        id
        recurso {
          id
          nombre
        }
        autorizar
      }
      usuarioTelefono {
        id
        nombre
        telefono
      }
    }
  }
`

export const UPLOAD_IMAGE = gql`
  mutation($file: Upload!, $id: Int) {
    subirArchivoAvatar(file: $file, id: $id) {
      url
      url_miniatura
    }
  }
`

export const GET_TOKEN_QR = gql`
  mutation {
    obtenerQRSubirImagenMovil {
      qr_base64
    }
  }
`

export const CONFIRM_TOKEN = gql`
  mutation validarTokenQRSubirImagenMovil($token: String) {
    validarTokenQRSubirImagenMovil(token: $token) {
      resultado
    }
  }
`

export const NOTIFICATION_SMS = gql`
  mutation($token_temporal: String!) {
    avisoTitularFarmaciaCreadaPrimerLogin(token_temporal: $token_temporal) {
      resultado
    }
  }
`

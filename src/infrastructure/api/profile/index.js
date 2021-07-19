import { gql } from '@apollo/client'
import { loggedWarehouse } from '../warehouse/variables'

export const GET_USER = gql`
  query($id: ID) {
    usuario(id: $id) {
      primer_login
      id
      nombre
      email
      dni
      nickname
      localidad
      codigo_postal
      fecha_nacimiento
      numero_colegiado
      receta_usuario
      fidel_codigo
      direccion
      avatar {
        url
        url_250
      }
      provincia {
        id
        descripcion
      }

      rol {
        id
        nombre
        descripcion
      }
      almacenLogueado {
        ${loggedWarehouse}
      }
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
export const UPDATE_USER = gql`
  mutation($id: ID, $input: UsuarioActualizaInput, $rol_id: Int) {
    actualizarUsuario(id: $id, input: $input, rol_id: $rol_id) {
      id
      nombre
      email
      dni
      nickname
      primer_login
      localidad
      codigo_postal
      fecha_nacimiento
      numero_colegiado
      receta_usuario
      fidel_codigo
      info_popup_login
      direccion
      avatar {
        url
        url_250
        url_miniatura
      }
      rol {
        id
        nombre
        descripcion
      }
      almacenLogueado {
        ${loggedWarehouse}
      }
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
export const UPLOAD_AVATAR = gql`
  mutation($file: Upload!, $id: Int) {
    subirArchivoAvatar(file: $file, id: $id) {
      url
      url_miniatura
    }
  }
`

export const EXISTING_INPUT = gql`
  mutation($input: DatoUsuario) {
    existeDatoUsuario(input: $input) {
      id
    }
  }
`

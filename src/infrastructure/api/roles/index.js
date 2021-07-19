import { gql } from '@apollo/client'

export const GET_ALL = gql`
  {
    listarRoles {
      id
      nombre
      descripcion
      modulos {
        id
        nombre
        children {
          id
          nombre
          recurso {
            id
            nombre
            pivot {
              autorizar
            }
          }
        }
        recurso {
          id
          nombre
          pivot {
            autorizar
          }
        }
      }
    }
    almacenes(orderBy: [{ field: "id", order: ASC }]) {
      data {
        id
        nombre
      }
    }
  }
`

export const GET_PERIMISSION_LIST = gql`
  mutation($input: ListarPermisosRecursosUsuarioInput) {
    ListarPermisosRecursosUsuario(input: $input) {
      farmacia {
        id
        modulos {
          id
          nombre
          recursos {
            id
            nombre
            autorizado
          }
        }
      }
    }
  }
`

export const GET_ALL_ROLES_WAREHOUSES = gql`
  {
    almacenes {
      data {
        id
        nombre
      }
    }
    listarRoles {
      id
      nombre
      descripcion
      modulos {
        id
        nombre
        children {
          id
          nombre
          recurso {
            id
            nombre
            pivot {
              autorizar
            }
          }
        }
        recurso {
          id
          nombre
          pivot {
            autorizar
          }
        }
      }
    }
  }
`

export const GET_ROLES = gql`
  query($orderBy: [OrderByClause!]) {
    roles(orderBy: $orderBy, first: 100) {
      data {
        id
        nombre
      }
    }
  }
`

export const GET_MODULES = gql`
  {
    modulos {
      data {
        id
        nombre
      }
    }
  }
`

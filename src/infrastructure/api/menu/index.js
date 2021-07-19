import { gql } from '@apollo/client'
import { menus } from './variables'

export const GET_FAVORITOS = gql`
  query($id: Int) {
    favoritosCarpeta(usuario: $id, page: 1, first: 999999999) {
      data {
        id
        descripcion
        favoritos {
          id
          recurso {
            visible
            id
            nombre
            componente
            software {
              id
              nombre
            }
          }
        }
      }
    }
  }
`

export const GET_SOFTWARES = gql`
  mutation {
    listarMenus{
      ${menus}
    }
  }
`

export const INSERT_TO_FAVORITE = gql`
  mutation($input: FavoritoInput) {
    insertarFavorito(input: $input) {
      id
      menu {
        id
        nombre
      }
    }
  }
`
export const REMOVE_FROM_FAVORITE = gql`
  mutation($id: Int) {
    borrarFavorito(id: $id) {
      id
      nombre
    }
  }
`
export const REMOVE_FOLDER_FROM_FAVORITE = gql`
  mutation($id: Int) {
    borrarCarpetaFavorito(id: $id) {
      id
      nombre
    }
  }
`

export const UPDATE_FOLDER = gql`
  mutation($id: Int!, $descripcion: String!) {
    actualizarCarpetaFavorito(id: $id, descripcion: $descripcion) {
      id
    }
  }
`
export const SEARCH_RESOURCES = gql`
  mutation($input: BuscarRecursosSoftwareInput) {
    buscarRecursosSoftware(input: $input) {
      nombre
      id
      fav_id
      favorito
      componente
      visible
      software {
        id
        nombre
      }
    }
  }
`

// export const GET_FAVORITES = gql`
// query($id: Int) {
//   favoritosCarpeta(orderBy: [], first: 100, page: 1, usuario: $id) {
//     data {
//       id
//       descripcion
//       favoritos {
//         id
//         es_menu
//         recurso {
//           id
//           nombre
//           modulo {
//             software {
//               nombre
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

// export const INSERTARRECURSOCONCARPETA = gql`
//   mutation($id: Int!, $carpeta_texto: String, $es_menu: Boolean!) {
//     insertarFavorito(
//       input: {
//         id: $id
//         es_menu: $es_menu
//         carpeta_texto: $carpeta_texto
//         empresa_id: 1
//       }
//     ) {
//       id
//       menu {
//         id
//         nombre
//       }
//     }
//   }
// `

// export const DELETEFOLDER = gql`
//   mutation($id: Int!) {
//     borrarCarpetaFavorito(id: $id) {
//       id
//       childrens {
//         id
//         carpeta_id
//         nombre
//         favorito
//         tag
//         childrens {
//           id
//           carpeta_id
//           nombre
//           componente
//           favorito
//           tag
//         }
//       }
//     }
//   }
// `

// export const DELETEFAVS = gql`
//   mutation($id: Int!) {
//     borrarFavorito(id: $id) {
//       id
//     }
//   }
// `
// export const GETFAVORITOS = gql`
//   {
//     favoritosCarpeta(first: 100) {
//       data {
//         id
//         descripcion
//         favoritos {
//           id
//           es_menu
//           carpeta {
//             id
//           }
//           menu {
//             id
//             nombre
//           }
//           recurso {
//             nombre
//             id
//             modulo {
//               software {
//                 nombre
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// // export const LISTARMENUS = gql`
// // 	{
// // 		listarMenus {
// // 			id
// // 			childrens {
// // 				fav_id
// // 				id
// // 				carpeta_id
// // 				nombre
// // 				favorito
// // 				tag
// // 				childrens {
// // 					fav_id
// // 					id
// // 					carpeta_id
// // 					nombre
// // 					componente
// // 					favorito
// // 					tag
// // 				}
// // 			}
// // 		}
// // 	}
// // `;

// export const LISTARMENUS_BYSOFTWARE = gql`
//   query($id: Int) {
//     listarMenus(id: $id) {
//       id
//       childrens {
//         fav_id
//         id
//         carpeta_id
//         nombre
//         favorito
//         tag
//         childrens {
//           fav_id
//           id
//           carpeta_id
//           nombre
//           componente
//           favorito
//           tag
//           childrens {
//             id
//             fav_id
//             carpeta_id
//             nombre
//             componente
//             favorito
//             tag
//           }
//         }
//       }
//     }
//     favoritosCarpeta(first: 10) {
//       data {
//         id
//         descripcion
//         favoritos {
//           id
//           es_menu
//           menu {
//             id
//             nombre
//           }
//           recurso {
//             id
//             nombre
//           }
//         }
//       }
//     }
//   }
// `

export const favoritos = `
        id
        descripcion
        favoritos {
          id
          es_menu
          carpeta {
            id
          }
          menu {
            id
            nombre
          }
          recurso {
            nombre
            id
            software{
              id
              nombre
            }
          }
        }
      

`

export const menus = `
  id
  nombre
  activo
  visible
  demo
  children {
    id
    nombre
    componente
    visible
    software_id
    children {
      componente
      id
      fav_id
      nombre
      favorito
      visible
      software_id
      children {
        id
        fav_id
        nombre
        favorito
        visible
        software_id
      }
    }
  }
`

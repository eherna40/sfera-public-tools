import { menus } from '../menu/variables'
import { pharmacy } from '../pharmacy/variables'
import { loggedWarehouse, warehouses, permit } from '../warehouse/variables'

export const fields = `
    token
    menus {
        ${menus}
    }
    farmacia{
        ${pharmacy}
    }
    usuario{
        info_popup_login
        nivel
        primer_login
        avatar{
            url
            url_250
            url_miniatura
        }
        nombre
        id
        idioma{
            id
            nombre
            codigo
        }
        nickname
        sesion{
            id
            sesion
        }

        rol{
            id
            nombre
            descripcion
        }
        almacenLogueado{
            ${loggedWarehouse}
        }
        permisos {
            ${permit}
        }
    }
    almacenes{
        ${warehouses}
    }
`

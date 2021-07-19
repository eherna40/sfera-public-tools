import { loggedWarehouse } from './warehouse/variables'

export const usuario = `
usuario{
        primer_login
        avatar{
            url
        }
        nombre
        id
        email
        nivel
        nickname
        dni
        sesion{
            id
            sesion
        }
        usuarioTelefono{
            telefono
            id
        }

        rol{
            id
            nombre
            descripcion
        }
        almacenLogueado{
            ${loggedWarehouse}
        }
    }
`

export const farmacia = `
farmacia{
    id
    id_sertec
`

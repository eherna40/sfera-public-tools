import { gql } from '@apollo/client'

export const FILTER_HISTORY_MOVEMENTS = gql`
  mutation($input: FiltrarCajaMovimientosInput, $first: Int, $page: Int) {
    filtrarCajaMovimientosPaginado(input: $input, first: $first, page: $page) {
      data {
        id
        created_at
        operacion
        salida_caja
        entrada_caja
        cliente {
          nombre
        }
        venta {
          id
          codigo
        }
        formaPago {
          descripcion
          nombre
        }
        observaciones
        usuario {
          nombre
        }
        caja {
          nombre
        }
        cajaMovimientoTipo {
          id
          descripcion
        }
      }
    }
  }
`

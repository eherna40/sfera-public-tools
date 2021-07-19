import { gql } from '@apollo/client'
import { queryTPV, cart, client, sell } from '../_variables'

export const BUSCAR = gql`
  mutation($search: Mixed) {
    filtrarArticulosPaginado(
      first: 20
      input: {
        where: {
          OR: [
            { column: nombre, operator: LIKE, value: $search }
            { column: descripcion, operator: LIKE, value: $search }
          ]
        }
      }
    ) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        perPage
        total
      }
      data {
        id
        codigo
        nombre
        descripcion
        stock
        precio {
          precio_pvp
          precio_coste
        }
        ean13
        laboratorio {
          descripcion
        }
      }
    }
  }
`

export const filtrarArticulos = gql`
  mutation {
    filtrarArticulos(first: 100, input: []) {
      data {
        id
        cif
        codigo
        numero_registro
        ean13
        nombre
        descripcion
        fecha_alta
        tipo
        stock
        precio_eur
        laboratorio {
          descripcion
        }
        articuloPrecios {
          precio_coste
          precio_pvp
        }
      }
    }
  }
`

export const GET_CART_BY_ID = gql`
mutation($id: ID!) {
  carrito(id:$id){
    ${cart}
  }
}
`

export const INSERT_PRODUCT_CART = gql`
  mutation($input: CarritoInput) {
    insertarArticuloCarrito(input: $input) {
      ${cart}
    }
  }
`

export const UPDATE_INPUT_PRODUCT_CART = gql`
mutation($input:CarritoActualizaCampoInput){
  actualizarCampoCarrito(input: $input) {
    ${cart}
  }
}
`

export const UPDATE = gql`
  mutation(
    $carrito_id: Int!
    $articulo_id: Int!
    $unidades: Int!
    $linea: Int!
    $importe_pvp: Float
    $descuento_directo: Float
    $descuento_porcentaje: Float
    $paciente_id: Int
  ) {
    actualizarCampoCarrito(
      input: {
        carrito_id: $carrito_id
        articulo_id: $articulo_id
        unidades: $unidades
        linea: $linea
        importe: $importe_pvp
        descuento_directo: $descuento_directo
        descuento_porcentaje: $descuento_porcentaje
        paciente_id: $paciente_id
      }
    ) {
    #   id
    #   importe_a_pagar
    #   importe_base
    #   importe_iva
    #   importe_re
    #   importe_a_pagar
    #   cliente_id
    #   carritoLinea {
    #     id
    #     paciente_id
    #     paciente {
    #       id
    #       nombre
    #       cliente_id
    #     }
    #     articulo {
    #       nombre
    #       dispensacion {
    #         controlLibro {
    #           id
    #           descripcion
    #         }
    #       }
    #     }
    #     linea
    #     venta_tipo_id
    #     t_especial
    #     articulo_id
    #     descripcion
    #     codigo
    #     tis
    #     receta
    #     receta_tld
    #     unidades
    #     importe_base
    #     importe_iva
    #     importe_pvp
    #     importe_base_total
    #     importe_iva_total
    #     importe_dto_directo
    #     importe_dto_porcentaje
    #     importe_entidad
    #     importe_entidad_total
    #     importe_aportacion
    #     importe_a_pagar
    #     total_recargo_equiv_linea
    #     importe_pendiente
    #     articulo {
    #       stock
    #       ean13
    #       tipo
    #       id
    #       laboratorio {
    #         codigo
    #         descripcion
    #       }
    #     }
    #   }
    # }
    ${queryTPV}
    }
  }
`

export const UPDATEPRICE = gql`
  mutation(
    $carrito_id: Int!
    $articulo_id: Int!
    $importe_pvp: Float!
    $linea: Int!
    $descuento_directo: Float
    $descuento_porcentaje: Float
  ) {
    actualizarPrecioCarrito(
      input: {
        carrito_id: $carrito_id
        articulo_id: $articulo_id
        importe_pvp: $importe_pvp
        linea: $linea
        descuento_directo: $descuento_directo
        descuento_porcentaje: $descuento_porcentaje
      }
    ) {
      id
      importe
      importe_base
      importe_iva
      importe_re
      importe_a_pagar
      cliente_id
      carritoLinea {
        paciente_id
        paciente {
          id
          nombre
          cliente_id
        }
        articulo {
          nombre
          dispensacion {
            controlLibro {
              id
              descripcion
            }
          }
        }
        id
        linea
        venta_tipo_id
        descripcion
        codigo
        unidades
        importe_base_total
        importe_a_pagar
        importe_pvp
        articulo_id
        importe_dto_directo
        importe_dto_porcentaje
      }
    }
  }
`

export const DELETE_PRODUCT_CART = gql`
  mutation($id: ID, $mostrador_id: Int!) {
    borrarArticuloCarrito(id: $id, mostrador_id:$mostrador_id) {
      ${cart}
    }
  }
`

export const CLOSE_SALE = gql`
  mutation($input: FinalizarVentaInput!) {
    finalizarVenta(input: $input) {
      venta {
        id
        codigo
        importe_base
        importe_iva
        importe_a_pagar
        importe_dto
        entregado
        usuario {
          nombre
        }
        devolucion
      }
    }
  }
`

export const FilterProductsByPatient = gql`
  mutation($paciente_id: String!) {
    filtrarDispensaciones(
      first: 100
      input: [{ columna: "paciente_id", filtro: $paciente_id }]
    ) {
      data {
        id
        linea
        fecha_alta
        unidades
        articulo {
          id
          codigo
          descripcion
          nombre
          precio_eur
          laboratorio {
            descripcion
          }
          stock
          tipo
          dispensacion {
            controlLibro {
              id
              descripcion
            }
          }
        }
      }
    }
  }
`

export const GET_PRODUCT = gql`
  query($id: ID!) {
    articulo(id: $id) {
      id
      ean13
      laboratorio {
        nombre
      }
      categoria {
        nombre
      }
      iva
      articuloPrecios {
        precio_coste
        margen
        precio_pvp
        precio_intervenido
      }
      ubicaciones {
        almacenUbicacion {
          nombre_ubicacion
        }
      }
      fecha_alta_consejo
      familia {
        descripcion
      }
      tipo
      codigo_interno
      dispensacion {
        tipoCaducidad {
          descripcion
        }
      }
      fecha_alta_insalud
    }
  }
`

export const CARTS = gql`
  query($first: Int) {
    carritos(first: $first) {
      data {
        id
        fecha_alta
        cliente_id
        carritoLinea {
          id
          articulo_id
          paciente_id
          paciente {
            id
            nombre
            cliente_id
          }
          id
          importe_dto_porcentaje
          linea
          descripcion
          articulo {
            nombre
            dispensacion {
              controlLibro {
                id
                descripcion
              }
            }
          }
          codigo
          unidades
          importe_base
          importe_iva
          importe_pvp
          importe_a_pagar
          venta_tipo_id
        }
        usuario {
          nombre
          nickname
        }
        importe_base
        importe_iva
        importe_a_pagar
        facturado
        codigo
      }
    }
  }
`

export const VERIFICAR_LIBRO_RECETARIO = gql`
  query($id: ID!) {
    articulo(id: $id) {
      dispensacion {
        controlLibro {
          id
          descripcion
        }
      }
    }
  }
`

export const OBTENER_LIBRO_RECETARIO = gql`
  mutation($id: ID!) {
    carritoLibroRecetarios(id: $id) {
      id
      articulo {
        id
        nombre
        descripcion
        dispensacion {
          controlLibro {
            id
          }
        }
      }
      guardar
      dni_comprador
      dni_paciente
      medico
      numero_colegiado
      paciente
      codigo_receta
      cip
      es_veterinario
      numero_receta_estupefaciente
      numero_recetario
    }
  }
`

export const ACTUALIZAR_LIBRO_RECETARIO = gql`
  mutation($input: [ArticuloLibroRecetarioTempInput]) {
    actualizarArticuloLibroRecetarioTemp(input: $input) {
      id
      articulo {
        id
        nombre
      }
      dni_comprador
      dni_paciente
      medico
      numero_colegiado
      paciente
      codigo_receta
      cip
      es_veterinario
      numero_receta_estupefaciente
      numero_recetario
    }
  }
`

export const UPDATE_CLIENT_CART = gql`
  mutation($input: CarritoActualizaClienteInput) {
    actualizarClienteCarrito(input: $input) {
      ${cart}
    }
  }
`

export const SEARCH_CLIENTS = gql`
  mutation($input: FiltrarClientesPacientesInput, $first: Int, $page: Int) {
    filtrarClientesPacientesPaginado(
      input: $input
      first: $first
      page: $page
    ) {
      data {
        nif
        paciente_nif
        paciente_cip
        paciente_nombre
        nombre
        paciente_id
        id
        paciente_codigo
        cip
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

export const GET_ITEM_HISTORY_PRICES = gql`
  query($id: ID!) {
    articulo(id: $id) {
      articuloPrecios {
        id
        precio_pvp
        fecha_alta
        fecha_baja
        articulo {
          codigo
          nombre
          laboratorio {
            origen
          }
          pais {
            codigo_iso
          }
        }
        origen_modificacion
      }
    }
  }
`

export const CHECK_APERTURE_CASHDESK = gql`
  mutation($caja_id: Int!) {
    comprobarAperturaCaja(caja_id: $caja_id) {
      caja {
        id
        codigo
        nombre
        cajaFormaPagos {
          id
          descripcion
          es_efectivo
          es_vale
          marcar_lineas
        }
      }
    }
  }
`

export const FILTER_CARTS = gql`
  mutation($input: FiltrarCarritosInput, $first: Int, $page: Int) {
    filtrarCarritosPaginado(input: $input, first: $first, page: $page) {
      data {
        id
        fecha_alta
        cliente_id
        mostrador {
          id
          nombre
        }
        cliente {
          id
          nombre
          cip
          clienteCuenta {
            saldo
          }
        }
        carritoLinea {
          id
          articulo_id
          paciente_id
          articulo {
            nombre_descripcion
            stock
          }
          paciente {
            id
            nombre
            id
            cliente_id
          }
          carrito {
            id
          }
          importe_dto_porcentaje
          linea
          descripcion
          articulo {
            nombre_descripcion
            dispensacion {
              controlLibro {
                id
                descripcion
              }
            }
          }
          codigo
          unidades
          importe_base
          importe_iva
          importe_pvp
          importe_a_pagar
          venta_tipo_id
        }
        usuario {
          nombre
          nickname
        }
        importe_base
        importe_iva
        importe_a_pagar
        facturado
        codigo
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
      }
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
      }
    }
  }
`

export const BOOK_CART = gql`
  mutation($input: CarritoReservadoHastaInput) {
    reservarCarrito(input: $input) {
      id
    }
  }
`

export const GET_CLIENT = gql`
query($id: ID){
  cliente(id:$id){
    ${client}
  }
}
`

export const DELETE_CLIENT_CART = gql`
  mutation($input: CarritoIdInput) {
    eliminarClienteCarrito(input: $input){
      ${cart}
    }
  }
`

export const SEARCH_PATIENT = gql`
  mutation($input: FiltrarClientesPacientesInput, $first: Int) {
    filtrarClientesPacientesPaginado(input: $input, first: $first) {
      data {
        paciente_codigo
        paciente_id
        paciente_nombre
      }
    }
  }
`

export const SEARCH_SELLS = gql`
  mutation($input: FiltrarVentasInput, $first: Int) {
    filtrarVentasPaginado(input: $input, first: $first) {
      data {
        ${sell}
      }
    }
  }
`

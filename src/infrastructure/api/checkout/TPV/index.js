import { gql } from '@apollo/client'
import { queryTPV } from '../../_variables'

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

export const INSERTAR = gql`
  mutation($input: CarritoInput) {
    insertarArticuloCarrito(input: $input) {
      ${queryTPV}
    }
  }
`

export const UPDATE_STOCK = gql`
mutation ($carrito_id: Int, $mostrador_id: Int!){
  comprobarStockCarrito(input: {
    carrito_id: $carrito_id
    mostrador_id:$mostrador_id
  })
  {
  ${queryTPV}
  }
}

`

export const UPDATE = gql`
  mutation($input: CarritoActualizaCampoInput) {
    actualizarCampoCarrito(input: $input) {
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

export const DELETE_PRODUCT = gql`
  mutation($id: ID, $mostrador_id: Int!) {
    borrarArticuloCarrito(id: $id, mostrador_id: $mostrador_id) {
      ${queryTPV}
    }
  }
`

export const FINISH = gql`
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
        cliente {
          clienteCuenta {
            saldo
          }
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
      orderBy: [{ field: "fecha_alta", order: DESC }]
    ) {
      data {
        id
        linea
        fecha_alta
        unidades
        importe_pendiente
        importe_a_pagar
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
      cif
      ean13
      nombre
      descripcion
      fecha_alta
      tipo
      mensajeAdvertenciaMedicamentos {
        mensajeAdvertencia {
          descripcion
        }
      }
      articuloMultimedia {
        multimedia {
          id
          titulo
          url
          tipoDocumento {
            descripcion
          }
        }
      }
      caducidad {
        id
        descripcion
      }
      dispensacion {
        controlLibro {
          id
          descripcion
        }
        tipo_especialidad
        es_TLD
        necesita_receta
        tipoCaducidad {
          descripcion
        }
        visado {
          requiere_validacion
        }
      }

      composiciones {
        codigo_color
        COMPOUNID
        COMPOMEMO
        COMPOCESP
      }
      laboratorio {
        descripcion
      }
      precio_eur
      forma {
        FFARTIP
        FFARDESL
        FFARDESC
        OBSERV
      }
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
            descripcion
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
      ${queryTPV}
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
          id
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

export const GET_CASHDESK = gql`
  query {
    mostradores {
      data {
        id
        nombre
        descripcion
        cajaMostrador {
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
  }
`

export const OPEN_CHECKOUT = gql`
  mutation($input: AperturaCajaInput) {
    abrirCaja(input: $input) {
      id
    }
  }
`

export const ARQUEO_CHECKOUT = gql`
  mutation($input: ArqueoCajaInput) {
    arquearCaja(input: $input) {
      total_movimientos
      caja {
        id
      }
      detalle_movimientos {
        cajaMovimiento {
          entrada_caja
          operacion
          venta {
            id
            cliente {
              nombre
            }
          }
          salida_caja
          formaPago {
            nombre
            descripcion
            id
          }
        }
      }
      saldo_apertura
      saldo_teorico
      usuario {
        nickname
        id
      }
    }
  }
`

export const CLOSE_CHECKOUT = gql`
  mutation($input: CierreCajaInput) {
    cerrarCaja(input: $input) {
      id
      total_movimientos
      caja {
        id
      }
      detalle_movimientos {
        formaPago {
          descripcion
          id
        }
        cajaMovimiento {
          entrada_caja
          operacion
          venta {
            id
            codigo
          }
          salida_caja
          formaPago {
            nombre
            descripcion
            id
          }
        }
      }
      saldo_apertura
      saldo_teorico
      usuario {
        nickname
      }
    }
  }
`

export const FILTER_SALES = gql`
  mutation($input: FiltrarVentasInput, $first: Int, $page: Int) {
    filtrarVentasPaginado(input: $input, first: $first, page: $page) {
      data {
        id
        cliente_id
        cliente {
          id
          nombre
        }
        usuario {
          nombre
        }
        codigo
        importe_dto
        importe_base
        importe_iva
        importe_re
        importe_a_pagar
        facturado
        fac_cliente_id
        factura_codigo
        devolucion
        entregado
        precio_unidad_medida
        importe_dto_base
        ventaLinea {
          id
          linea
          paciente {
            id
            codigo
            nombre
          }
          venta {
            id
            codigo
          }
          t_especial
          articulo {
            id
            codigo
            nombre_descripcion
          }
          descripcion
          fecha_alta
          unidades
          importe_pvp
          importe_base_total
          importe_dto_directo
          importe_entidad
          importe_entidad_total
          importe_aportacion
          total_recargo_equiv_linea
          importe_pendiente
          importe_pendiente_inicial
          tipo_impuesto_id
          iva_factor
          importe_dto_porcentaje
          tipoImpuesto {
            id
            codigo
          }
        }
        created_at
        updated_at
        deleted_at
        usuarioAlta {
          id
        }
        usuarioModi {
          id
        }
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

export const GET_PAYMENT_METHODS = gql`
  query {
    formasPago {
      data {
        id
        descripcion
        es_efectivo
        es_compensar
        marcar_lineas
      }
    }
  }
`

export const GET_RECIPEBOOK_LIST = gql`
  query {
    listarLibros {
      data {
        id
        descripcion
      }
    }
  }
`

export const GET_SHOW_RECIPEBOOK = gql`
  query($id: ID) {
    mostrarLibro(id: $id) {
      id
      descripcion

      libroRecetarios {
        created_at
        es_veterinario
        id
        articulo {
          nombre
          descripcion
          codigo
          tipo

          dispensacion {
            controlLibro {
              descripcion
            }
            precio_financiado
            tipo_especialidad
          }
        }
        libro {
          numero_recetario
        }
        medico
        numero_colegiado
        paciente
        dni_paciente
        dni_comprador
        codigo_receta
        cip
      }
    }
  }
`

export const CHECKOUT_CASH = gql`
  mutation($input: CajaMovimientoInput) {
    crearCajaMovimiento(input: $input) {
      id
    }
  }
`

export const ACTUAL_CASH = gql`
  mutation($input: CajaInput) {
    obtenerSaldoActualCaja(input: $input) {
      saldo_actual
    }
  }
`

export const CONTRIBUTE_TO_ACCOUNT = gql`
  mutation($input: AportarEnCuentaInput!) {
    aportarEnCuenta(input: $input) {
      id
      cliente_id
      saldo
      totalCredito
    }
  }
`

export const COMPENSAR_EN_CUENTA = gql`
  mutation($input: CompensarDeCuentaInput!) {
    compensarDeCuenta(input: $input) {
      id
      cliente_id
      saldo
      totalCredito
    }
  }
`

export const FILTER_RECIPEBOOK = gql`
  mutation($input: FiltrarLibroRecetarioInput, $first: Int, $page: Int) {
    filtrarLibroRecetarioPaginado(input: $input, first: $first, page: $page) {
      data {
        id
        created_at
        es_veterinario
        id
        articulo {
          nombre_descripcion
          codigo
          tipo

          dispensacion {
            controlLibro {
              descripcion
            }
            precio_financiado
            tipo_especialidad
          }
        }
        libro {
          id
          numero_recetario
        }
        ventaLinea {
          unidades
        }
        medico
        numero_colegiado
        paciente
        dni_paciente
        dni_comprador
        codigo_receta
        cip
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

export const ROUND_OUT = gql`
  mutation($input: CarritoArtEspecialInput) {
    redondearCarrito(input: $input) {
      id
      importe_a_pagar
      importe_base
      importe_iva
      importe_re
      carritoLinea {
        id
        articulo_id
        fecha_caducidad
        receta
        codigo_lote
        paciente {
          id
          nombre
          cliente_id
        }
        importe_dto_directo
        importe_dto_porcentaje
        articulo {
          id
          cif
          ean13
          nombre_descripcion
          numero_registro
          descripcion
          fecha_alta
          tipo
          mensajeAdvertenciaMedicamentos {
            mensajeAdvertencia {
              descripcion
            }
          }
          articuloMultimedia {
            multimedia {
              id
              titulo
              url
              tipoDocumento {
                descripcion
              }
            }
          }
          caducidad {
            id
            descripcion
          }
          dispensacion {
            controlLibro {
              id
              descripcion
            }
            tipo_especialidad
            es_TLD
            necesita_receta
            tipoCaducidad {
              descripcion
            }
            visado {
              requiere_validacion
            }
          }

          composiciones {
            codigo_color
            COMPOUNID
            COMPOMEMO
            COMPOCESP
          }
          laboratorio {
            descripcion
          }
          precio_eur
          forma {
            FFARTIP
            FFARDESL
            FFARDESC
            OBSERV
          }
        }
        linea
        venta_tipo_id
        t_especial
        articulo_id
        descripcion
        codigo
        tis
        receta
        receta_tld
        unidades
        importe_base
        importe_iva
        importe_pvp
        importe_base_total
        importe_iva_total
        importe_dto_directo
        importe_dto_porcentaje
        importe_entidad
        importe_entidad_total
        importe_aportacion
        importe_a_pagar
        total_recargo_equiv_linea
        importe_pendiente
        articulo {
          stock
          ean13
          tipo
          id
          laboratorio {
            codigo
            descripcion
          }
        }
      }
    }
  }
`

export const CHECKOUT = gql`
  mutation($id: ID!) {
    caja(id: $id) {
      id
      codigo
      nombre
      autonoma
      visible
      cajaFormaPagos {
        id
        descripcion
        es_efectivo
        es_vale
        marcar_lineas
        es_compensar
      }
    }
  }
`

export const GET_DESK_COUNTER = gql`
  mutation($id: ID!) {
    mostrador(id: $id) {
      id
      nombre
      almacen {
        id
        nombre
      }
      caja {
        cajaFormaPagos {
          id
          descripcion
          es_efectivo
          es_vale
          marcar_lineas
          es_compensar
        }
        id
        codigo
        almacen {
          id
          nombre
          descripcion
        }
        autonoma
        cajaFormaPagos {
          id
          descripcion
          es_efectivo
          es_vale
          marcar_lineas
        }
      }
      mostradorPeriferico {
        id
        nombre
        IP
      }
      descripcion
    }
  }
`
export const GET_CART = gql`
  query($id: ID){
    carrito(id: $id){
      ${queryTPV}
    }
  }
`

export const DELETE_CART = gql`
  mutation($carrito_id: ID) {
    borrarCarrito(carrito_id: $carrito_id) {
      id
    }
  }
`

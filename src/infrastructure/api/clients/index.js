import { gql } from '@apollo/client'

export const GET_CLIENT_LIST = gql`
  mutation($input: FiltrarClientesPacientesInput, $first: Int, $page: Int) {
    filtrarClientesPacientesPaginado(
      input: $input
      first: $first
      page: $page
    ) {
      data {
        nif
        telefono1
        paciente_nif
        paciente_cip
        paciente_nombre
        nombre
        paciente_id
        id
        paciente_codigo
        cip
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
        cliente_saldo
        cliente_importe_pendiente
        paciente_telefono1
        email
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

export const GET_CLIENT_BALANCE = gql`
  query($cliente_id: ID!) {
    obtenerSaldoCuenta(cliente_id: $cliente_id) {
      saldo
    }
  }
`

export const UPDATE_CLIENTS = gql`
  mutation($id: ID!, $input: ClienteInput) {
    actualizarCliente(id: $id, input: $input) {
      id
      nombre
      domicilio
      localidad_id
      cip
      nif
      telefono1
      email
      fecha_nacimiento
      rpgd_web
      rpgd_spd_tsi
      rpgd_vacunas
      rpgd_formulas
      rpgd_imagenes
      rpgd_facturacion
      rpgd_nutricional
      rpgd_fidelizacion
    }
  }
`

export const GET_MEDICS = gql`
  {
    medicos {
      data {
        nombre
        codigo_colegiado
      }
    }
  }
`

export const FILTER_CLIENTS = gql`
  mutation($input: FiltrarClientesInput, $first: Int, $page: Int) {
    filtrarClientesPaginado(input: $input, first: $first, page: $page) {
      data {
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
        id
        nombre
        fecha_nacimiento
        nif
        cip
        lopd_autorizacion_lopd
        ventas {
          id
        }
        clienteCuenta {
          saldo
        }
        carritos {
          id
        }
      }
    }
  }
`

export const FILTER_PATIENTS = gql`
  mutation($input: FiltrarClientesPacientesInput, $first: Int, $page: Int) {
    filtrarClientesPacientesPaginado(
      input: $input
      first: $first
      page: $page
    ) {
      data {
        id
        nombre
        nif
        cip
        paciente_id
        paciente_nombre
        paciente_nif
        paciente_codigo
        paciente_cip
        cliente_saldo
        cliente_importe_pendiente
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
      }
    }
  }
`

import { gql } from '@apollo/client'

export const GET_LISTING_CLIENT = gql`
  mutation($input: FiltrarClientesInput, $first: Int, $page: Int) {
    filtrarClientesPaginado(input: $input, first: $first, page: $page) {
      data {
        id
        nombre
        cip
        telefono_movil
        email
        fecha_nacimiento
        nif
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

export const GET_PROFILE_CLIENT = gql`
  query($id: ID) {
    cliente(id: $id) {
      id
      nombre
      domicilio
      fecha_nacimiento
      localidad_id
      cip
      email
      nif
      telefono1
      telefono_movil
      usuarioAlta {
        created_at
      }
      poblacion {
        provincia
        poblacion
        codigopostalid
      }
      clienteCuenta {
        saldo
      }
      clienteCredito {
        credito {
          importe_pendiente
        }
      }
      pacientes {
        created_at
      }
    }
  }
`

export const CREATE_CLIENT = gql`
  mutation($input: ClienteInput, $crearPaciente: Boolean) {
    crearCliente(input: $input, crearPaciente: $crearPaciente) {
      id
      nombre
      domicilio
      cip
      nif
      telefono1
      telefono_movil
      sexo
      email
      fecha_nacimiento
      poblacion {
        provincia
        poblacion
        codigopostalid
      }
      clienteCuenta {
        saldo
      }
      clienteCredito {
        credito {
          importe_pendiente
        }
      }
      pacientes {
        cip
        codigo
        id
        nombre
        nif
      }
    }
  }
`

export const DELETE_CLIENT = gql`
  mutation($id: ID!) {
    borrarCliente(id: $id) {
      id
    }
  }
`

export const FILTER_PATIENTS = gql`
  mutation($input: FiltrarPacientesInput) {
    filtrarPacientesPaginado(input: $input) {
      data {
        id
        codigo
        nombre
        fecha_nacimiento
        domicilio
        cip
        nif
        telefono1
        telefono_movil
      }
    }
  }
`
export const CREATE_PATIENT = gql`
  mutation($input: PacienteInput) {
    crearPaciente(input: $input) {
      id
    }
  }
`

export const FILTER_INQUIRIES = gql`
  mutation($input: FiltrarCajaMovimientosInput, $first: Int, $page: Int) {
    filtrarCajaMovimientosPaginado(input: $input, first: $first, page: $page) {
      data {
        id
        operacion
        salida_caja
        entrada_caja
        venta {
          id
          codigo
          importe_a_pagar
        }
        formaPago {
          nombre
          descripcion
        }
        observaciones
        caja {
          nombre
        }
        cajaMovimientoTipo {
          descripcion
        }
        cliente {
          id
        }
        usuario {
          nombre
        }
      }
      paginatorInfo {
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

export const GET_SALDOS = gql`
  query($id: ID) {
    cliente(id: $id) {
      clienteCuenta {
        saldo
        totalCredito
      }
    }
  }
`

export const UPDATE_CUSTOMER = gql`
  mutation($id: ID!, $input: ClienteInput) {
    actualizarCliente(id: $id, input: $input) {
      id
      nombre
      domicilio
      fecha_nacimiento
      localidad_id
      cip
      email
      telefono1
      telefono_movil
      poblacion {
        provincia
        poblacion
        codigopostalid
      }
      clienteCuenta {
        saldo
      }
      clienteCredito {
        credito {
          importe_pendiente
        }
      }
      pacientes {
        created_at
      }
    }
  }
`

export const UPDATE_PATIENT = gql`
  mutation($id: ID, $input: PacienteInput) {
    actualizarPaciente(id: $id, input: $input) {
      id
    }
  }
`

import { gql } from '@apollo/client'

export const GET_LABS = gql`
  query {
    laboratoriosP(first: 100, page: 1) {
      data {
        id
        codigo
        descripcion
        email
        telefono
        fax
      }
    }
  }
`

export const GET_LAB = gql`
  query($id: ID!) {
    laboratorioP(id: $id) {
      id
      tipo
      codigo_ss
      nombre
      web
      proveedor {
        descripcion
      }
      direcciones {
        id
        direccion
        codigo_postal
        provincia
        localidad
        pais
        origen
      }
      contactos {
        id
        nombre
        cargo
        telefono
        telefono_movil
        email
      }
    }
  }
`

export const GET_LAB_LIST = gql`
  mutation($input: FiltrarLaboratoriosPInput, $first: Int, $page: Int) {
    filtrarLaboratoriosPPaginado(input: $input, first: $first, page: $page) {
      paginatorInfo {
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
        count
      }
      data {
        id
        codigo_ss
        nombre
        tipo
        proveedor {
          descripcion
        }
        web
        pais {
          nombre
        }
      }
    }
  }
`

export const CREATE_LAB = gql`
  mutation($input: LaboratorioPInput) {
    crearLaboratorioP(input: $input) {
      id
    }
  }
`

export const CREATE_LAB_ADDRESSS = gql`
  mutation($input: LaboratorioDireccionInput) {
    crearLaboratorioDireccion(input: $input) {
      id
    }
  }
`

export const DELETE_LAB_ADDRESSS = gql`
  mutation($id: ID!) {
    borrarLaboratorioDireccion(id: $id) {
      id
    }
  }
`

export const GET_LAB_ADDRESS_LIST = gql`
  query($id: ID!) {
    laboratorioP(id: $id) {
      direcciones {
        id
        direccion
        codigo_postal
        provincia
        localidad
        pais
        origen
      }
    }
  }
`

export const CREATE_LAB_CONTACT = gql`
  mutation($input: LaboratorioContactoInput) {
    crearLaboratorioContacto(input: $input) {
      id
    }
  }
`

export const DELETE_LAB_CONTACT = gql`
  mutation($id: ID!) {
    borrarLaboratorioContacto(id: $id) {
      id
    }
  }
`

export const GET_LAB_CONTACT_LIST = gql`
  query($id: ID!) {
    laboratorioP(id: $id) {
      contactos {
        id
        nombre
        cargo
        telefono
        telefono_movil
        email
      }
    }
  }
`

export const EDIT_LAB = gql`
  mutation($id: ID!, $input: LaboratorioPInput) {
    actualizarLaboratorioP(id: $id, input: $input) {
      id
    }
  }
`

export const DELETE_LAB = gql`
  mutation($id: ID!) {
    borrarLaboratorioP(id: $id) {
      id
    }
  }
`

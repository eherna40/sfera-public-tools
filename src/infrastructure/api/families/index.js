import { gql } from '@apollo/client'

export const GET_SUPERFAMILIES = gql`
  query {
    superFamilias(orderBy: [{ field: "id", order: ASC }]) {
      id
      codigo
      descripcion
      familias {
        super_id
        id
        codigo
        descripcion
        subfamilias {
          id
          codigo
          descripcion
        }
      }
    }
  }
`

export const UPDATE_SUPERFAMILY = gql`
  mutation($id: ID, $input: SuperFamiliaInput) {
    actualizarSuperFamilia(id: $id, input: $input) {
      id
      codigo
      descripcion
    }
  }
`

export const GET_FAMILIES = gql`
  query {
    familias(orderBy: [{ field: "id", order: ASC }]) {
      id
      codigo
      descripcion
      super_id
      subfamilias {
        id
        codigo
        descripcion
      }
    }
  }
`

export const CREATE_SUPERFAMILY = gql`
  mutation($input: SuperFamiliaInput) {
    crearSuperFamilia(input: $input) {
      id
      codigo
      descripcion
    }
  }
`

export const DELETE_FAMILY = gql`
  mutation($id: ID!) {
    borrarFamilia(id: $id) {
      id
      codigo
      descripcion
    }
  }
`

export const CREATE_FAMILY = gql`
  mutation($input: FamiliaInput) {
    crearFamilia(input: $input) {
      id
      codigo
      descripcion
    }
  }
`

export const CREATE_SUBFAMILY = gql`
  mutation($input: SubFamiliaInput) {
    crearSubFamilia(input: $input) {
      id
      codigo
      descripcion
    }
  }
`

export const UPDATE_FAMILY = gql`
  mutation($id: ID, $input: FamiliaInput) {
    actualizarFamilia(id: $id, input: $input) {
      id
      codigo
      descripcion
    }
  }
`

export const UPDATE_SUBFAMILY = gql`
  mutation($id: ID, $input: SubFamiliaInput) {
    actualizarSubFamilia(id: $id, input: $input) {
      id
      codigo
      descripcion
    }
  }
`

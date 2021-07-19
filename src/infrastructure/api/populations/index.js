import { gql } from '@apollo/client'

export const GET_POPULATIONS = gql`
  query($provincia_id: Int) {
    poblacionesP(provincia_id: $provincia_id) {
      data {
        id
        poblacion
        codigopostalid
      }
    }
  }
`

export const GET_PROVINCES = gql`
  {
    provinciasP(page: 1, first: 999) {
      data {
        id
        descripcion
      }
    }
  }
`

export const GET_COUNTRIES = gql`
  {
    paisesP(page: 1, first: 999) {
      data {
        id
        nombre
      }
    }
  }
`

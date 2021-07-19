import { gql } from '@apollo/client'
import { cashDesk } from '../_variables/index'

export const GET_ACTIVE_CASH_DESK = gql`
  mutation($input: CajonActivoInput) {
    cajonActivo(input: $input) {
      ${cashDesk}
    }
  }
`

export const OPEN_CASH_DESK = gql`
  mutation($input: AperturaCajonInput) {
    abrirCajon(input: $input) {
      id
    }
  }
`

export const COMPROBAR_APERTURA_CAJON = gql`
  mutation($cajon_id: Int!) {
    comprobarAperturaCajon(cajon_id: $cajon_id) {
      id
    }
  }
`

// export const GET_COUNTER = gql`
// query($id:ID!){
//   mostrador(id:$id){
//     ${counter}
//   }
// }
// `

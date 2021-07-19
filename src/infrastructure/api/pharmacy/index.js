import { gql } from '@apollo/client'
import { pharmacy } from './variables'

export const UPDATE_PHARACY = gql`
mutation($id: ID, $input: FarmaciaInput){
  actualizarFarmacia(id: $id, input: $input){
        ${pharmacy}
  }
}

`

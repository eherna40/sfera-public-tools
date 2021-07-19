import { gql } from '@apollo/client'

export default gql`
  {
    pacientes(first: 100) {
      data {
        id
        codigo
        nombre
        domicilio
        localidad
        cip
        nif
        es_pensionista
        telefono1
        telefono2
        movil
        email
        sexo
        fidel_codigo
        created_at
        puntos
      }
    }
  }
`

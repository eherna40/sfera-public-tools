import { gql } from '@apollo/client'

export default gql`
  mutation(
    $codigo: String!
    $nombre: String!
    $domicilio: String!
    $localidad: String!
    $cip: String!
    $nif: String!
    $es_pensionista: Boolean!
    $telefono1: String
    $telefono2: String
    $movil: String
    $email: String
  ) {
    crearPaciente(
      input: {
        codigo: $codigo
        nombre: $nombre
        domicilio: $domicilio
        localidad: $localidad
        cip: $cip
        nif: $nif
        telefono1: $telefono1
        telefono2: $telefono2
        movil: $movil
        email: $email
        es_pensionista: $es_pensionista
        fecha_nacimiento: "2017-10-06"
        sexo: "masculino"
      }
    ) {
      nombre
      email
    }
  }
`

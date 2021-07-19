import { gql } from '@apollo/client'

export default gql`
  query($nombre: String!) {
    filtrarPacientes(nombre: $nombre) {
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
`

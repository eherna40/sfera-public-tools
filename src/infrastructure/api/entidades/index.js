import { gql } from '@apollo/client'

export const GETENTITIES = gql`
  {
    entidadesP {
      id
      created_at
      descripcion
      tipo_regimenes {
        id
        descripcion
      }
    }
  }
`

export const LIST_ENTITIES = gql`
  query {
    listarEntidades {
      id
      nombre
      cif
      organismo {
        nombre
      }
      es_mutua
      control_tsi
      control_genericos
      impresion_vertical
      control_doe
      receta_electronica
      precio_fijo
      cicero_aportacion
      cicero_maximo
      receta_comunicar_ventas
      receta_comunicar_mutuas
      regimenEntidad {
        nombre
        aportacion
        aportacion_maxima
        recetas_por_paquete
        impresion_paquete
        paquete_venta
        tipoRegimen {
          descripcion
        }
        precio_unico
      }
    }
  }
`
export const FILTER_ENTITIES = gql`
  mutation($input: FiltrarEntidadesPInput, $first: Int, $page: Int) {
    filtrarEntidadesPPaginado(input: $input, first: $first, page: $page) {
      data {
        descripcion
        provincias {
          descripcion
        }
        tipo_regimenes {
          descripcion
        }
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
      }
    }
  }
`

// export const LIST_ORGS = gql``

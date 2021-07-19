import { gql } from '@apollo/client'
import { fields } from './variables'

export const GET_PRODUCT_DETAILS = gql`
  query($id: ID!) {
    articuloBotPlus(id: $id) {
      ${fields}
    }
  }
`

export const GET_PRODUCT = gql`
  query($id: ID!) {
    articulo(id: $id) {
      dispensacion {
        id
        origen_catalogo
        codigo
        comunidad {
          id
          nombre
        }
        pais {
          id
          nombre
        }
        tipoCaducidad {
          id
          descripcion
        }
      }
      articuloAlmacen {
        stock_total
        stock_minimo
        stock_maximo
      }
      codigo
      ubicaciones {
        id
        stock
        almacenUbicacion {
          nombre_ubicacion
        }
      }
      precio {
        precio_pvp
      }
      nombre_descripcion
      stock
    }
  }
`

export const LISTAR_ANOTACIONES = `
query($articulo_id: !ID!){
  id
  mensaje
  mostrar
}
`

export const GET_LABS = gql`
  query($id: ID!) {
    articulo(id: $id) {
      laboratorio {
        nombre
      }
      numero_registro
      proveedor {
        id
        descripcion
      }
    }
  }
`

export const TIPO_DISPENSACION = gql`
  query($id: ID!) {
    articulo(id: $id) {
      dispensacion {
        es_autorizado_web
        tipoSustitucion {
          id
          descripcion
        }
        conservacion {
          id
          descripcion
        }
        origen_catalogo
        tipoCaducidad {
          descripcion
          id
        }
      }
    }
  }
`

export const LISTAR_CODIGOS_SEGUNDARIOS = gql`
  query($id: ID!) {
    articulo(id: $id) {
      codigosSecundarios {
        id
        codigo
        descripcion
        created_at
      }
    }
  }
`

export const ENTIDADMUTUAS = gql`
  query($id: ID!) {
    articulo(id: $id) {
      envases_maximos
      fecha_exclusion_insalud
      dispensacion {
        es_TLD
        es_SEVEM
        necesita_receta
        tipoPaquete {
          id
          descripcion
        }
        tipoAportacion {
          id
          descripcion
        }
      }
    }
  }
`

export const GET_LISTING = gql`
  mutation($first: Int, $page: Int, $input: FiltrarArticulosInput) {
    filtrarArticulosPaginado(page: $page, first: $first, input: $input) {
      paginatorInfo {
        lastItem
        lastPage
        total
        count
        hasMorePages
        perPage
        firstItem
        currentPage
      }
      data {
        agrupacion_columna
        agrupacion_valor
        agrupacion_total
        id
        codigo
        nombre_descripcion
        precio {
          precio_pvp
        }
        tipo
        precio_eur
        articuloAlmacen {
          stock_total
        }
        laboratorio {
          nombre
        }
      }
    }
  }
`

export const GET_PRODUCT_INFO = gql`
  query($id: ID!) {
    articulo(id: $id) {
      tipo
      familia {
        id
        familias {
          id
        }
        subfamilias {
          id
        }
        superFamilia {
          id
        }
      }
    }
  }
`

export const GET_PRODUCT_HOMOGENEOUS_GROUP = gql`
  query($id: ID!) {
    articulo(id: $id) {
      grupoHomogeneo {
        id
        codigo_conjunto
        codigo_homogeneo
        nombre
        precio_menor
        precio_mas_bajo
      }
      precio_referencia_iva
      dispensacion {
        precio_financiado
      }
    }
  }
`

export const GET_PRODUCT_BUSINESS_INTELLIGENCE = gql`
  query($id: ID!) {
    articulo(id: $id) {
      categoria {
        id
        nombre
      }
    }
  }
`

export const GET_PRODUCT_PRICE_LABELS = gql`
  query($id: ID!) {
    articulo(id: $id) {
      envase_medida
      precio_eur
    }
  }
`

export const GET_PRODUCT_ALTERNATIVE_CODES = gql`
  query($id: ID!) {
    articulo(id: $id) {
      codigosSecundarios {
        id
        codigo
        descripcion
      }
    }
  }
`

export const GET_PRODUCT_APPEARANCE = gql`
  query($id: ID!) {
    articulo(id: $id) {
      forma {
        id
        descripcion_corta
        descripcion_larga
      }
    }
  }
`

export const GET_PRODUCT_UNIT_DETAILS = gql`
  query($id: ID!) {
    articulo(id: $id) {
      dispensacion {
        id
        origen_catalogo
        codigo
        comunidad {
          id
          nombre
        }
        pais {
          id
          nombre
        }
        tipoCaducidad {
          id
          descripcion
        }
      }
      ubicaciones {
        id
        stock
        almacenUbicacion {
          nombre_ubicacion
        }
      }
    }
  }
`

// export const GET_PRODUCT = gql`
//   query($id: ID!) {
//     articulo(id: $id) {
//       tipo
//       precio {
//         precio_pvp
//       }
//       envases_maximos
//       nombre_descripcion
//       stock
//       fecha_exclusion_insalud
//       codigo
//       envases_maximos
//       laboratorio {
//         nombre
//       }
//       dispensacion {
//         precio_financiado
//         es_TLD
//         tipoSustitucion {
//           id
//           descripcion
//         }
//         origen_catalogo
//         es_autorizado_web
//         tipo_paquete_ss_id
//         es_SEVEM
//         necesita_receta
//         controlLibro {
//           id
//         }
//         tipoAportacion {
//           id
//           descripcion
//         }
//       }
//       grupoHomogeneo {
//         id
//         codigo_conjunto
//         codigo_homogeneo
//         nombre
//         precio_menor
//         precio_mas_bajo
//       }
//       precio_referencia_iva
//       categoria {
//         id
//         nombre
//       }
//       codigosSecundarios {
//         id
//         codigo
//         descripcion
//       }
//       envase_medida
//       forma_expresion_id
//       descripcion
//       familia {
//         id
//         familias {
//           id
//         }
//         subfamilias {
//           id
//         }
//         superFamilia {
//           id
//         }
//       }
//     }
//   }
// `

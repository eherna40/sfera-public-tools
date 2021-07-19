export const articleP = `
  id
  nombre_descripcion
  stock
  numero_registro
`

export const patiente = `
  id
  nombre
`

export const lineCart = `
  id
  descripcion
  codigo
  articulo {
    ${articleP}
  }
  importe_pvp
  importe_a_pagar
  importe_dto_directo
  importe_dto_porcentaje
  paciente {
    ${patiente}
  }
  unidades
  linea
  tipoVenta {
    id
    descripcion
  }
`

export const sell = `  
  ventaLinea {
    ${lineCart}
  }
  created_at
  usuario {
    nombre
    nickname
  }
  facturado
  importe_a_pagar
`

export const client = `
  id
  nombre
  clienteCuenta {
    id
    saldo
    totalCredito
  }
  ventas {
    ${sell}
  }
  pacientes{
    id
    codigo
    nombre
  }
`

export const cart = `
  id
  cliente {
    ${client}
  }
  importe_a_pagar
  importe_base
  carritoLinea {
    ${lineCart}
    }
`

export const queryTPV = `
      id
      importe_a_pagar
      importe_base
      importe_iva
      importe_re
      importe_a_pagar
      cliente_id
      cliente{
        id
        nombre
        cip
        nif
        clienteCuenta{
          id
          saldo
          totalCredito
        }
      }
      carritoLinea {
        id
        articulo_id
        paciente {
          id
          nombre
          cliente_id
          nif
          cip
        }
        importe_base_total
        importe_dto_directo
        importe_dto_porcentaje
        articulo {
          id
          cif
          ean13
          nombre_descripcion
          numero_registro
          fecha_alta
          tipo
          mensajeAdvertenciaMedicamentos {
            mensajeAdvertencia {
              descripcion
            }
          }
          articuloMultimedia {
            multimedia {
              id
              titulo
              url
              tipoDocumento {
                descripcion
              }
            }
          }
          caducidad {
            id
            descripcion
          }
          dispensacion {
            controlLibro {
              id
              descripcion
            }
            tipo_especialidad
            es_TLD
            necesita_receta
            tipoCaducidad {
              descripcion
            }
            visado {
              requiere_validacion
            }
          }

          composiciones {
            codigo_color
            COMPOUNID
            COMPOMEMO
            COMPOCESP
          }
          laboratorio {
            descripcion
          }
          precio_eur
          forma {
            FFARTIP
            FFARDESL
            FFARDESC
            OBSERV
          }
        }
        linea
        venta_tipo_id
        t_especial
        articulo_id
        descripcion
        codigo
        tis
        receta
        receta_tld
        unidades
        importe_base
        importe_iva
        importe_pvp
        importe_base_total
        importe_iva_total
        importe_dto_directo
        importe_dto_porcentaje
        importe_entidad
        importe_entidad_total
        importe_aportacion
        importe_a_pagar
        total_recargo_equiv_linea
        importe_pendiente
        articulo {
          nombre_descripcion
          stock
          ean13
          tipo
          id
          laboratorio {
            codigo
            descripcion
          }
        }
}`

export const warehouse = `
  id
  nombre
  principal
  descripcion
`

export const counter = `
  id
  nombre
  almacen { 
    ${warehouse}
  }
`

export const paymentType = `
  id
  descripcion
`

export const cashDesk = `
  id
  codigo
  nombre
  almacen { 
    ${warehouse}
  }  
  id_dispensador
  cajonFormaPago {
    ${paymentType}
  }
  mostrador{
    ${counter}
  }
  saldo_actual
`

export const openCashDesk = `
  id
  cajon {
    ${cashDesk}
  }
  usuario {
    id
  }
  saldo_apertura
  observaciones
  created_at
  updated_at
  usuarioModi
`

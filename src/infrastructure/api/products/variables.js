export const fields = `
id
id_unico
numero_registro
ean13
nombre
tipo
fecha_alta_insalud
fecha_exclusion_insalud
fecha_baja_sanidad
laboratorio {
  nombre
}
atc5 {
    descripcion
  }
  composicion {
    codigo_color
activo {
nombre
codigo_cas
}
unidad_medida
id
observaciones
}
  precio_laboratorio
  precio_referencia_iva
  precio_sin_iva
  precio_eur
    preciosFuturos {
      precio_iva_futuro
      fecha_entrada_vigor
    }
    grupoHomogeneo{
      precio_menor 
      precio_mas_bajo_futuro
    }
  
    datosFarmaceuticos {
      id
      valor {
        id
        descripcion
      }
    }
    advertencia {
      id
      mensaje {
        descripcion
      }
    }
    sustituciones {
      id
      anterior {
        id
        nombre
      }
      sucesor {
        id
        nombre
      }
    }
   historicos {
    id
    fecha
    motivo {
      id
      tipo
      descripcion
    }
  }
`

// principiosActivos{
//   id
//   nombre
// }
// Esta query da el siguiente error, a pesar de que en playground sí sale principiosActivos dentro de ArticuloBotPlus
// "reason": "Cannot query field \"principiosActivos\" on type \"ArticuloBotPlus\". Did you mean \"preciosFuturos\"?",

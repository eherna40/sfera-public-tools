import React, { useState } from 'react'
import './Info.scss'

import noExistInsideArticleMaster from '../../../assets/img/gridIcons/ic_info_stock_no_esta.svg'
import substituted from '../../../assets/img/gridIcons/ic_info_sustitucion.svg'
import IcInfoAlerta from '../../../assets/img/gridIcons/ic_info_alerta.svg'
import IcInfoEfg from '../../../assets/img/gridIcons/ic_info_efg.svg'
import IcInfoRojo from '../../../assets/img/gridIcons/ic_info_rojo.svg'
import IcInfoNaranja from '../../../assets/img/gridIcons/ic_info_naranja.svg'
import IcInfoVerde from '../../../assets/img/gridIcons/ic_info_verde.svg'
import IcInfoEreceta from '../../../assets/img/gridIcons/ic_info_ereceta.svg'
import IcInfoErecetaAnulada from '../../../assets/img/gridIcons/ic_info_ereceta_anulada.svg'
import IcInfoRecetaDispensada from '../../../assets/img/gridIcons/ic_info_receta_dispensada.svg'
import IcInfoErecetaNotificada from '../../../assets/img/gridIcons/ic_info_ereceta_notificada.svg'
import IcInfoEuro from '../../../assets/img/gridIcons/ic_info_euro.svg'
import IcInfoEuroRojo from '../../../assets/img/gridIcons/ic_info_euro_rojo.svg'
import IcInfoIncompleto from '../../../assets/img/gridIcons/ic_info_incompleto.svg'
import IcInfoInteraccion from '../../../assets/img/gridIcons/ic_info_interaccion.svg'
import IcInfoLibroRecetario from '../../../assets/img/gridIcons/ic_info_libro_recetario.svg'
import IcInfoOperacionEspecial from '../../../assets/img/gridIcons/ic_info_operacion_especial.svg'
import IcInfoPedComEncargo from '../../../assets/img/gridIcons/ic_info_pedcom_encargo.svg'
import IcInfoPedComG from '../../../assets/img/gridIcons/ic_info_pedcom_g.svg'
import IcInfoPedcomOfertas from '../../../assets/img/gridIcons/ic_info_pedcom_ofertas.svg'
import IcInfoPedcomIncidencia from '../../../assets/img/gridIcons/ic_info_pedcom_incidencia.svg'
import IcInfoPedcomLapiz from '../../../assets/img/gridIcons/ic_info_pedcom_lapiz.svg'
import IcInfoPedcomOjo from '../../../assets/img/gridIcons/ic_info_pedcom_ojo.svg'
import IcInfoStockHay from '../../../assets/img/gridIcons/ic_info_stock_hay.svg'
import IcInfoStockNoHay from '../../../assets/img/gridIcons/ic_info_stock_no_hay.svg'
import IcInfoTraeraReceta from '../../../assets/img/gridIcons/ic_info_traera_receta.svg'
import IcInfoDevolucion from '../../../assets/img/gridIcons/ic_info_devolucion.svg'
import IcInfoTablaNoMicroficha from '../../../assets/img/gridIcons/ic_info_tabla_no_microficha.svg'
import IcInfoTablaMicroficha from '../../../assets/img/gridIcons/ic_info_tabla_microficha.svg'
import IcInfoTablaOfertaCompra from '../../../assets/img/gridIcons/ic_info_tabla_oferta_compra.svg'
import IcInfoTablaOferta from '../../../assets/img/gridIcons/ic_info_tabla_oferta.svg'
import IcInfoRobotLila from '../../../assets/img/gridIcons/ic_info_robot_lila.svg'
import IcInfoRobotNaranja from '../../../assets/img/gridIcons/ic_info_robot_naranja.svg'
import IcInfoRobotNegro from '../../../assets/img/gridIcons/ic_info_robot_negro.svg'
import IcInfoRobotRojo from '../../../assets/img/gridIcons/ic_info_robot_rojo.svg'
import IcInfoRobotVerde from '../../../assets/img/gridIcons/ic_info_robot_verde.svg'
import IcInfoProveedorPrdeterminado from '../../../assets/img/gridIcons/ic_info_proveedor_predeterminado.svg'
import IcInfoPmBajo from '../../../assets/img/gridIcons/ic_info_pm_bajo.svg'
import IcInfoPmAlto from '../../../assets/img/gridIcons/ic_info_pm_alto.svg'
import IcInfoDescuento from '../../../assets/img/gridIcons/ic_info_descuento.svg'
import IcInfoEreetaPendiente from '../../../assets/img/gridIcons/ic_info_ereceta_pendiente.svg'
import IcInfoIntervalo from '../../../assets/img/gridIcons/ic_info_intervalo.svg'
import IcInfoMedidasDieteticas from '../../../assets/img/gridIcons/ic_info_medidas_dieteticas.svg'
import IcInfoRiesgosSobredosis from '../../../assets/img/gridIcons/ic_info_riesgo_sobredosis.svg'
import IcInfoRecetaPapel from '../../../assets/img/gridIcons/ic_info_receta_papel.svg'
import IcInfoRecetaPapelPensionista from '../../../assets/img/gridIcons/ic_info_receta_papel_pensionista.svg'
import IcInfoGenericoFinanciadoG from '../../../assets/img/gridIcons/ic_info_generico_financiado_g.svg'
import IcInfoGenericoNoFinanciadoG from '../../../assets/img/gridIcons/ic_info_generico_no_financiado_g.svg'
import IcInfoGenericoG from '../../../assets/img/gridIcons/ic_info_generico_g.svg'

import IcInfoGenericoFinanciadoM from '../../../assets/img/gridIcons/ic_info_generico_financiado_m.svg'
import IcInfoGenericoNoFinanciadoM from '../../../assets/img/gridIcons/ic_info_generico_no_financiado_m.svg'
import IcInfoGenericoM from '../../../assets/img/gridIcons/ic_info_generico_m.svg'
import IcInfoLimitadoFinanciadoN from '../../../assets/img/gridIcons/ic_info_limitado_financiado_n.svg'
import IcInfoLimitadoNoFinanciadoN from '../../../assets/img/gridIcons/ic_info_limitado_no_financiado_n.svg'
import IcInfoLimitadoN from '../../../assets/img/gridIcons/ic_info_limitado_n.svg'

import IcInfoPmaxFinanciadoA from '../../../assets/img/gridIcons/ic_info_pmax_financiado_a.svg'
import IcInfoPmaxNoFinanciadoA from '../../../assets/img/gridIcons/ic_info_pmax_no_financiado_a.svg'
import IcInfoPmaxA from '../../../assets/img/gridIcons/ic_info_pmax_a.svg'
import IcInfoSiConsejos from '../../../assets/img/gridIcons/ic_info_si_consejos.svg'
import IcInfoNoConsejos from '../../../assets/img/gridIcons/ic_info_no_consejos.svg'
import IcInfoLineaRegalo from '../../../assets/img/gridIcons/ic_info_linea_regalo.svg'

import IcInfoPromoNoCompatible from '../../../assets/img/gridIcons/ic_info_promo_no_compatible.svg'
import IcInfoPromoCompatible from '../../../assets/img/gridIcons/ic_info_promo_compatible.svg'
import IcInfoMonodosis from '../../../assets/img/gridIcons/ic_info_monodosis.svg'
import IcInfoMultialmacen from '../../../assets/img/gridIcons/ic_info_multialmacen.svg'
import IcInfoRecetaPA from '../../../assets/img/gridIcons/ic_info_receta_PA.svg'
import IcInfoRecetaCN from '../../../assets/img/gridIcons/ic_info_receta_CN.svg'

import IcInfoPendienteReceta from '../../../assets/img/gridIcons/ic_info_pendiente_receta.svg'
import IcInfoStockControlPendiente from '../../../assets/img/gridIcons/ic_info_stock_control_pendiente.svg'
import IcInfoNoDispensable from '../../../assets/img/gridIcons/ic_info_no_dispensable.svg'
import IcInfoNoFinanciable from '../../../assets/img/gridIcons/ic_info_no_financiable.svg'
import { ModalIConsLegend } from '../ModalIconsLegend/ModalIConsLegend'

const legendIcons = [
  {
    name: 'Información alerta',
    img: IcInfoAlerta,
    description: 'Aparce en pedidos y Recetas',
  },
  {
    name: 'EFG',
    img: IcInfoEfg,
    description: 'El producto es un EFG',
  },
  {
    name: 'En Elaboración',
    img: IcInfoRojo,
    description: 'La línea esta en elaboración',
  },
  {
    name: 'Pedido',
    img: IcInfoNaranja,
    description: 'La línea esta pedida pero recibida',
  },
  {
    name: 'Pedido y recibido',
    img: IcInfoVerde,
    description: 'La línea esta pedida y recibida',
  },
  {
    name: 'En Elaboración',
    img: IcInfoRojo,
    description: 'La línea esta en elaboración',
  },
  {
    name: 'Receta Electrónica',
    img: IcInfoEreceta,
    description: 'Línea de receta electrónica',
  },
  {
    name: 'Receta Electrónica Anulada',
    img: IcInfoErecetaAnulada,
    description: 'Devolución de la línea de receta electrónica',
  },
  {
    name: 'Receta Electrónica Dispensada',
    img: IcInfoRecetaDispensada,
    description: 'Línea de receta electrónica dispensada en contingencia',
  },
  {
    name: 'Receta Electrónica Notificada',
    img: IcInfoErecetaNotificada,
    description: 'Línea de receta electrónica de contingencia notificada',
  },
  {
    name: 'Dispensable',
    img: IcInfoVerde,
    description: 'Línea dispensable',
  },
  {
    name: 'Con Incidencia',
    img: IcInfoRojo,
    description: 'Línea con incidencia',
  },
  {
    name: 'A Crédito',
    img: IcInfoEuro,
    description: 'Cobro crédito',
  },
  {
    name: 'Apuntado a Crédito',
    img: IcInfoEuroRojo,
    description: 'Apuntado a crédito',
  },
  {
    name: 'Incompleto',
    img: IcInfoIncompleto,
    description: 'Línea incompleta: falta algo',
  },
  {
    name: 'Con Interacción',
    img: IcInfoInteraccion,
    description: 'Las líneas con el icono interaccionan entre ellas',
  },
  {
    name: 'Libro de recetas',
    img: IcInfoLibroRecetario,
    description: 'El artículo requiere libro recetario',
  },
  {
    name: 'Operación especial',
    img: IcInfoOperacionEspecial,
    description: 'Línea con una operación especial: 110 o 220 ',
  },
  {
    name: 'Encargo',
    img: IcInfoPedComEncargo,
    description: 'La línea es un encargo',
  },
  {
    name: 'Guardado en otro pedido',
    img: IcInfoPedComG,
    description: 'La línea esta guardada en otro pedido',
  },
  {
    name: 'Con ofertas',
    img: IcInfoPedcomOfertas,
    description: 'La línea tiene ofertas de compra',
  },
  {
    name: 'Con falta bidireccional',
    img: IcInfoPedcomIncidencia,
    description: 'La línea es una falta bidirecional',
  },
  {
    name: 'Con precio aceptado',
    img: IcInfoPedcomLapiz,
    description: 'La línea con precio aceptado',
  },
  {
    name: 'Revisar precio',
    img: IcInfoPedcomOjo,
    description:
      'Línea revisar precio. El PVP calculo es superior o inferior al pvp ficha',
  },
  {
    name: 'Con Stock',
    img: IcInfoStockHay,
    description: 'El artículo de la línea tiene stock',
  },
  {
    name: 'Artíuclo sin stock',
    img: IcInfoStockNoHay,
    description: 'El artículo de la línea no tiene stock',
  },
  {
    name: 'Traerá receta',
    img: IcInfoTraeraReceta,
    description: 'La línea marcada como traerá receta',
  },
  {
    name: 'Con Devolución',
    img: IcInfoDevolucion,
    description: 'La línea marcada como devolución',
  },
  {
    name: 'Sin Información Coste',
    img: IcInfoTablaNoMicroficha,
    description:
      'No hay información del P. Coste del mayorista del artículo de la línea',
  },
  {
    name: 'Precio Microficha',
    img: IcInfoTablaMicroficha,
    description: 'Precio de la microficha',
  },
  {
    name: 'Precio última compra',
    img: IcInfoTablaOfertaCompra,
    description: 'Precio de la ultima compra',
  },
  {
    name: 'Con oferta de venta',
    img: IcInfoTablaOferta,
    description: 'Producto con oferta de venta',
  },
  {
    name: 'Dispensación en curso',
    img: IcInfoRobotLila,
    description: 'Dispensación en curso de robot.',
  },
  {
    name: 'Parcialmente servido',
    img: IcInfoRobotNaranja,
    description: 'Parcialmente servido de robot',
  },
  {
    name: 'Artículo de robot',
    img: IcInfoRobotNegro,
    description: 'Artículo de robot',
  },
  {
    name: 'Falta de stock',
    img: IcInfoRobotRojo,
    description: 'No servido por falta de stock de robot',
  },
  {
    name: 'Servido',
    img: IcInfoRobotVerde,
    description: 'Servido de robot',
  },
  {
    name: 'Artículo proveedor',
    img: IcInfoProveedorPrdeterminado,
    description: 'Artículo predeterminado del proveedor',
  },
  {
    name: 'Precio menor bajo',
    img: IcInfoPmBajo,
    description: 'Significa que el precio menor es mas bajo',
  },
  {
    name: 'Precio menor alto',
    img: IcInfoPmAlto,
    description: 'Significa que el precio menor es más alto',
  },
  {
    name: 'Artículo de robot',
    img: IcInfoDescuento,
    description:
      'Descuento en la línea, bien por haberse introducido manualmente o automáticamente debido a redondeos sobre el importe total de la venta',
  },
  {
    name: 'Receta electrónica pendiente',
    img: IcInfoEreetaPendiente,
    description:
      'La receta correspondiente a dicha línea queda pendiente de entrega, ya sea el cobro actual o diferido.',
  },
  {
    name: 'Pendiente modificar intervalo',
    img: IcInfoIntervalo,
    description:
      'Hay que modificar el intervalo de administración, según consta en el Bot Plus del C.G.C.O.F',
  },
  {
    name: 'Medidas dietéticas',
    img: IcInfoMedidasDieteticas,
    description:
      'Hay que tomar medidas dietéticas, según consta en el Bot Plus del C.G.C.O.F',
  },
  {
    name: 'Riesgo de sobredosis',
    img: IcInfoRiesgosSobredosis,
    description:
      'Riesgo de sobredosis por estar dispensando varios artículos con el principio activo, según consta en el Bot Plus del C.G.C.O.F.',
  },
  {
    name: 'Tiene receta papel',
    img: IcInfoRecetaPapel,
    description:
      'Línea es de venta con receta, teniendo el usuario que pagar una aportación (no es pensionista).',
  },
  {
    name: 'Con receta pensionista',
    img: IcInfoRecetaPapelPensionista,
    description:
      'Línea es de venta con receta de pensionista, es decir, el usuario no ha de pagar ningún importe.',
  },
  {
    name: 'Genérico financiado ',
    img: IcInfoGenericoFinanciadoG,
    description:
      'El artículo está incluido en un Conjunto Homogéneo, que es financiable a P.V.P. y que su P.V.P. de ficha no supera al precio de referencia fijado para dicho grupo.',
  },
  {
    name: 'Genérico no financiado',
    img: IcInfoGenericoNoFinanciadoG,
    description:
      'El artículo está incluido en un Conjunto Homogéneo, que es financiable a P.V.P. y siendo su P.V.P. de ficha igual al precio menor de dicho grupo. Dicho precio de referencia además es distinto de 0',
  },
  {
    name: 'Genérico',
    img: IcInfoGenericoG,
    description:
      'El artículo está incluido en un Conjunto Homogéneo, que es financiable a P.V.P. y siendo su P.V.P. de ficha igual al precio menor de dicho grupo. Dicho precio de referencia además es distinto de 0.',
  },
  {
    name: 'Genérico financiado menor precio',
    img: IcInfoGenericoFinanciadoM,
    description:
      'El artículo está incluido en un Conjunto Homogéneo cuyo precio de referencia es 0, que es financiable a P.V.P. y que su P.V.P. de ficha no supera al Precio Menor del grupo.',
  },
  {
    name: 'Genérico menor precio',
    img: IcInfoGenericoNoFinanciadoM,
    description:
      'El artículo está incluido en un Conjunto Homogéneo cuyo precio de referencia es 0, que es financiable a P.V.P. y siendo su P.V.P. de ficha igual al Precio Menor del grupo.',
  },
  {
    name: 'No supera precio menor',
    img: IcInfoGenericoM,
    description:
      'Línea es de venta con receta de pensionista, es decir, el usuario no ha de pagar ningún importe.',
  },
  {
    name: 'Supera precio menor',
    img: IcInfoLimitadoFinanciadoN,
    description:
      'El artículo está incluido en un Conjunto Homogéneo, que es financiable a Precio de Referencia y que su P.V.P. de ficha supera el precio menor fijado para dicho grupo. ',
  },
  {
    name: 'Genérico no financiado',
    img: IcInfoLimitadoNoFinanciadoN,
    description:
      'El artículo está incluido en un Conjunto Homogéneo, que es financiable a Precio de Referencia y que su P.V.P. de ficha supera el precio menor fijado para dicho grupo.',
  },
  {
    name: 'Precio limitado',
    img: IcInfoLimitadoN,
    description:
      'El artículo está incluido en un Conjunto Homogéneo, que es financiable a Precio de Referencia y siendo su P.V.P. de ficha igual al precio menor de dicho grupo.',
  },
  {
    name: 'Precio máximo financiado',
    img: IcInfoPmaxFinanciadoA,
    description:
      'El artículo está incluido en algún grupo de artículos con gestión de precio máximo autonómico (S.A.S., S.E.S.,etc.) y que su P.V.P. es inferior al precio menor marcado para dicho grupo.',
  },
  {
    name: 'Precio máximo no financiado',
    img: IcInfoPmaxNoFinanciadoA,
    description:
      'El artículo está incluido en algún grupo de artículos con gestión de precio máximo autonómico (S.A.S., S.E.S.,etc.) y que su P.V.P. es inferior al precio menor marcado para dicho grupo.',
  },
  {
    name: 'Igual a precio menor',
    img: IcInfoPmaxA,
    description:
      'El artículo está incluido en algún grupo de artículos con gestión de precio máximo autonómico (S.A.S., S.E.S., etc.) y que su P.V.P. es superior al precio menor marcado para dicho grupo.',
  },
  {
    name: 'Impresión de consejos activa',
    img: IcInfoSiConsejos,
    description:
      'En esa línea se ha activado la impresión de consejos en el ticket, si bien por omisión en parámetros la impresión de consejos no está activa.',
  },
  {
    name: 'Impresión de consejos desactivada',
    img: IcInfoNoConsejos,
    description:
      'En esa línea se ha desactivado la impresión de consejos en el ticket, si bien por omisión en parámetros la impresión de consejos sí está activa.',
  },
  {
    name: 'Artículo o lote regalado',
    img: IcInfoLineaRegalo,
    description:
      'Se trata de una línea correspondiente a un artículo o lote regalado por aplicación de una promoción, o bien que se ha aplicado en esa línea una promoción por bonificación tipo “bonus” (3x2, 2x1, etc.).',
  },
  {
    name: 'No compatible con promoción',
    img: IcInfoPromoNoCompatible,
    description:
      'Se está aplicando una promoción que sí es compatible con la aplicación de descuentos. ',
  },
  {
    name: 'Compatible con promoción',
    img: IcInfoPromoCompatible,
    description:
      'Se está aplicando una promoción que no es compatible con la aplicación de descuentos.',
  },
  {
    name: 'Artículo con monodosis',
    img: IcInfoMonodosis,
    description:
      'Indica que se trata de un artículo con elementos monodosis definidos o bien de un elemento monodosis.',
  },
  {
    name: 'Gestión multialmacén',
    img: IcInfoMultialmacen,
    description: 'La línea conlleva una gestión multialmacén.',
  },
  {
    name: 'Con Línea de dispensación PA',
    img: IcInfoRecetaPA,
    description:
      'La línea de venta está asociada a una línea de dispensación de receta XXI del S.A.S. ligada a un principio activo.',
  },
  {
    name: 'Con Línea de dispensación CN',
    img: IcInfoRecetaCN,
    description:
      'La línea de venta está asociada a una línea de dispensación de receta XXI del S.A.S. ligada a una marca comercial.',
  },
  {
    name: 'Con receta pendiente',
    img: IcInfoPendienteReceta,
    description:
      'El cliente debe una receta del producto que se está dispensando.',
  },
  {
    name: 'Con control de stock',
    img: IcInfoStockControlPendiente,
    description: 'El artículo tiene un control de stock (S.A.C.S.) pendiente.',
  },
  {
    name: 'Catalogado por el C.G.C.O.F.',
    img: IcInfoNoDispensable,
    description:
      'El artículo está catalogado por el C.G.C.O.F. como No Dispensable.',
  },
  {
    name: 'Artíuclo no financiable',
    img: IcInfoNoFinanciable,
    description:
      'El artículo está catalogado por el SACYL como No Financiable. (Sólo si la farmacia está ubicada en Castilla y León).',
  },
]

export const InfoIcons = (params) => {
  const [showLegendModal, setShowLegendModal] = useState(false)
  const srcIcons = []

  // Si existe receta electrónica
  if (params.data.receta) {
    srcIcons.push({
      url: IcInfoEreceta,
      alt: 'Contiene ereceta',
    })
  }


  // El artículo requiere libro recetario
  if (params.data.articulo?.dispensacion?.controlLibro.id > 1) {
    srcIcons.push({
      url: IcInfoLibroRecetario,
      alt: 'El artículo requiere de libro recetario',
    })
  }

  // El producto es un EFG. Aparece en pedidos
  if (params.data.articulo?.nombre) {
    if (params.data.articulo.nombre.includes('EFG')) {
      srcIcons.push({
        url: IcInfoEfg,
        alt: 'El producto es un EFG. Aparece en pedidos',
      })
    }
  }



  // El artículo tiene descuento
  if (
    params.data.importe_dto_porcentaje > 0 ||
    params.data.importe_dto_directo > 0
  ) {
    srcIcons.push({
      url: IcInfoDescuento,
      alt:
        'Descuento en la línea, bien por haberse introducido manualmente o automáticamente ',
    })
  }

  //
  // ###### SOLO ERECETA ######
  //

  // Artículo incompleto
  if (
    params.data.articulo === null &&
    params.data.codigo_prescripcion &&
    (params.data?.receta === '' || params.data?.tis === '')
  ) {
    srcIcons.push({
      url: IcInfoIncompleto,
      alt: 'Línea incompleta: falta',
    })
  }

  // Artículo tiene stock
  if (
    !params.data.linea &&
    params.data.codigo_prescripcion &&
    params.data.stock > 0
  ) {
    srcIcons.push({
      url: IcInfoStockHay,
      alt: 'El artículo de la línea tiene stock',
    })
  }

  // Artículo no tiene stock
  if (
    !params.data.linea &&
    params.data.codigo_prescripcion &&
    params.data.stock <= 0
  ) {
    srcIcons.push({
      url: IcInfoStockNoHay,
      alt: 'El artículo de la línea no tiene stock',
    })
  }

  // Artículo no tiene está dado de alta en maestro artículos
  if (params.data.codigo_prescripcion && params.data.codigo === '-') {
    srcIcons.push({
      url: noExistInsideArticleMaster,
      alt:
        'El artículo de la línea no esta dado de alta en el maestro de artículos',
    })
  }

  // Artículo ha sido sustituido
  if (params.data.codigo_prescripcion && params.data.articulo_sustitucion) {
    srcIcons.push({
      url: substituted,
      alt: 'Producto sustituido',
    })
  }

  const handleModal = () => setShowLegendModal(true)
  const toggle = () => setShowLegendModal(false)

  return (
    <>
      <button type="button" className="infoIcons" onClick={handleModal}>
        {srcIcons.map((icon) => (
          <div className="infoIcons__icon">
            <img src={icon.url} alt={icon.alt} title={icon.alt} />
          </div>
        ))}
      </button>
      {showLegendModal && (
        <ModalIConsLegend
          title="Leyenda Iconos"
          toggle={toggle}
          hasFooter={false}
          className="Modal-iconsLegend p-3"
          size="md"
          legendIcons={legendIcons}
        />
      )}
    </>
  )
}

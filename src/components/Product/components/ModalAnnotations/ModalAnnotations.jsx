import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../../Modal/Draggable/Draggable'
import Aggrid from '../../../Aggrid/Aggrid'
import { columns } from '../../../../infrastructure/Aggrid/columns/columns'

const ModalAnnotations = ({ productName, toggle, onAccept }) => {
  const onGridReady = () => {
    const data = [
      {
        tipo: 'General',
        mensaje: '<ANT PVP: 2,75€ //// P.COSTE 1,94€>',
        mostrar: false,
        desde: '-',
        hasta: '-',
        autor: 'JOAN M.',
      },
      {
        tipo: 'Ventas',
        mensaje: 'ENTREGAR EL OBSEQUIO DE LA BOLSA NECESER',
        mostrar: true,
        desde: '10/02/2021',
        hasta: '20/02/2021',
        autor: 'GEO P.',
      },
      {
        tipo: 'Pedidos',
        mensaje: 'COMPRAR PRIORITARIAMENTE A FEDE',
        mostrar: true,
        desde: '01/01/1991',
        hasta: '01/01/2030',
        autor: 'JOAN M.',
      },
    ]
    return data
  }

  return (
    <Draggable
      toggle={toggle}
      padding={8}
      title={`ANOTACIONES - ${productName}`}
      size="custom"
      customWidth={1000}
      sizeButton="medium"
      textCancel="Volver a la ficha"
      textSuccess="CREAR NUEVA"
      onAccept={onAccept}
    >
      <div className="tw-h-96 tw-z-0">
        <Aggrid
          id="Annotations"
          hasSidebar={false}
          onReady={onGridReady}
          columns={columns.modalAnnotations}
          rowModelType="clientSide"
        />
      </div>
    </Draggable>
  )
}

ModalAnnotations.propTypes = {
  productName: PropTypes.string,
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
}

ModalAnnotations.defaultProps = {
  productName: 'ACOFARVITAL JALEA REAL VIT 20 VIALES',
  onAccept: () => null,
}

export default ModalAnnotations

import React from 'react'
import PseudoAggrid from './PseudoAggrid'
import '../../../styles/index.css'

export default {
  title: 'components/PseudoAggrid',
  component: PseudoAggrid,
}
const Template = (args) => <PseudoAggrid {...args} />

export const Default = Template.bind({})

Default.args = {
  data: {
    headers: [
      { name: 'Nombre y apellidos', id: 1 },
      { name: 'Correo electrónico', id: 2 },
      { name: 'Teléfono móvil', id: 3 },
      { name: 'Rol', id: 4 },
    ],
    rows: [
      [
        { id: 1, data: 'Esteve López Garriga', type: 'Name' },
        { id: 2, data: 'esteve.lopez.garriga@gmail.com', type: 'Email' },
        { id: 3, data: '666 666 666', type: 'Phone' },
        { id: 4, data: 'Auxiliar farmacéutico', type: 'Rol' },
      ],
      [
        { id: 1, data: 'Don Farmacéutico', type: 'Name' },
        { id: 2, data: 'don.farmaceutico@gmail.com', type: 'Email' },
        { id: 3, data: '666 999 999', type: 'Phone' },
        { id: 4, data: 'Farmacéutico titular', type: 'Rol' },
      ],
    ],
  },
}

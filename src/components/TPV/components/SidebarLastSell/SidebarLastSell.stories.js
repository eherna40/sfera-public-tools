import React from 'react'
import '../../../../styles/index.css'
import SidebarLastSell from './SidebarLastSell'

export default {
  title: 'components/TPV/SidebarLastSell',
  component: SidebarLastSell,
}

const Template = (args) => <SidebarLastSell {...args} />

export const Default = Template.bind({})
Default.args = {
  tickets: [
    {
      id: 1,
      fecha: '21/12/2020 - 16:01',
      user: 'JOAN M',
      total: '14,64',
      tipo: {
        id: 0,
        nombre: 'Receta',
      },
      product: [
        {
          id: 1,
          unidades: 1,
          precio: '12,22',
          nombre: 'IBUPROFENO (ARGININA)',
          codigo: '654702.1',
          tipo: {
            id: 0,
            nombre: 'Receta',
          },
        },
        {
          id: 2,
          unidades: 2,
          precio: '2,42',
          nombre: 'OMEPRAZOL APOTEX 20',
          codigo: '69722.1',
          tipo: {
            id: 0,
            nombre: 'Receta',
          },
        },
      ],
    },
    {
      id: 2,
      fecha: '21/12/2020 - 16:01',
      user: 'GEO P.',
      total: '-12,22',
      tipo: {
        id: 0,
        nombre: 'Receta',
      },
      product: [
        {
          id: 1,
          unidades: 1,
          precio: '-12,22',
          nombre: 'GELOCATIL 650 mg',
          codigo: '654702.1',
          tipo: {
            id: 0,
            nombre: 'Receta',
          },
        },
      ],
    },
  ],
}

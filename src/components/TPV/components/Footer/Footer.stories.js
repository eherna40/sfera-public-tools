import React from 'react'
import Footer from './Footer'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/Footer',
  component: Footer,
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {
  items: [
    {
      id: 1,
      name: 'Venta',
      links: [
        {
          id: 1,
          optName: 'Nueva',
          optShortcut: 'CTRL+1',
        },
        {
          id: 2,
          optName: 'Pendiente',
          optShortcut: 'CTRL+1',
        },
        {
          id: 3,
          optName: 'Eliminar',
          optShortcut: 'CTRL+1',
        },
      ],
    },
    {
      id: 2,
      name: 'Artículo',
      links: [
        {
          id: 1,
          optName: 'Ver Ficha',
          optShortcut: 'CTRL+1',
        },
        {
          id: 2,
          optName: 'Alta Libro',
          optShortcut: 'CTRL+1',
        },
        {
          id: 3,
          optName: 'Sustituir',
          optShortcut: 'CTRL+1',
        },
        {
          id: 4,
          optName: 'Eliminar',
          optShortcut: 'CTRL+1',
        },
      ],
    },
    {
      id: 3,
      name: 'Cliente',
      links: [
        {
          id: 1,
          optName: 'Ver Ficha',
          optShortcut: 'CTRL+1',
        },
        {
          id: 2,
          optName: 'Seguimiento',
          optShortcut: 'CTRL+1',
        },
        {
          id: 3,
          optName: 'Anotaciones',
          optShortcut: 'CTRL+1',
        },
      ],
    },
    {
      id: 4,
      name: 'Mostrador',
      links: [
        {
          id: 1,
          optName: 'Arqueo',
          optShortcut: 'CTRL+1',
        },
        {
          id: 2,
          optName: 'Movimientos',
          optShortcut: 'CTRL+1',
        },
      ],
    },
  ],
}

import React from 'react'
import DropUpButton from './DropUpButton'
import '../../../styles/index.css'

export default {
  title: 'components/commons/DropUpButton',
  component: DropUpButton,
}

const Template = (args) => <DropUpButton {...args} />

export const Default = Template.bind({})
Default.args = {
  item: {
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
}

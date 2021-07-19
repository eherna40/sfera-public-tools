import React from 'react'
import '../../styles/index.css'
import SideMenu from './SideMenu'

export default {
  title: 'components/SideMenu',
  component: SideMenu,
}

const Template = (args) => <SideMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Aplicaciones',
  open: true,
  items: [
    {
      title: 'Layout',
      group: [
        {
          title: 'Interfaz y Logo',
          toggle: () => {},
        },
      ],
    },
    {
      title: 'Almacenes',
      group: [
        {
          title: 'Almacen 1',
          toggle: () => {},
        },
        {
          title: 'Almacen 2',
          toggle: () => {},
        },
      ],
    },
  ],
}

import React from 'react'
import '../../styles/index.css'
import Sidebar from './Sidebar'

export default {
  title: 'components/Sidebar',
  component: Sidebar,
}

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  dataMenu: {
    title: 'Aplicaciones',
    open: true,
    items: [
      {
        name: 'ERP Farmacéutico',
        version: '0.0.1',
        disabled: false,
      },
      {
        name: 'Business Inteligence',
        version: '0.0.1',
        disabled: false,
      },
      {
        name: 'Área Privada',
        version: '0.0.1',
        disabled: true,
      },
    ],
  },
}

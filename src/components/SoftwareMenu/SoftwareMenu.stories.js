import React from 'react'
import '../../styles/index.css'
import SoftwareMenu from './SoftwareMenu'

export default {
  title: 'components/SoftwareMenu',
  component: SoftwareMenu,
}

const Template = (args) => <SoftwareMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Aplicaciones',
  open: true,
  items: [
    {
      name: 'ERP Farmacéutico',
      disabled: false,
    },
    {
      name: 'Business Inteligence',
      disabled: false,
    },
    {
      name: 'Àrea Privada',
      disabled: true,
    },
  ],
}

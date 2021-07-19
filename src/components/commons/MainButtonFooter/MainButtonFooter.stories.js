import React from 'react'
import MainButtonFooter from './MainButtonFooter'
import '../../../styles/index.css'

export default {
  title: 'components/commons/MainButtonFooter',
  component: MainButtonFooter,
}

const Template = (args) => <MainButtonFooter {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: 1,
      name: 'Cerrar venta',
    },
    {
      id: 2,
      name: 'Cierre rápido',
    },
    {
      id: 3,
      name: 'Cierre rápido con ticket',
    },
  ],
}

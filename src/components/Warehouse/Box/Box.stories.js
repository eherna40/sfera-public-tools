import React from 'react'
import Box from './Box'

export default {
  title: 'components/Warehouse/Box',
  component: Box,
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  address: 'Dirección de la tienda',
  icon: false,
  title: 'Nombre de la tienda',
  theme: 'green',
}

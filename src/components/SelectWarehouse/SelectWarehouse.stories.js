import React from 'react'
import SelectWarehouse from './SelectWarehouse'
import '../../styles/index.css'

export default {
  title: 'components/SelectWarehouse',
  component: SelectWarehouse,
}

const Template = (args) => <SelectWarehouse {...args} />

export const Default = Template.bind({})

Default.args = {
  warehouses: [
    {
      id: 1,
      name: 'Almacen 1',
    },
    {
      id: 2,
      name: 'Almacen 2',
    },
  ],
}

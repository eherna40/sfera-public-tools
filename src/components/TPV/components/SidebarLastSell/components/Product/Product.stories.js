import React from 'react'
import Product from './Product'
import '../../../../../../styles/index.css'

export default {
  title: 'components/TPV/SidebarLastSell/Product',
  component: Product,
}

const Template = (args) => <Product {...args} />

export const Default = Template.bind({})
Default.args = {
  units: '2',
  productName: 'IBUPROFENO (ARGININA)',
  price: '12,22',
}

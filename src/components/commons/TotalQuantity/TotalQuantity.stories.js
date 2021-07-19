import React from 'react'
import '../../../styles/index.css'
import TotalQuantity from './TotalQuantity'

export default {
  title: 'components/commons/TotalQuantity',
  component: TotalQuantity,
}

const Template = (args) => <TotalQuantity {...args} />

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import Total from './Total'
import '../../../../../../styles/index.css'

export default {
  title: 'components/TPV/SidebarLastSell/Total',
  component: Total,
}

const Template = (args) => <Total {...args} />

export const Positive = Template.bind({})
Positive.args = {
  total: '12,22',
}

export const Negative = Template.bind({})
Negative.args = {
  total: '-12,22',
}

import React from 'react'
import LastSell from './LastSell'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/LastSell',
  component: LastSell,
}

const Template = (args) => <LastSell {...args} />

export const Default = Template.bind({})

Default.args = {}

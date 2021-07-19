import React from 'react'
import Clock from './Clock'
import '../../../styles/index.css'

export default {
  title: 'components/Clock',
  component: Clock,
}
const Template = (args) => <Clock {...args} />

export const Default = Template.bind({})

Default.args = {}

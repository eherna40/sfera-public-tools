import React from 'react'
import '../../../../styles/index.css'
import Pins from './Pins'

export default {
  title: 'components/Form/Pin',
  component: Pins,
}

const Template = (args) => <Pins {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

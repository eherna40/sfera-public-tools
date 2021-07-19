import React from 'react'
import Dropdown from '.'
import '../../../styles/index.css'

export default {
  title: 'components/commons/Dropdown',
  component: Dropdown,
}
const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'components/commons/Navbar',
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}

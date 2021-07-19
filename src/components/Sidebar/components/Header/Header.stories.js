import React from 'react'
import Header from './Header'
import '../../../../styles/index.css'

export default {
  title: 'components/Sidebar/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Demo = Template.bind({})
Demo.args = {
  businessName: 'Farmàcia del Mercat Hostafrancs',
  userName: 'Alejandra Sanz Jornet',
}

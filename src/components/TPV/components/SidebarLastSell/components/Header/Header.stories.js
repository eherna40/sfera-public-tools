import React from 'react'
import Header from './Header'
import '../../../../../../styles/index.css'

export default {
  title: 'components/TPV/SidebarLastSell/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  date: '21/12/2020 - 16:01',
  user: 'JOAN M.',
}

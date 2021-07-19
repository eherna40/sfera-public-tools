import React from 'react'
import Header from './Header'
import '../../../../styles/index.css'

export default {
  title: 'components/Modal/Draggable/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'TITLE',
}

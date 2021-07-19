import React from 'react'
import Title from './Title'
import '../../../../styles/index.css'

export default {
  title: 'components/Sidebar/Title',
  component: Title,
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Mi Farmacia',
}

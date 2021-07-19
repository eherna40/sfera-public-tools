import React from 'react'
import MenuOptions from './MenuOptions'
import '../../../../styles/index.css'

export default {
  title: 'components/Aggrid/MenuOptions',
  component: MenuOptions,
}

const Template = (args) => <MenuOptions {...args} />

export const Default = Template.bind({})

Default.args = {}

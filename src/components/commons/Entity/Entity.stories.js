import React from 'react'
import Entity from './Entity'
import '../../../styles/index.css'

export default {
  title: 'components/commons/Entity',
  component: Entity,
}
const Template = (args) => <Entity {...args} />

export const Default = Template.bind({})

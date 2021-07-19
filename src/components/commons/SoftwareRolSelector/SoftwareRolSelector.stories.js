import React from 'react'
import '../../../styles/index.css'
import SoftwareRolSelector from './SoftwareRolSelector'

export default {
  title: 'components/SoftwareRolSelector',
  component: SoftwareRolSelector,
}

const Template = (args) => <SoftwareRolSelector {...args} />

export const Default = Template.bind({})
Default.args = {}

export const NoContratada = Template.bind({})
NoContratada.args = {
  active: true,
  available: false,
}

export const NoDisponible = Template.bind({})
NoDisponible.args = {
  active: false,
  available: false,
}

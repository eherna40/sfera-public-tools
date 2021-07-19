import React from 'react'
import ModalTracing from './ModalTracing'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/ModalTracing',
  component: ModalTracing,
}

const Template = (args) => <ModalTracing {...args} />

export const Default = Template.bind({})

Default.args = {}

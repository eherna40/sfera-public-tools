import React from 'react'
import ModalSearchClientsAndPatients from './ModalSearchClientsAndPatients'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/ModalSearchClientsAndPatients',
  component: ModalSearchClientsAndPatients,
}

const Template = (args) => <ModalSearchClientsAndPatients {...args} />

export const Default = Template.bind({})

Default.args = {}

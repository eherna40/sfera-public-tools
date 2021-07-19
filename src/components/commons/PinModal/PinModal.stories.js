import React from 'react'
import '../../../styles/index.css'
import PinModal from './PinModal'

export default {
  title: 'components/PinModal',
  component: PinModal,
}

const Template = (args) => <PinModal {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Name',
  user: 'User',
  active: true,
  index: 0,
}

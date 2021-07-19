import React from 'react'
import '../../../styles/index.css'
import ModalActivate from './ModalActivate'

export default {
  title: 'components/commons/ModalActivate',
  component: ModalActivate,
}
const Template = (args) => <ModalActivate {...args} />

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import '../../../styles/index.css'
import ModalEdit from './ModalEdit'

export default {
  title: 'components/commons/ModalEdit',
  component: ModalEdit,
}
const Template = (args) => <ModalEdit {...args} />

export const Default = Template.bind({})
Default.args = {}

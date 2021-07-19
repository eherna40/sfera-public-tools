import React from 'react'
import EditableCheck from './EditableCheck'
import '../../../styles/index.css'
import icSuccess from '../../../assets/img/aggrid/ic_rounded_check.svg'

export default {
  title: 'components/commons/EditableCheck',
  component: EditableCheck,
}
const Template = (args) => <EditableCheck {...args} />

export const Default = Template.bind({})

Default.args = {
  bgImage: icSuccess,
}

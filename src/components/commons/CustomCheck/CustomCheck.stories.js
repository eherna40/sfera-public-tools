import React from 'react'
import '../../../styles/index.css'
import CustomCheck from './CustomCheck'

export default {
  title: 'components/commons/CustomCheck',
  component: CustomCheck,
}
const Template = (args) => <CustomCheck {...args} />

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import InputGroup from './InputGroup'
import '../../../../styles/index.css'

export default {
  title: 'components/commons/Form/InputGroup/InputGroup',
  component: InputGroup,
}
const Template = (args) => <InputGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Default Title',
}

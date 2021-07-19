import React from 'react'
import '../../../../styles/index.css'
import RadioInput from './RadioInput'

export default {
  title: 'components/RadioInput',
  component: RadioInput,
}

const Template = (args) => <RadioInput {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Demo Text',
  hideIcon: false,
}

import React from 'react'
import '../../../../styles/index.css'
import DateInput from './DateInput'

export default {
  title: 'components/DateInput',
  component: DateInput,
}

const Template = (args) => <DateInput {...args} />

export const Default = Template.bind({})
Default.args = {}

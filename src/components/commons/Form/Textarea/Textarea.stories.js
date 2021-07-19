import React from 'react'
import '../../../../styles/index.css'
import Textarea from './Textarea'

export default {
  title: 'components/Form/Textarea',
  component: Textarea,
}

const Template = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Hint',
  placeholder: 'Placeholder',
}

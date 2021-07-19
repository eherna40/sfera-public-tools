import React from 'react'
import '../../../../styles/index.css'
import TextInput from './TextInput'

export default {
  title: 'components/TextInput',
  component: TextInput,
}

const Template = (args) => <TextInput {...args} />

export const Small = Template.bind({})
Small.args = {
  label: 'Hint',
  size: 'small',
  placeholder: 'Placeholder',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Hint',
  size: 'large',
  placeholder: 'Placeholder',
}

export const Transparent = Template.bind({})
Transparent.args = {
  label: 'Hint',
  size: 'small',
  transparent: true,
  placeholder: 'Placeholder',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Hint',
  size: 'small',
  transparent: true,
  placeholder: 'Placeholder',
  error: 'Error!',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Hint',
  size: 'small',
  transparent: false,
  placeholder: 'Placeholder',
  disabled: true,
}

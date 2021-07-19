import React from 'react'
import PhoneInput from './PhoneInput'
import '../../../../styles/index.css'

export default {
  title: 'components/PhoneInput/PhoneInput',
  component: PhoneInput,
}

const Template = (args) => <PhoneInput {...args} />

export const Primary = Template.bind({})
Primary.args = {}

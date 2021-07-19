import React from 'react'
import '../../../../styles/index.css'
import AddressInput from './AddressInput'

export default {
  title: 'components/commons/AddressInput',
  component: AddressInput,
}

const Template = (args) => <AddressInput {...args} />

export const Default = Template.bind({})
Default.args = {}

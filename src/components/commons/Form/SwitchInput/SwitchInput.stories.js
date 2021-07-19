import React from 'react'
import SwitchInput from './SwitchInput'

export default {
  title: 'components/commons/SwitchInput',
  component: SwitchInput,
}

const Template = (args) => (
  <div>
    <SwitchInput {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

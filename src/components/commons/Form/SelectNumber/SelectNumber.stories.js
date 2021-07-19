import React from 'react'
import SelectNumber from './SelectNumber'

export default {
  title: 'components/commons/SelectNumber',
  component: SelectNumber,
}

const Template = (args) => (
  <div>
    <SelectNumber {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

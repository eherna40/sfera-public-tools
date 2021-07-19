import React from 'react'
import SelectInput from './SelectInput'

export default {
  title: 'components/SelectInput',
  component: SelectInput,
}

const Template = (args) => <SelectInput {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Hint',
  items: [
    {
      id: '0',
      name: 'Español',
    },
    {
      id: '1',
      name: 'Catalán',
    },
  ],
}

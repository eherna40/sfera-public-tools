import React from 'react'
import '../../../../../styles/index.css'
import TextInputInfo from './TextInputInfo'

export default {
  title: 'components/Employees/Forms/TextInputInfo',
  component: TextInputInfo,
  decorators: [
    (Story) => (
      <div style={{ width: 691, height: 21 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <TextInputInfo {...args} />

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

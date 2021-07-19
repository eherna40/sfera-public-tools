import React from 'react'
import '../../../../styles/index.css'
import AccessInfo from './AccessInfo'

export default {
  title: 'components/Employees/AccessInfo',
  component: AccessInfo,
  decorators: [
    (Story) => (
      <div style={{ width: 850, height: 586 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <AccessInfo {...args} />
export const Default = Template.bind({})

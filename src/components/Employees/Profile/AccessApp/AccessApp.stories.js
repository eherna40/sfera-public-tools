import React from 'react'
import '../../../../styles/index.css'
import AccessApp from './AccessApp'

export default {
  title: 'components/Employees/AccessApp',
  component: AccessApp,
  decorators: [
    (Story) => (
      <div style={{ width: 850, height: 586 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <AccessApp {...args} />
export const Default = Template.bind({})

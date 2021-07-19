import React from 'react'
import Wizard from './Wizard'
import '../../../../styles/index.css'

export default {
  title: 'components/Employees/Wizard',
  component: Wizard,
  decorators: [
    (Story) => (
      <div style={{ width: 1050, height: 586 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Wizard {...args} />
export const Default = Template.bind({})
Default.args = {
  wizardstep: 1,
}

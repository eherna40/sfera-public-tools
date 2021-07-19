import React from 'react'
import '../../../../../styles/index.css'
import Header from './Header'

export default {
  title: 'components/Employees/Forms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: 691, height: 21 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'credenciales',
  capitalization: true,
}

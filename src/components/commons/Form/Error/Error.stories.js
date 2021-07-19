import React from 'react'
import '../../../../styles/index.css'
import Error from './Error'

export default {
  title: 'components/commons/Form/Error',
  component: Error,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Error {...args} />

export const Default = Template.bind({})
Default.args = {
  message: 'Datos de acceso invalidas',
  code: 401,
}

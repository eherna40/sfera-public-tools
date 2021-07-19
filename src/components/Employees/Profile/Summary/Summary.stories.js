import React from 'react'
import '../../../../styles/index.css'
import Summary from './Summary'

export default {
  title: 'components/Employees/Summary',
  component: Summary,
  decorators: [
    (Story) => (
      <div style={{ width: 850, height: 586 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Summary {...args} />
export const Default = Template.bind({})
Default.args = {
  accessinfo: {
    farmacode: {
      label: 'Codigo de la farmacia',
      value: 'FARMA1',
    },
    nickname: { label: 'Nickname', value: 'exteve.l' },
    pin: { label: 'pin', value: '123456' },
    name: { label: 'Nombre y apellidos', value: 'Esteve Lopez Garriga' },
    nif: { label: 'NIF', value: '464771415L' },
    email: { label: 'E-mail', value: 'esteve_loga@sfera.com' },
  },
}

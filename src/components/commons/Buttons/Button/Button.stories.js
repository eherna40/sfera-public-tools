import React from 'react'
import Button from './Button'
import '../../../../styles/index.css'

export default {
  title: 'components/Button/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'BOTON PRIMARIO',
  spinnerSize: 'small',
  loading: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  label: 'BOTON SECUNDARIO',
  border: true,
  spinnerSize: 'small',
  loading: false,
  size: 'small',
}

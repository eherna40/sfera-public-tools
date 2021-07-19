import React from 'react'
import IcButton from './IcButton'
import IcCamera from '../../Icons/IcCamera'
import '../../../../styles/index.css'

export default {
  title: 'components/Button/IcButton',
  component: IcButton,
}

const Template = (args) => <IcButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  icicon: <IcCamera />,
  primary: true,
  size: 'large',
  spinnerSize: 'small',
  loading: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  border: true,
  spinnerSize: 'small',
  loading: false,
  size: 'small',
}

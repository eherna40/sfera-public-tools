import React from 'react'
import PaymentMethod from './PaymentMethod'
import '../../../../../../styles/index.css'

export default {
  title: 'components/TPV/ModalCloseSell/PaymentMethod',
  component: PaymentMethod,
}

const Template = (args) => <PaymentMethod {...args} />

export const Default = Template.bind({})

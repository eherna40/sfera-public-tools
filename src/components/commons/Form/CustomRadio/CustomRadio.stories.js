import React from 'react'
import CustomRadio from './CustomRadio'
import '../../../../styles/index.css'

export default {
  title: 'components/commons/Form/CustomRadio',
  component: CustomRadio,
}

const Template = (args) => <CustomRadio {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Crédito',
}

export const Color = Template.bind({})
Color.args = {
  label: 'Crédito',
  color: '#22949B',
}

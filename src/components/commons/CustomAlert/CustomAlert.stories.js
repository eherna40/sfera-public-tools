import React from 'react'
import '../../../styles/index.css'
import CustomAlert from './CustomAlert'

export default {
  title: 'components/commons/CustomAlert',
  component: CustomAlert,
}

const Template = (args) => (
  <div className="tw-flex tw-w-full tw-items-center tw-justify-center">
    <CustomAlert {...args}>Mensaje de prueba</CustomAlert>
  </div>
)

export const Success = Template.bind({})
Success.args = {
  mode: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  mode: 'danger',
}

export const Warning = Template.bind({})
Warning.args = {
  mode: 'warning',
}

export const Info = Template.bind({})
Info.args = {
  mode: 'info',
}

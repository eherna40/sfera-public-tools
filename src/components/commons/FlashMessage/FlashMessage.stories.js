import React from 'react'
import '../../../styles/index.css'
import FlashMessage from './FlashMessage'

export default {
  title: 'components/commons/FlashMessage',
  component: FlashMessage,
}

const Template = (args) => (
  <div className="tw-flex tw-w-full tw-items-center tw-justify-center">
    <FlashMessage {...args}>Mensaje de prueba</FlashMessage>
  </div>
)

export const Default = Template.bind({})
Default.args = {}

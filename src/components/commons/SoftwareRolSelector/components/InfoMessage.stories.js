import React from 'react'
import '../../../../styles/index.css'
import InfoMessage from './InfoMessage'

export default {
  title: 'components/InfoMessage',
  component: InfoMessage,
}

const Template = (args) => <InfoMessage {...args} />

export const Default = Template.bind({})
Default.args = {}

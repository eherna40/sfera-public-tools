import React from 'react'
import '../../styles/index.css'
import ExternalCredential from './ExternalCredential'

export default {
  title: 'components/ExternalCredential',
  component: ExternalCredential,
}

const Template = (args) => <ExternalCredential {...args} />

export const Default = Template.bind({})
Default.args = {}

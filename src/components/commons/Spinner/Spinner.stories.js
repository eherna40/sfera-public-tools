import React from 'react'
import '../../../styles/index.css'
import Spinner from './Spinner'

export default {
  title: 'components/Spinner',
  component: Spinner,
}

const Template = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'blue',
  size: 'small',
}

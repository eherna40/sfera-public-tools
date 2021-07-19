import React from 'react'
import MultiSelectorInput from './MultiSelectorInput'
import '../../../../styles/index.css'

export default {
  title: 'components/MultiSelectorInput/MultiSelectorInput',
  component: MultiSelectorInput,
}

const Template = (args) => <MultiSelectorInput {...args} />

export const Primary = Template.bind({})
Primary.args = {}

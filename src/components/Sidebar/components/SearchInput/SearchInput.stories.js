import React from 'react'
import SearchInput from './SearchInput'
import '../../../../styles/index.css'

export default {
  title: 'components/Sidebar/SearchInput',
  component: SearchInput,
}

const Template = (args) => <SearchInput {...args} />

export const Default = Template.bind({})

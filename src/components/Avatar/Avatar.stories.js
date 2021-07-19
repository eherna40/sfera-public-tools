import React from 'react'
import { Provider } from 'react-redux'
import '../../styles/index.css'
import Avatar from './Avatar'
import { store } from '../../infrastructure/redux/store'

export default {
  title: 'components/Avatar',
  component: Avatar,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Name',
  user: 'User',
  active: true,
  index: 0,
}

import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import '../../../../../styles/index.css'
import { store } from '../../../../../infrastructure/redux/store'

export default {
  title: 'components/Layouts/Layout/Header',
  component: Header,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}
const Template = (args) => <Header {...args} />

export const Default = Template.bind({})

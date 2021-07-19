import React from 'react'
import MultiUsers from './MultiUsers'
import Avatar from '../../assets/img/profile_picture.png'
import '../../styles/index.css'

export default {
  title: 'components/MultiUsers',
  component: MultiUsers,
}
const Template = (args) => <MultiUsers {...args} />

export const Default = Template.bind({})

Default.args = {
  users: [
    {
      id: 0,
      name: 'Joan Martinez Folguerola',
      user: 'Test 1',
      rol: 'Administrador',
      avatar: Avatar,
    },
    {
      id: 1,
      name: 'Pepito 1',
      user: 'Test 2',
      rol: 'Contable',
      avatar: Avatar,
    },
    {
      id: 2,
      name: 'Pepito 2',
      user: 'Test 2',
      rol: 'Contable',
      avatar: Avatar,
    },
  ],

  items: [
    {
      id: '0',
      name: 'Español',
    },
    {
      id: '1',
      name: 'Catalán',
    },
  ],
}

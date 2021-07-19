import React from 'react'
import ProfileBox from './ProfileBox'
import '../../styles/index.css'
import Avatar from '../../assets/img/profile_picture.png'

export default {
  title: 'components/ProfileBox',
  component: ProfileBox,
}
const Template = (args) => <ProfileBox {...args} />

export const Default = Template.bind({})

Default.args = {
  user: 'User',
  name: 'Name',
  rol: 'Administrador',
  avatar: Avatar,
  size: 'large',
  items: [],
}

import React from 'react'
import '../../styles/index.css'
import Link from './Link'

export default {
  title: 'components/Link',
  component: Link,
}

const Template = (args) => <Link {...args} />

export const Inactive = Template.bind({})
Inactive.args = {
  text: 'Link',
}

export const Active = Template.bind({})
Active.args = {
  text: 'Link',
  active: true,
}

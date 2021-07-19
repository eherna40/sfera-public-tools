import React from 'react'
import '../../../styles/index.css'
import Hero from './Hero'

export default {
  title: 'components/Hero',
  component: Hero,
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})

import React from 'react'
import Paragraphs from './Paragraphs'

export default {
  title: 'components/commons/Paragraphs',
  component: Paragraphs,
}

const Template = (args) => <Paragraphs {...args}>Texto</Paragraphs>

export const Default = Template.bind({})

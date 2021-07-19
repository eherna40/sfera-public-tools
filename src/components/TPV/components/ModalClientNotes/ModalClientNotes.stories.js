import React from 'react'
import ModalClientNotes from './ModalClientNotes'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/ModalClientNotes',
  component: ModalClientNotes,
}

const Template = (args) => <ModalClientNotes {...args} />

export const Default = Template.bind({})

Default.args = {}

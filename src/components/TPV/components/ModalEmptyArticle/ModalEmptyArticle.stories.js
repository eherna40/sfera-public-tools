import React from 'react'
import ModalEmptyArticle from './ModalEmptyArticle'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/ModalEmptyArticle',
  component: ModalEmptyArticle,
}

const Template = (args) => <ModalEmptyArticle {...args} />

export const Default = Template.bind({})

Default.args = {}

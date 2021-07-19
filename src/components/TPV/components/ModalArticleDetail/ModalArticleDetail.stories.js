import React from 'react'
import ModalArticleDetail from './ModalArticleDetail'
import '../../../../styles/index.css'

export default {
  title: 'components/TPV/ModalArticleDetail',
  component: ModalArticleDetail,
}

const Template = (args) => <ModalArticleDetail {...args} />

export const Default = Template.bind({})

Default.args = {}

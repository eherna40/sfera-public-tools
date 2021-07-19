import React from 'react'
import CodeAndType from './CodeAndType'
import '../../../../../../styles/index.css'

export default {
  title: 'components/TPV/SidebarLastSell/CodeAndType',
  component: CodeAndType,
}

const Template = (args) => <CodeAndType {...args} />

export const Default = Template.bind({})
Default.args = {
  code: '654702.1',
  type: 'Receta',
}

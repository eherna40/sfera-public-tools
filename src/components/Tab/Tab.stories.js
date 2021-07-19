import React from 'react'
import '../../styles/index.css'
import Tab from './Tab'

export default {
  title: 'components/Tab',
  component: Tab,
}

const Template = (args) => <Tab {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'TAB',
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'TAB',
  background: 'secondary',
}

export const MultiTab = Template.bind({})
MultiTab.args = {
  title: 'MULTITAB',
  multiTab: [],
  list: [
    'Frenadol Complex Gdo Sob. 600 Mg.',
    'Clamoxil 250 mg',
    'Ibuprofeno Cinfa Efg 600 Mg 20',
  ],
}

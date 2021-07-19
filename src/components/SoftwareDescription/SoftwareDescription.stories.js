import React from 'react'
import '../../styles/index.css'
import SoftwareDescription from './SoftwareDescription'

export default {
  title: 'components/SoftwareDescription',
  component: SoftwareDescription,
}

const Template = (args) => <SoftwareDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  item: {
    id: 0,
    softwareName: 'ERP Farmacéutico',
    title: 'Auxiliar Farmacéutico',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,accusantium.',
  },
}

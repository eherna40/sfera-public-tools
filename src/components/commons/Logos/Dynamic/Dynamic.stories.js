import React from 'react'
import Dynamic from './Dynamic'
import Logo from '../../../../assets/img/logos/logo_big.png'
import '../../../../styles/index.css'

export default {
  title: 'components/Logos/Dynamic',
  component: Dynamic,
}

const Template = (args) => <Dynamic {...args} />

export const Default = Template.bind({})
Default.args = {
  logo: Logo,
  softwareName: 'ERP Farmacéutico',
}

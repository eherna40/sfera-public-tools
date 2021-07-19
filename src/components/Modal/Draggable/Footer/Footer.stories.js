import React from 'react'
import Footer from './Footer'
import '../../../../styles/index.css'

export default {
  title: 'components/Modal/Draggable/Footer',
  component: Footer,
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: true,
  textSuccess: 'Aceptar',
  textCancel: 'Cancelar',
}

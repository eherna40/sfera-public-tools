import React from 'react'
import Draggable from './Draggable'
import '../../../styles/index.css'

export default {
  title: 'components/Modal/Draggable',
  component: Draggable,
}

const Template = (args) => <Draggable {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: true,
  textSuccess: 'Aceptar',
  textCancel: 'Cancelar',
  inPortal: false,
  title: 'Modal de prueba',
}

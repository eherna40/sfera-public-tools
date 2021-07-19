import React from 'react'
import '../../../styles/index.css'
import ModalDelete from './ModalDelete'

export default {
  title: 'components/commons/ModalDelete',
  component: ModalDelete,
}
const Template = (args) => <ModalDelete {...args} />

export const Default = Template.bind({})
Default.args = {
  profile: 'CLIENTE',
  size: 'md',
  textCancel: 'CANCELAR',
  textSuccess: 'ELIMINAR',
  children: 'CONTENIDO',
  inPortal: false,
}

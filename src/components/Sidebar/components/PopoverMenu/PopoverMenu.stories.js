import React from 'react'
import '../../../../styles/index.css'
import PopoverMenu from './PopoverMenu'

export default {
  title: 'components/PopoverMenu',
  component: PopoverMenu,
}

const Template = (args) => (
  <div className="tw-flex tw-w-full tw-relative tw-items-center tw-justify-center">
    <PopoverMenu {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  options: ['Editar', 'Eliminar'],
}

import React from 'react'
import '../../../../styles/index.css'
import ItemMenu from './ItemMenu'

export default {
  title: 'components/Sidebar/ItemMenu',
  component: ItemMenu,
}
const Template = (args) => <ItemMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Visualización de Stock',
  fav: false,
}

export const Favorite = Template.bind({})
Favorite.args = {
  name: 'Visualización de Stock',
  fav: true,
}

export const Software = Template.bind({})
Software.args = {
  name: 'Terminal de venta',
  fav: false,
  software: 'ERP Farmacéutico',
}

export const Options = Template.bind({})
Options.args = {
  name: 'Hover me to show options',
  fav: false,
  options: true,
}

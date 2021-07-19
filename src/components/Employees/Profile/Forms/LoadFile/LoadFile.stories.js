import React from 'react'
import '../../../../../styles/index.css'
import LoadFile from './LoadFile'

export default {
  title: 'components/Employees/Forms/LoadFile',
  component: LoadFile,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <LoadFile {...args} />
export const Small = Template.bind({})
Small.args = {
  label: 'Imagen de perfil',
  type: 'photo',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Imagen de perfil',
  type: 'photo',
  size: 'large',
}

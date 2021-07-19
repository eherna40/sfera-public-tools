import React from 'react'
import '../../../styles/index.css'
import SoftwareItem from './SoftwareItem'

export default {
  title: 'components/SoftwareItem',
  component: SoftwareItem,
}

const Template = (args) => (
  <div className="tw-flex tw-w-full tw-items-center tw-justify-center">
    <SoftwareItem {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  disabled: false,
}

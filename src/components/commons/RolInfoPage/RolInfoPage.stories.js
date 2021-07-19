import React from 'react'
import '../../../styles/index.css'
import RolInfoPage from './RolInfoPage'

export default {
  title: 'components/RolInfoPage',
  component: RolInfoPage,
}

const Template = (args) => (
  <div className="tw-flex tw-w-screen tw-h-screen tw-items-center tw-justify-center">
    <RolInfoPage {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

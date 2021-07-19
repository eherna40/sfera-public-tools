import React from 'react'
import '../../../../styles/index.css'
import Folder from './Folder'
import IcFolder from '../../../commons/Icons/IcFolder'

export default {
  title: 'components/Sidebar/Folder',
  component: Folder,
}
const Template = (args) => (
  <div className="tw-mt-20 tw-relative tw-h-screen tw-w-48">
    <div className="tw-absolute tw-w-48">
      <Folder {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  folderName: 'Accesos directos',
  icon: <IcFolder />,
  items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }],
}

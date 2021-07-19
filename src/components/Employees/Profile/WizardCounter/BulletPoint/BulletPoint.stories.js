import React from 'react'
import '../../../../../styles/index.css'
import BulletPoint from './BulletPoint'

export default {
  title: 'components/Employees/WizardCounter',
  component: BulletPoint,
}

const Template = (args) => <BulletPoint {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'BulletPoint',
  number: 1,
  title: 'Informacion Personal',
  body: 'Añada las credencias de accesos y los datos personales de empleado.',
  active: false,
  complete: false,
  lastItem: false,
}

import React from 'react'
import '../../../../styles/index.css'
import WizardCounter from './WizardCounter'

export default {
  title: 'components/Employees/WizardCounter',
  component: WizardCounter,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <WizardCounter {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'StepCounter',
  steps: [
    {
      number: 1,
      title: 'Datos personales',
      body:
        'Añada las credencias de accesos y los datos personales de empleado.',
    },
    {
      number: 2,
      title: 'Aplicaciones y roles',
      body:
        'Conceda el accesos al empleado a aquellas aplicaciones deseadas y configure un rol por defecto para cada una de ellas',
    },
    {
      number: 3,
      title: 'Resumen',
      body: 'Comprueba toda la información de tu colaborador',
    },
  ],
  wizardstep: 1,
}

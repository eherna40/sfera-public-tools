import React from 'react'
import '../../../styles/index.css'
import RolSelectorWrapper from './RolSelectorWrapper'

export default {
  title: 'components/RolSelectorWrapper',
  component: RolSelectorWrapper,
}

const Template = (args) => <RolSelectorWrapper {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      id: 0,
      software: 'ERP Farmacéutico',
      active: true,
      available: true,
      roles: [
        {
          id: 1,
          nombre: 'Farmacéutico titular',
        },
        {
          id: 2,
          nombre: 'Farmacéutico adjunto',
        },
        {
          id: 3,
          nombre: 'Auxiliar',
        },
        {
          id: 4,
          nombre: 'Becario Prácticas',
        },
        {
          id: 5,
          nombre: 'Contable',
        },
        {
          id: 6,
          nombre: 'Elaborador',
        },
        {
          id: 7,
          nombre: 'Otros',
        },
        {
          id: 8,
          nombre: 'No conceder acceso',
        },
      ],
    },
    {
      id: 1,
      software: 'Business Intelligence',
      active: true,
      available: true,
      roles: [
        {
          id: 1,
          nombre: 'Responsable',
        },
        {
          id: 2,
          nombre: 'Empleado',
        },
      ],
    },
    {
      id: 2,
      software: 'Área Privada',
      active: false,
      available: false,
      roles: [
        {
          id: 1,
          nombre: 'Titular',
        },
        {
          id: 2,
          nombre: 'Auxiliar',
        },
      ],
    },
  ],
}

import React from 'react'
import '../../../../styles/index.css'
import IcExclamation from '../../Icons/IcExclamation'
import IcExclamationRed from '../../Icons/IcExclamationRed'
import TextInputIcon from './TextInputIcon'

export default {
  title: 'components/Form/TextInputIcon',
  component: TextInputIcon,
}

const Template = (args) => <TextInputIcon {...args} />

export const Error = Template.bind({})
Error.args = {
  label: 'Hint',
  size: 'small',
  icon: <IcExclamationRed />,
  placeholder: 'Placeholder',
  titleTooltip: '¡Alerta!',
  messageTooltip:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, error.',
  colorTooltip: 'error',
}

export const Success = Template.bind({})
Success.args = {
  label: 'Hint',
  size: 'small',
  icon: <IcExclamation />,
  placeholder: 'Placeholder',
  titleTooltip: '¡Éxito!',
  messageTooltip:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, error.',
  colorTooltip: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Hint',
  size: 'small',
  icon: <IcExclamation />,
  placeholder: 'Placeholder',
  titleTooltip: '¡Atención!',
  messageTooltip:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, error.',
  colorTooltip: 'warning',
}

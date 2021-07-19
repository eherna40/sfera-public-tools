import React from 'react'
import AnnotationsItem from './AnnotationsItem'
import '../../../../../styles/index.css'

export default {
  title: 'components/Customer/Annotations/AnnotationsItem',
  component: AnnotationsItem,
}
const Template = (args) => <AnnotationsItem {...args} />

export const Info = Template.bind({})
Info.args = {
  type: 'info',
}

export const Observation = Template.bind({})
Observation.args = {
  type: 'observation',
}

export const Alert = Template.bind({})
Alert.args = {
  type: 'alert',
}

export const Pharma = Template.bind({})
Pharma.args = {
  type: 'pharma',
}

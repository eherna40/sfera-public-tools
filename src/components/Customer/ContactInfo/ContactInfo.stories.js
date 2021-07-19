import React from 'react'
import ContactInfo from './ContactInfo'
import '../../../styles/index.css'

export default {
  title: 'components/Customer/ContactInfo/ContactInfo',
  component: ContactInfo,
}
const Template = (args) => <ContactInfo {...args} />

export const Default = Template.bind({})

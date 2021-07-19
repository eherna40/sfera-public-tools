import React from 'react'
import PropTypes from 'prop-types'
import { Checkmark, Container, Input } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Checkbox = ({ label, size, checked, onChange }) => (
  <div className="tw-flex tw-items-center">
    <Container
      size={size}
      className="container tw-block tw-relative tw-cursor-pointer"
    >
      <Input
        onChange={onChange}
        defaultChecked={checked}
        type="checkbox"
        className="tw-absolute tw-w-full tw-h-full"
      />
      <Checkmark size={size} className="checkmark"></Checkmark>
    </Container>
    <Paragraphs weight="bold" className="tw-pl-2">
      {label}
    </Paragraphs>
  </div>
)

Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['xs, sm']),
  onChange: null
}

Checkbox.defaultProps = {
  size: 'sm',
}
export default Checkbox

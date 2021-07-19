import React from 'react'
import PropTypes from 'prop-types'
import { Label } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'

const CustomRadio = ({ reference, name, label, disabled, size }) => (
  <div className="control-group">
    <Label className="control control-radio" size={size}>
      <Paragraphs size={size === 'sm' ? 'xs' : 'sm'}>{label}</Paragraphs>
      <input
        ref={reference}
        type="radio"
        name={name || 'radio'}
        disabled={disabled}
      />
      <div className="indicator"></div>
    </Label>
  </div>
)

CustomRadio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  size: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
}

CustomRadio.defaultProps = {
  label: 'Crédito',
  disabled: false,
  checked: false,
  size: 'sm',
}

export default CustomRadio

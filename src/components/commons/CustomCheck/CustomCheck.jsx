import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'

const CustomCheck = ({
  label,
  bold,
  bgPrimary,
  borderPrimary,
  checked,
  onChange,
}) => (
  <Wrapper bgPrimary={bgPrimary} borderPrimary={borderPrimary}>
    <div className="control-group ">
      <label className="control control-checkbox tw-flex tw-items-center">
        <Paragraphs weight={bold ? 'bold' : 'regular'}>{label}</Paragraphs>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange || (() => null)}
        />
        <div className="control_indicator"></div>
      </label>
    </div>
  </Wrapper>
)

CustomCheck.propTypes = {
  label: PropTypes.string,
  bold: PropTypes.bool,
  bgPrimary: PropTypes.bool,
  borderPrimary: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

CustomCheck.defaultProps = {
  label: 'Checkbox',
  bold: false,
  bgPrimary: false,
  borderPrimary: false,
  checked: false,
  onChange: () => null,
}

export default CustomCheck

import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Wrapper } from './styles'
import icSuccess from '../../../assets/img/aggrid/ic_rounded_check.svg'

const EditableCheck = ({
  id,
  label,
  size,
  bgImage,
  bgColor,
  borderColor,
  borderWidth,
  borderRadius,
  disabled,
  onChange,
  checked,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper
      className="tw-flex tw-gap-3"
      bgImage={bgImage}
      size={size}
      bgColor={bgColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
    >
      <label htmlFor={id}>
        <div className="tw-flex tw-item-center tw-gap-3">
          <div className="tw-relative">
            <input
              checked={checked}
              className="check-input tw-absolute"
              type="checkbox"
              id={id}
              disabled={disabled}
              onChange={(e) => onChange(e)}
            />
            <div className="check-indicator"></div>
          </div>
          {/* {label && <Paragraphs size="sm">{label}</Paragraphs>} */}
        </div>
      </label>
      <label htmlFor={id} className="tw-cursor-pointer">
        {label && <Paragraphs size="sm">{t(`labels.${label}`)}</Paragraphs>}
      </label>
    </Wrapper>
  )
}

EditableCheck.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  size: PropTypes.number,
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

EditableCheck.defaultProps = {
  size: 18,
  bgImage: icSuccess,
  bgColor: '#B1EAEF',
  borderColor: '#A6D3D6',
  borderWidth: 2,
  borderRadius: 2,
  disabled: false,
  onChange: () => null,
  checked: false,
}

export default EditableCheck

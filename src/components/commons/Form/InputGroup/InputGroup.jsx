import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../../Paragraphs/Paragraphs'
import Checkbox from '../CheckBox/Checkbox'
import IcSearch from '../../Icons/IcSearch'
import colors from '../../../../styles/colors'

const InputGroup = ({
  title,
  uppercase,
  underline,
  theme,
  children,
  width,
  primary,
  restore,
  onClick,
  icon,
  actionCheckbox,
  checked,
  flexGrow,
  search,
  size,
  padding,
  noUnderlinePadding,
  noTranslation,
}) => {
  const { t } = useTranslation()
  return (
    <div
      className={`tw-flex tw-flex-col tw-w-${width} tw-text-xs tw-p-${padding}`}
    >
      <div
        className={`${underline ? 'tw-border-b' : ''} ${
          primary ? 'tw-text-tertiary' : `tw-${theme}-200`
        } tw-w-full ${noUnderlinePadding ? '' : 'tw-pb-3'} ${
          (restore || icon) && 'tw-flex tw-justify-between'
        }`}
      >
        <div className="tw-flex tw-items-center tw-justify-between">
          {actionCheckbox && (
            <Checkbox
              size="xs"
              onChange={actionCheckbox}
              label=""
              checked={checked}
            />
          )}
          <Paragraphs
            weight="bold"
            uppercase={uppercase}
            className={`tw-text-tertiary`}
            size={size}
          >
            {!noTranslation ? t(`labels.${title}`) : title}
          </Paragraphs>
          {search && <IcSearch size={18} color={colors.primary} />}
        </div>

        {restore && (
          <div
            className="tw-cursor-pointer"
            aria-hidden="true"
            onClick={onClick}
          >
            <Paragraphs weight="bold" size="xs" className="tw-text-primary">
              {restore}
            </Paragraphs>
          </div>
        )}
        {icon && (
          <div
            className="tw-cursor-pointer"
            aria-hidden="true"
            onClick={onClick}
          >
            {icon}
          </div>
        )}
      </div>
      {children && (
        <div className={`tw-pt-4 ${flexGrow && 'tw-h-full'}`}>{children}</div>
      )}
    </div>
  )
}

InputGroup.propTypes = {
  title: PropTypes.string,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool,
  theme: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.node,
  flexGrow: PropTypes.bool,
  search: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm']),
  padding: PropTypes.number,
  noTranslation: PropTypes.bool,
}

InputGroup.defaultProps = {
  title: 'input group',
  theme: 'secondary',
  uppercase: true,
  underline: true,
  width: 'full',
  search: false,
  size: 'sm',
  padding: 2,
  noTranslation: false,
}

export default InputGroup

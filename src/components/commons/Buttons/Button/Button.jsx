import React from 'react'
import PropTypes from 'prop-types'
import useMobileDetect from 'use-mobile-detect-hook'

// styles
import { useTranslation } from 'react-i18next'
import { Btn } from './styles'
import Spinner from '../../Spinner/Spinner'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Button = ({
  primary,
  border = true,
  backgroundColor,
  size,
  label,
  loading,
  onClick,
  shortcut,
  transparent,
  type,
  disabled,
  uppercase,
  bgWhite,
  textTranform,
}) => {
  const detectMobile = useMobileDetect()
  const mode = primary ? 'primary' : 'secondary'
  const text = primary ? 'white' : 'primary'
  const outline = border ? 'primary tw-border-2 tw-border-solid' : 'none'
  const { t } = useTranslation()
  return (
    <Btn
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`Button tw-bg-${transparent ? 'transparent' : mode} ${
        bgWhite && 'tw-bg-white'
      } tw-text-${text} tw-border-${outline} tw-px-4 tw-flex tw-items-center tw-font-Atkinson tw-w-full tw-opacity-${
        disabled ? '40' : '100'
      }`}
      size={size}
      style={backgroundColor && { backgroundColor }}
      shortcut={detectMobile.isDesktop() && shortcut}
    >
      <div
        className={`label tw-text-${text} ${
          !detectMobile.isDesktop() && 'tw-mr-2'
        }`}
      >
        {loading ? (
          <Spinner
            color={transparent ? backgroundColor || '#7D185C' : '#FFFFFF'}
            size="small"
          />
        ) : (
          <Paragraphs
            weight="bold"
            size="xs"
            uppercase={uppercase}
            className={textTranform && `tw-${textTranform}`}
          >
            {t(`actions.${label}`)}
          </Paragraphs>
        )}
      </div>

      {/* {notifications ? (
        <Paragraphs
          className="shortcut tw-text-white tw-font-thin tw-text-xxs tw-opacity-80 tw-text-right tw-rounded-full tw-bg-activeMenu tw-px-2 tw-py-1"
          weight="bold"
        >
          {notifications}
        </Paragraphs>
      ) : (
        <Paragraphs className="shortcut tw-text-white tw-font-thin tw-text-xxs tw-opacity-80 tw-text-right">
          {detectMobile.isDesktop() && shortcut && shortcut}
        </Paragraphs>
      )} */}
    </Btn>
  )
}
Button.propTypes = {
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  border: PropTypes.bool,
  shortcut: PropTypes.string,
  type: PropTypes.string,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  notifications: PropTypes.string,
  bgWhite: PropTypes.bool,
  textTranform: PropTypes.oneOf([
    'uppercase',
    'lowercase',
    'capitalize',
    'normal-case',
  ]),
  uppercase: PropTypes.bool,
}

Button.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
  type: 'button',
  disabled: false,
  notifications: null,
  uppercase: false,
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import IcAlert from '../Icons/IcAlert'
import IcCheckCircle from '../Icons/IcCheckCircle'
import IcWarning from '../Icons/IcWarning'
import IcInfo from '../Icons/IcInfo'

function CustomAlert({ mode, children, boxShadow, size }) {
  const alertCase = () => {
    switch (mode) {
      case 'success':
        return {
          color: 'green',
          icon: <IcCheckCircle color="#10B981" />,
          intensity: '200',
        }
      case 'danger':
        return {
          color: 'red',
          icon: <IcAlert color="#EF4444" />,
          intensity: '100',
        }
      case 'warning':
        return {
          color: 'yellow',
          icon: <IcWarning color="#FBBF24" />,
          intensity: '100',
        }
      case 'info':
        return {
          color: 'blue',
          icon: <IcInfo color="#3B82F6" />,
          intensity: '100',
        }
      default:
        return {
          color: 'green',
          icon: <IcCheckCircle color="#10B981" />,
          intensity: '200',
        }
    }
  }

  const { color, icon, intensity } = alertCase()

  return (
    <div className="tw-w-full">
      <div
        className={`tw-bg-${color}-${intensity} tw-px-4 tw-py-2 tw-rounded-md tw-tw-text-lg tw-flex tw-items-center tw-mx-auto tw-w-${size} tw-xl:w-2/4 ${
          boxShadow && 'tw-shadow-xl'
        }`}
      >
        <div style={{ width: 20 }}>{icon}</div>
        <Paragraphs className={`tw-text-${color}-800 tw-pl-2 tw-text-center`}>
          {children}
        </Paragraphs>
      </div>
    </div>
  )
}

CustomAlert.propTypes = {
  mode: PropTypes.oneOf(['success', 'danger', 'alert', 'warning']),
  children: PropTypes.node,
  boxShadow: PropTypes.bool,
  size: PropTypes.string,
}
CustomAlert.defaultProps = {
  mode: 'alert',
  boxShadow: false,
  size: '3/4',
}

export default CustomAlert

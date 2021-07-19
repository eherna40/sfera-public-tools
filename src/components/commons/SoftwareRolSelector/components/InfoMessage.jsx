import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const InfoMessage = ({ message, color, children }) => {
  const {t} = useTranslation()

  return (
    <div
      className={`tw-flex tw-gap-1 tw-w-full tw-items-center tw-text-${color} tw-text-xs tw-font-bold`}
    >
      <div className="tw-flex tw-items-center tw-justify-center">
        {children}
      </div>
      <p
        className="tw-pt-1 tw-flex tw-items-center tw-justify-center"
        style={{ fontSize: '10px' }}
      >
        {t(`labels.${message}`)}
      </p>
    </div>
  )
}

InfoMessage.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
}

InfoMessage.defaultProps = {
  message: '',
}

export default InfoMessage

import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../Paragraphs/Paragraphs'

const StatusBarButton = ({ title, shortcut, onClick, api }) => {
  const { t } = useTranslation()
  return (
    <div
      className="tw-flex tw-w-full tw-justify-between tw-p-4"
      onClick={() => onClick(api.getSelectedRows())}
      aria-hidden
    >
      <Paragraphs
        size="xs"
        weight="bold"
        className="tw-text-primary tw-cursor-pointer hover:tw-underline tw-uppercase"
      >
        {t(`placeholders.${title}`)}
      </Paragraphs>
      <Paragraphs size="xxs" className="tw-text-primary tw-opacity-80">
        {shortcut}
      </Paragraphs>
    </div>
  )
}

StatusBarButton.propTypes = {
  title: PropTypes.string,
  shortcut: PropTypes.string,
  onClick: PropTypes.func,
}

StatusBarButton.defaultProps = {
  title: 'BOTÓN',
  shortcut: 'CTRL + B',
  onClick: () => null,
}

export default StatusBarButton

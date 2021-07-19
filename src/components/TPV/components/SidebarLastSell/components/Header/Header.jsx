import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'
import { useTranslation } from 'react-i18next'

const Header = ({ date, user }) => {
  const { t } = useTranslation()
  return (
    <div className="tw-flex tw-justify-between tw-items-center">
      <div className="tw-text-secondary">
        <Paragraphs size="xxs" weight="bold">
          {date}
        </Paragraphs>
      </div>
      <div className="tw-flex">
        <div className="tw-text-grey-400">
          <Paragraphs className="tw-mr-1" size="xxs">
            {t('labels.Atendido por')}
          </Paragraphs>
        </div>
        <Paragraphs size="xxs" weight="bold">
          {user}
        </Paragraphs>
      </div>
    </div>
  )
}

Header.propTypes = {
  date: PropTypes.string,
  user: PropTypes.string,
}

Header.defaultProps = {
  date: '16/12/2020 - 16:01',
  user: 'JOAN M.',
}

export default Header

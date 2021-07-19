import React from 'react'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const MenuEditAndClone = ({ onClick, name, shortcut }) => {
  const { t } = useTranslation()
  return (
    <div>
      <div
        aria-hidden="true"
        className="tw-flex tw-justify-between tw-items-cente tw-cursor-pointer tw-my-3"
        onClick={onClick}
      >
        <div className="">
          <Paragraphs>
            <span style={{ fontWeight: 'normal' }}>
              {t(`placeholders.${name}`)}
            </span>
          </Paragraphs>
        </div>
        <div className="tw-text-primary">
          <Paragraphs weight="bold" size="xxs">
            {shortcut}
          </Paragraphs>
        </div>
      </div>
      <div className="">
        <hr />
      </div>
    </div>
  )
}

export default MenuEditAndClone

import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// Components
import SideMenuTitle from './components/SideMenuTitle'
import SideMenuLink from './components/SideMenuLink'

const SideMenu = ({ links, title, selectedLinkId }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="tw-flex lg:tw-w-2/12 sm:tw-w-3/12 tw-mx-8 tw-p-8 tw-mb-20 tw-bg-secondary tw-bg-opacity-10 tw-flex-col">
        <SideMenuTitle>{t(`labels.${title}`)}</SideMenuTitle>
        <ul>
          {links.length > 0 &&
            links.map((link, index) => (
              <SideMenuLink
                key={`${link.title}-${index}`}
                selectedId={selectedLinkId}
                title={link.title}
                toggle={link.toggle}
                group={link.group}
                main
              />
            ))}
        </ul>
      </div>
    </>
  )
}

SideMenu.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  selectedLinkId: PropTypes.number,
}

SideMenu.propTypes = {
  title: 'Índice',
}

export default SideMenu

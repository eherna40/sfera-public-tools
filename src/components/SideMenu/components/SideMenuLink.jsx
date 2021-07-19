/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IcArrowDown from '../../commons/Icons/IcArrowDown'
import IcArrowUp from '../../commons/Icons/IcArrowUp'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'
import colors from '../../../styles/colors'

const SideMenuLink = ({ selectedId, id, main, title, group = [], toggle }) => {
  const [showSubmenu, setShowSubmenu] = useState(false)
  // const { theme } = useConfigurations()
  // const { getColorFromTheme } = useTheme()
  const handleDisplayGroup = () => setShowSubmenu(!showSubmenu)

  return (
    <li>
      <div
        onClick={toggle || handleDisplayGroup}
        className="tw-w-full tw-pb-2 tw-flex tw-justify-between tw-items-center"
        aria-hidden="true"
      >
        <Paragraphs
          className={`tw-cursor-pointer ${
            main && 'tw-text-primary hover:tw-underline'
          }
            ${selectedId === id && 'tw-text-secondary'}
            `}
          size={main ? 'base' : 'xs'}
          weight={main || selectedId === id ? 'bold' : 'regular'}
        >
          {title}
        </Paragraphs>
        {group.length > 0 && (
          <div onClick={handleDisplayGroup}>
            {showSubmenu ? (
              <IcArrowUp size={32} color={colors.primary} />
            ) : (
              <IcArrowDown size={32} color={colors.primary} />
            )}
          </div>
        )}
      </div>
      {group.length > 0 && (
        <>
          <ul className={`tw-pl-${2 + id}`}>
            {group.map(
              (link, index) =>
                showSubmenu && (
                  <SideMenuLink
                    key={`sidelink-${title}-${index}`}
                    selectedId={selectedId}
                    {...link}
                  />
                ),
            )}
          </ul>
        </>
      )}
    </li>
  )
}

SideMenuLink.propTypes = {
  selectedId: PropTypes.number,
  id: PropTypes.number,
  main: PropTypes.bool,
  title: PropTypes.string,
  group: PropTypes.array,
  toggle: PropTypes.func,
}

export default SideMenuLink

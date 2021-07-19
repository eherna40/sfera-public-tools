import React from 'react'
import PropTypes from 'prop-types'
import { useDrop } from 'react-dnd'
// eslint-disable-next-line
import colors from '../../../../styles/colors'

// components
import IcFolder from '../../../commons/Icons/IcFolder'
import IcExpandLess from '../../../commons/Icons/IcExpandLess'
import IcExpandMore from '../../../commons/Icons/IcExpandMore'
import IcMoreVertical from '../../../commons/Icons/IcMoreVertical'
import PopoverMenu from '../PopoverMenu/PopoverMenu'
import { SubMenu } from './styles'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return 'rgba(0,0,0,.2)'
  }
  if (canDrop) {
    return 'transparent'
  }
  return 'transparent'
}

const Folder = ({
  open,
  name,
  children,
  onClick,
  allowedDropEffect,
  id,
  toggle,
  show,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({
      id,
      allowedDropEffect,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  const backgroundColor = selectBackgroundColor(isActive, canDrop)

  const handlePopoverClick = (option) => toggle(option, { id, name })

  return (
    <div
      ref={drop}
      style={{ backgroundColor }}
      className="Folder tw-relative tw-cursor-pointer"
    >
      {show && (
        <div
          className="tw-flex tw-items-center tw-justify-between tw-p-4"
          onClick={onClick}
          aria-hidden="true"
        >
          <div className="tw-flex tw-items-center">
            <IcFolder size={24} />
            <Paragraphs
              className="tw-text-white tw-ml-2 tw-whitespace-nowrap tw-overflow-hidden tw-overflow-ellipsis tw-w-24"
              weight="bold"
              size="base"
            >
              {show && name}
            </Paragraphs>
          </div>
          <div className="arrow tw-flex  tw-items-center tw-justify-center tw-right-2">
            {open ? <IcExpandLess size={24} /> : <IcExpandMore size={24} />}

            <SubMenu
              aria-hidden="true"
              className="tw-flex tw-items-center tw-justify-center tw-relative"
            >
              <IcMoreVertical size={24} color={colors.primary} />
              <div className="tw-absolute popover">
                <PopoverMenu
                  options={['Eliminar']}
                  optionClick={handlePopoverClick}
                />
              </div>
            </SubMenu>
          </div>
        </div>
      )}

      {open && <div className="folder-items ">{children}</div>}
    </div>
  )
}

Folder.propTypes = {
  name: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  toggle: PropTypes.func,
  show: PropTypes.bool,
}

Folder.defaultProps = {
  open: false,
}

export default Folder

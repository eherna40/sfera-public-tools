import React from 'react'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'

const DrawableItem = ({ id, fav, children, onMove, margin }) => {
  const item = { id, type: 'CARD', fav }
  const [{ isDragging }, drag] = useDrag({
    item,
    end(itemA, monitor) {
      const dropResult = monitor.getDropResult()
      if (itemA && dropResult) {
        onMove(dropResult.id, item.fav)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div
      ref={drag}
      className={`tw-transition-all ${margin ? 'tw-pl-7' : ''}`}
      draggable
      style={{ opacity }}
    >
      {children}
    </div>
  )
}

DrawableItem.propTypes = {
  id_menu: PropTypes.string,
  favId: PropTypes.string,
  margin: PropTypes.bool
}

export default DrawableItem

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import Paragraphs from '../Paragraphs/Paragraphs'
import LinkText from '../../Link/Link'

const Navbar = ({ index, items, onClick }) => {
  const [tabIndex, setactivetab] = useState(index || 0)
  const handleClick = (idx) => {
    if (tabIndex !== idx) {
      setactivetab(idx)
      onClick(idx)
    }
  }
  return (
    <div className="tw-flex tw-gap-8 md:tw-gap-0">
      {items.map((item, idx) => (
        <div key={idx} onClick={() => handleClick(idx)} aria-hidden="true">
          <LinkText text={item} active={tabIndex === idx} />
        </div>
      ))}
    </div>
  )
}

Navbar.propTypes = {
  index: PropTypes.number,
  items: PropTypes.array,
  onClick: PropTypes.func,
}

Navbar.defaultProps = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
}

export default Navbar

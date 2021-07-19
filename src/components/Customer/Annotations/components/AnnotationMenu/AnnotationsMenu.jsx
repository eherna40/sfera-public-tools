import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import AnnotationsItem from '../AnnotationsItem/AnnotationsItem'

const AnnotationsMenu = () => {
  const [active, setActive] = useState(false)

  const types = ['info', 'observation', 'alert', 'pharma']

  const handleActive = (index) => {
    setActive(index)
  }

  return (
    <div className="tw-flex">
      {types.map((type, index) => (
        <AnnotationsItem
          key={index}
          type={type}
          onClick={() => handleActive(index)}
          active={active === index}
          index={index}
        />
      ))}
    </div>
  )
}

AnnotationsMenu.propTypes = {}

export default AnnotationsMenu

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IcClock from '../../commons/Icons/IcClock'
import IcArrowRight from '../../commons/Icons/IcArrowRight'
import { Container } from './styles'

const Box = ({ theme, title, icon, address, onPress }) => {
  const [color, setColor] = useState(theme)

  const handleColor = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.type === 'mouseenter' ? setColor('white') : setColor(theme)
  }

  return (
    <Container
      color={theme}
      onMouseEnter={(e) => handleColor(e)}
      onMouseLeave={(e) => handleColor(e)}
      onClick={onPress}
      aria-hidden
      className="Box group tw-w-full tw-border-2 tw-p-3 tw-mb-3 tw-cursor-pointer tw-bg-transparent"
    >
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-items-center">
          {icon && <IcClock size={21} color={color} />}
          <p className={`${icon && 'tw-pl-2'} tw-text-sm tw-font-bold`}>
            {title}
          </p>
        </div>
        <IcArrowRight size={21} color={color} />
      </div>
      <div className="tw-w-full">
        <span className={`address ${icon && 'tw-pl-6'} tw-text-xs`}>
          {address}
        </span>
      </div>
    </Container>
  )
}
Box.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.bool,
  onPress: PropTypes.func,
}

Box.defaultProps = {
  color: 'green',
  onPress: null,
  address: '',
}

export default Box

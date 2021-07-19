import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useListenerClose from '../../../infrastructure/Hooks/useListenerClose'
import { Container, Pointer } from './styles'

export const Popup = ({ children, left, bottom, background }) => {
  const [visible, setVisible] = useState(true)

  const handleToggle = () => {
    setVisible(false)
  }
  const { ref } = useListenerClose(handleToggle)


  if (visible)
    return (
      <Container
        ref={ref}
        className={`Popup tw-absolute tw-z-50 tw-shadow-lg tw-border tw-border-gray-100 tw-bg-${background}`}
        bottom={bottom}
        left={left}
      >
        <div className="tw-w-full tw-h-full tw-p-4  tw-relative tw-z-50">
          {children}
        </div>
        <Pointer className={`pointer tw-shadow-lg tw-z-50 tw-absolute tw-bg-${background}`} />
      </Container>
    )
  return null
}

Popup.propTypes = {
  children: PropTypes.node,
  left: PropTypes.string, // 10px 10em 10% 10vh
  bottom: PropTypes.string, // 10px 10em 10% 10vh
  background: PropTypes.string //tailwind class
}

Popup.defaultProps = {
  background: 'white',
}



import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Rnd } from 'react-rnd'
import useWindowSize from '../../../infrastructure/Hooks/useWindowSize'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Container } from './styles'
import Backdrop from '../../commons/BackDrop/Backdrop'

const Draggable = ({
  title,
  children,
  footerComponent,
  footerClass,
  className,
  textCancel,
  textSuccess,
  onAccept,
  toggle,
  size,
  sizeButton,
  onOpenModal,
  verticalAlign,
  haveOverlay,
  loading,
  closeWithESC,
  inPortal,
  isMaximizable,
  padding,
  onlyOneButton,
  fullWidth,
  customWidth,
  disableAccept,
  disableDragging,
}) => {
  const [maximizeModal, setMaximizeModal] = useState(fullWidth)
  const reference = useRef(null)
  const refInner = useRef(null)
  const { height, width } = useWindowSize()
  const sizes = {
    sm: 300,
    md: width > 500 ? 500 : width - 200,
    lg: width > 800 ? 800 : width - 200,
    xl: width > 1140 ? 1340 : width - 200,
    custom: width > customWidth ? customWidth : width - 200,
  }

  const [positions, setPositions] = useState({
    x: width / 2 - sizes[size] / 2,
    y: 0,
  })

  const handleMaximize = () => {
    setPositions(
      maximizeModal
        ? {
            x: positions.oldX,
            y: positions.oldY,
          }
        : { x: 0, y: 0, oldX: positions.x, oldY: positions.y },
    )
    setMaximizeModal(!maximizeModal)
  }

  const getViewportWidth = () => {
    if (window.innerWidth) {
      return window.innerWidth
    }
    if (document.body && document.body.offsetWidth) {
      return document.body.offsetWidth
    }
    return 0
  }

  const getViewportHeight = () => {
    if (window.innerHeight) {
      return window.innerHeight
    }
    if (document.body && document.body.offsetHeight) {
      return document.body.offsetHeight
    }
    return 0
  }

  const escFunction = useCallback((event) => {
    // Cerrar con ESC
    if (event.keyCode === 27) {
      // toggle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const modalHeight = refInner.current.clientHeight
    const y = verticalAlign === 'top' ? 100 : height / 2 - modalHeight / 2
    setPositions({
      x: fullWidth ? 0 : width / 2 - sizes[size] / 2,
      y: fullWidth ? 0 : y,
    })
    /* eslint-disable react-hooks/exhaustive-deps */
    if (onOpenModal) onOpenModal()
  }, [])

  useEffect(() => {
    if (closeWithESC) document.addEventListener('keydown', escFunction, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOffsetPosition = (refParam, refInnerParam) => {
    const innerSafeLateral = 40
    const innerSafeLateralLeft = 80

    const viewportX = getViewportWidth()
    const viewportY = getViewportHeight()
    const posX = refParam.current.props.position.x
    const posY = refParam.current.props.position.y

    const maxRight = viewportX - innerSafeLateral
    const maxLeft = innerSafeLateralLeft - refInnerParam.current.clientWidth
    const maxTop = 0
    const maxBottom = viewportY - innerSafeLateral

    if (posX > maxRight) setPositions({ ...positions, x: maxRight })
    if (posX < maxLeft) setPositions({ ...positions, x: maxLeft })

    if (posY < maxTop) setPositions({ ...positions, y: maxTop })
    if (posY > maxBottom) setPositions({ ...positions, y: maxBottom })
  }

  useEffect(() => {
    if (reference && refInner) {
      handleOffsetPosition(reference, refInner)
    }
  }, [positions])

  const onDragStop = (d) => {
    setPositions({ x: d.x, y: d.y })
  }

  const dragHeader = `sphere-${Math.floor(Math.random() * 10 + 1)}`

  const content = (
    <Container className="Draggable tw-fixed tw-w-screen tw-h-screen tw-top-0 tw-left-0">
      <Rnd
        onDragStop={(e, d) => onDragStop(d)}
        ref={reference}
        className={`tw-fixed sfera-modal_${Math.random()}`}
        position={positions}
        style={{
          zIndex: 9999999,
        }}
        disableDragging={disableDragging || maximizeModal}
        dragHandleClassName={dragHeader}
      >
        <div
          className="Draggable"
          ref={refInner}
          style={maximizeModal ? { width: '100vw' } : { width: sizes[size] }}
        >
          {title && (
            <Header
              title={title}
              toggle={toggle}
              headerDragging={dragHeader}
              maximizeModal={maximizeModal}
              setMaximizeModal={setMaximizeModal}
              handleMaximize={handleMaximize}
              isMaximizable={isMaximizable}
            />
          )}
          <div
            className={`Draggable_Body tw-flex tw-flex-col tw-justify-between ${
              padding && `tw-p-${padding}`
            } tw-bg-white ${className}`}
            style={
              maximizeModal
                ? { height: 'calc(100vh - 48px)' }
                : { minHeight: '100%' }
            }
            // style={{
            //     minHeight: minHeight || 'auto',
            //     height: height || 'auto',
            // }}
          >
            {children}
            {footerComponent ? (
              footerComponent()
            ) : (
              <Footer
                size={sizeButton}
                loading={loading}
                className={footerClass}
                onAccept={onAccept}
                toggle={toggle}
                textCancel={textCancel}
                textAccept={textSuccess}
                disableAccept={disableAccept}
                onlyOneButton={onlyOneButton}
              />
            )}
          </div>
        </div>
      </Rnd>
      {haveOverlay && <Backdrop onClick={toggle} opacity="80" />}
    </Container>
  )

  if (inPortal) {
    return ReactDOM.createPortal(
      content,
      document.getElementById('modal-wrapper'),
    )
  }

  return content
}

Draggable.propTypes = {
  haveOverlay: PropTypes.bool,
  footerComponent: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footerClass: PropTypes.string,
  textCancel: PropTypes.string,
  textSuccess: PropTypes.string,
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  closeOnClickOverlay: PropTypes.bool,
  closeWithESC: PropTypes.bool,
  disableDragging: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'custom']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
  onOpenModal: PropTypes.func,
  loading: PropTypes.bool,
  inPortal: PropTypes.bool,
  padding: PropTypes.number,
  fullWidth: PropTypes.bool,
  disableSucces: PropTypes.bool,
  customWidth: PropTypes.number,
  lockPosition: PropTypes.bool,
}

Draggable.defaultProps = {
  haveOverlay: true,
  closeOnClickOverlay: true,
  closeWithESC: true,
  disableDragging: false,
  size: 'md',
  verticalAlign: 'middle',
  loading: false,
  inPortal: true,
  padding: 4,
  fullWidth: false,
  disableAccept: false,
}

export default Draggable

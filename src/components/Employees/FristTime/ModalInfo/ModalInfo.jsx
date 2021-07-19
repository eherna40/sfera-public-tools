import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Draggable from '../../../Modal/Draggable/Draggable'
import Footer from '../../../Modal/Draggable/Footer/Footer'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const ModalInfo = ({
  title,
  message,
  toggle,
  onAccept,
  onSubmit,
  loading,
  alert,
  textAccept,
  textCancel,
  hideCancel,
}) => {
  const { t } = useTranslation()
  return (
    <Draggable
      id="ModalInfo"
      padding={3}
      size="custom"
      toggle={toggle}
      onAccept={onAccept}
      loading={loading}
      footerComponent={() => null}
      customWidth={550}
    >
      <div className="tw-flex tw-flex-col tw-gap-4 tw-p-6">
        <Paragraphs
          className={alert ? 'tw-text-alert' : 'tw-text-primary'}
          size="base"
          weight="bold"
        >
          {title && t(`labels.${title}`)}
        </Paragraphs>
        <Paragraphs>
          {message.map((m, index) => (
            <div key={index}>
              {m && t(`messages.${m}`)}
              <br />
            </div>
          ))}
        </Paragraphs>
        <Footer
          type="submit"
          toggle={toggle}
          onAccept={onSubmit}
          loading={loading}
          uppecase
          textAccept={textAccept || 'Aceptar'}
          textCancel={textCancel || 'Añadir ahora'}
          hideCancel={hideCancel}
        />
      </div>
    </Draggable>
  )
}

ModalInfo.propTypes = {
  title: PropTypes.string,
  message: PropTypes.array,
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  alert: PropTypes.bool,
  textAccept: PropTypes.string,
  textCancel: PropTypes.string,
  hideCancel: PropTypes.bool,
}

ModalInfo.defaultProps = {
  title: 'title',
  message: ['message'],
  toggle: () => null,
  onAccept: () => null,
  onSubmit: () => null,
  loading: false,
  hideCancel: false,
}

export default ModalInfo

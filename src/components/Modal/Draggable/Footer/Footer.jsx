import React from 'react'
// import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Button from '../../../commons/Buttons/Button/Button'
import CustomAlert from '../../../commons/CustomAlert/CustomAlert'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const Footer = ({
  className,
  loading,
  textAccept,
  textCancel,
  onAccept,
  toggle,
  size,
  onlyOneButton,
  justify,
  type,
  hideCancel,
  uppercase,
  ocultarAceptar,
  disableAccept,
}) => (
  <div
    className={`SferaModal_Footer tw-bg-white ${className} tw-flex ${
      onlyOneButton
        ? `tw-justify-${justify || 'center'}`
        : `tw-justify-${!hideCancel ? 'between' : 'end'}`
    } tw-mt-4`}
  >
    {onlyOneButton ? (
      <Button
        size={size || 'small'}
        loading={loading}
        label={textAccept || 'Aceptar'}
        onClick={onAccept}
        primary
        disabled={loading}
      />
    ) : (
      <>
        {!hideCancel && (
          <Button
            size={size || 'small'}
            transparent
            label={textCancel || 'Cancelar'}
            onClick={toggle}
          />
        )}
        {ocultarAceptar ? (
          <CustomAlert mode="warning">
            <Paragraphs>{ocultarAceptar}</Paragraphs>
          </CustomAlert>
        ) : (
          <Button
            uppercase={uppercase}
            type={type}
            size={size || 'small'}
            // loading={loading}
            label={textAccept || 'Aceptar'}
            onClick={onAccept}
            primary
            disabled={loading || disableAccept}
          />
        )}
      </>
    )}
  </div>
)

Footer.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  textAccept: PropTypes.string,
  textCancel: PropTypes.string,
  onAccept: PropTypes.func,
  toggle: PropTypes.func.isRequired,
  onlyOneButton: PropTypes.bool,
  disableCancel: PropTypes.bool,
  justify: PropTypes.oneOf(['end', 'start', 'between', 'center']),
  type: PropTypes.oneOf(['submit', 'button']),
  hideCancel: PropTypes.bool,
  disableAccept: PropTypes.bool,
}

Footer.defaultProps = {
  type: 'button',
  hideCancel: false,
  disableAccept: false,
}

export default Footer

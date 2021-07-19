import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import IcMaximize from '../../../commons/Icons/IcMaximize'
import IcMinimize from '../../../commons/Icons/IcMinimize'

const Header = ({
  title,
  headerDragging,
  maximizeModal,
  handleMaximize,
  isMaximizable,
}) => (
  <Container
    className={`SferaModal_Header tw-flex tw-justify-between tw-items-center tw-px-4 tw-bg-tertiary ${
      headerDragging || ''
    }`}
  >
    <div className="SferaModal_Header__title">
      <span className="tw-text-white tw-font-bold title">{title}</span>
    </div>
    {isMaximizable && (
      <div
        className="SferaModal_Header__Close tw-cursor-pointer"
        onClick={handleMaximize}
        aria-hidden="true"
      >
        {maximizeModal ? (
          <IcMinimize size={16} color="#FFFFFF" />
        ) : (
          <IcMaximize size={16} color="#FFFFFF" />
        )}
      </div>
    )}
  </Container>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  headerDragging: PropTypes.string,
  maximizeModal: PropTypes.bool,
  handleMaximize: PropTypes.func,
  isMaximizable: PropTypes.bool,
}

Header.defaultProps = {
  maximizeModal: false,
}

export default Header

/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react'

// Components
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import Pins from '../Form/Pins/Pins'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'
import Button from '../Buttons/Button/Button'
import IcLocked from '../Icons/IcLocked'

const UnlockModal = ({ toggle, onUnlock, loading }) => (
  <Draggable
    footerComponent={() => null}
    toggle={toggle}
    className="tw-bg-black"
  >
    <Container className="tw-flex tw-flex-col tw-gap-8 tw-p-2 tw-h-full tw-justify-between tw-items-center tw-relative">
      <div className="icon-container tw-flex tw-items-center tw-justify-center tw-bg-primary tw-rounded-full">
        <IcLocked size={40} color="white" />
      </div>
      <Paragraphs weight="bold" size="base">
        Desbloquear edición por un administrador
      </Paragraphs>
      <Pins
        size="large"
        title=""
        onChange={() => null}
        autoFocus
        onComplete={onUnlock}
      />

      <Button label="Cancelar" loading={loading} onClick={toggle} transparent />
    </Container>
  </Draggable>
)

UnlockModal.propTypes = {
  toggle: PropTypes.func,
  onUnlock: PropTypes.func,
}

UnlockModal.defaultProps = {
  toggle: () => null,
  onUnlock: () => null,
}

export default UnlockModal

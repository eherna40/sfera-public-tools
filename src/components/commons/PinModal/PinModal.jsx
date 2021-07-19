/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react'
import { useTranslation } from 'react-i18next'

// Components
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import Pins from '../Form/Pins/Pins'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'
import { useLogin } from '../../../infrastructure/Hooks/Login/useLogin'
import Spinner from '../Spinner/Spinner'
import { useNavigation } from '../../../infrastructure/Hooks/navigation/useNavigation'

const PinModal = ({ id, userName, toggle }) => {
  const { t } = useTranslation()
  const { pseudoLogin, loading, error } = useLogin()
  const navigation = useNavigation()
  const onComplete = async (e, pins) => {
    navigation.reset()
    const parsedId = Number(id)
    const res = await pseudoLogin(e, parsedId)
    if (res.success) {
      toggle()
    }
    if (pins && pins.current) {
      pins.current.forEach((input) => (input.value = ''))
      pins.current[0].focus()
    }
  }

  return (
    <Draggable
      footerComponent={() => null}
      toggle={() => null}
      className="tw-bg-black"
    >
      <Container className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-10 tw-relative">
        {loading && (
          <div className="tw-flex tw-items-center tw-justify-center tw-absolute tw-bg-white tw-h-full tw-w-full tw-bg-opacity-80">
            <Spinner color="black" />
          </div>
        )}
        <Paragraphs
          weight="bold"
          size="base"
          className="tw-text-secondary tw-pb-4"
        >
          {userName}
        </Paragraphs>
        <Paragraphs weight="bold" size="base">
          {t('labels.Introduce el código PIN para desbloquear')}
        </Paragraphs>
        <Pins
          size="large"
          title=""
          onComplete={onComplete}
          onChange={() => null}
          autoFocus
          disabled={loading}
        />
        <Paragraphs size="xs" className="tw-text-alert tw-p-4">
          {error && error.message}
        </Paragraphs>
      </Container>
    </Draggable>
  )
}

PinModal.propTypes = {
  id: PropTypes.string,
  userName: PropTypes.string,
  toggle: PropTypes.func,
}

PinModal.defaultProps = {
  toggle: () => null,
}

export default PinModal

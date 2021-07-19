import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { useTranslation } from 'react-i18next'
import Draggable from '../Modal/Draggable/Draggable'
import Logo from '../Logo/Logo'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import TextInput from '../commons/Form/TextInput/TextInput'
import { useAreaPrivada } from '../../infrastructure/Hooks/useAreaPrivada'
import useFlashMessage from '../../infrastructure/Hooks/useFlashMessage'

const ModalAreaPrivada = ({ toggle }) => {
  const { obtenerAreaPrivada, loadingObtener } = useAreaPrivada()
  const { t } = useTranslation()

  const { showMessage } = useFlashMessage()
  const { handleSubmit, register } = useForm()
  const onSubmit = async (inputs) => {
    const { data } = await obtenerAreaPrivada({
      variables: {
        ...inputs,
      },
    })
    if (data && data.guardarCredencialesAreaprivada) {
      window.open(
        data.guardarCredencialesAreaprivada.url_acceso_iofnet,
        '_blank',
      )
      toggle()
      return
    }

    showMessage(
      'alert',
      t('messages.Credenciales Area Privada'),

      t('messages.Credenciales invalidas'),
    )
  }
  return (
    <Draggable
      loading={loadingObtener}
      onAccept={handleSubmit(onSubmit)}
      toggle={() => toggle()}
      textSuccess="Acceder"
      className="ModalAreaPriva"
    >
      <div className="ModalAreaPriva-header tw-flex tw-items-center tw-justify-center tw-py-4">
        <Logo />
      </div>
      <div className="ModalAreaPrivada-body tw-flex tw-flex-col tw-items-center">
        <Paragraphs className="tw-text-center tw-py-3">
          {t(
            'messages.Para acceder al area privada, porfavor introduce las credenciales de acceso de tu area privada.',
          )}
        </Paragraphs>
        <form onSubmit={handleSubmit(onSubmit)} className="tw-w-9/12 ">
          <TextInput reference={register} name="codigo_socio" label="Usuario" />
          <TextInput reference={register} name="password" label="password" />
        </form>
      </div>
    </Draggable>
  )
}

ModalAreaPrivada.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default ModalAreaPrivada

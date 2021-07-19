import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Wrapper, WrapperLoadFile } from './styles'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import PinInput from '../../../commons/Form/PinInput/PinInput'
import LoadFile from '../../Profile/Forms/LoadFile/LoadFile'
import Footer from '../../../Modal/Draggable/Footer/Footer'

const AccessInfo = ({
  validateData,
  onSubmit,
  toggle,
  profile,
  pharmacy,
  submitting,
}) => {
  const [avatarfile, setavatarfile] = useState(null)
  const {
    register,
    handleSubmit,
    errors,
    reset,
    getValues,
    formState,
    control,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })
  const { isSubmitting } = formState
  const { t } = useTranslation()
  useEffect(() => {
    submitting(isSubmitting)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting])

  useEffect(() => {
    // seteamos por default los valores iniciales del usuario en el formulario

    if (profile && pharmacy) {
      if (profile.pin && profile.repeatPin) {
        delete profile.pin
        delete profile.repeatPin
      }
      reset({
        ...profile,
        id_sertec: pharmacy.id_sertec,
        nickname: '',
      })
     
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [])

  useEffect(() => {
    if (profile.avatar) {
      setavatarfile(profile.avatar)
    }
  }, [profile?.avatar])

  const revalidatePin = (value) => {
    const val = getValues('pin')
    if (value === val) {
      return true
    }
    return 'Debe coincidir con campo PIN'
  }

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, avatarfile))}
      className="tw-h-full tw-w-full tw-flex tw-flex-col tw-overflow-x-auto tw-justify-between"
    >
      <Wrapper className="tw-w-full tw-flex-1 ">
        <Paragraphs
          weight="bold"
          size="lg"
          className="tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2"
        >
          <div>
            <div>{t('labels.Hola')}</div>
            <Paragraphs size="xs" weight="regular" className="tw-text-gray-400">
              {t(
                'messages.Para configurar tu perfil de administrador como titular de la farmacia necesitamos que completes algunos datos.',
              )}
            </Paragraphs>
          </div>
          <Paragraphs size="xs" weight="bold" className="tw-text-alert">
            {t('messages.Los campos marcados con asterisco son obligatorios*')}
          </Paragraphs>
        </Paragraphs>
        <InputGroup title="Mis datos">
          <div className="tw-flex tw-w-full">
            <WrapperLoadFile className="tw-pr-4">
              <LoadFile
                label="Imagen de perfil"
                type="photo"
                size="small"
                onChangePicture={(file) => setavatarfile(file)}
                avatar={profile && profile.avatar}
                name="first_time"
              />
            </WrapperLoadFile>
            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-flex-wrap">
              <div className="tw-pr-4 tw-w-4/12">
                <TextInput
                  size="large"
                  reference={register({
                    required: {
                      value: true,
                      message: 'Campo obligatorio',
                    },
                  })}
                  required
                  name="nombre"
                  label="Nombre y apellidos"
                  error={errors?.nombre?.message}
                />
              </div>
              <div className="tw-pr-4 tw-w-4/12">
                <TextInput
                  size="large"
                  reference={register({
                    required: {
                      value: true,
                      message: 'Campo obligatorio',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                    validate: (value) =>
                      !isSubmitting && profile.email !== value
                        ? validateData(value, 'email')
                        : true,
                  })}
                  name="email"
                  label="E-mail"
                  error={errors?.email?.message}
                  required
                  type="text"
                />
              </div>
              <div className="tw-pr-4">
                <TextInput
                  reference={register({
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'Formato inválido',
                    },
                    // required: {
                    //   value: true,
                    //   message: 'Campo requerido',
                    // },
                  })}
                  // required
                  error={errors?.telefono?.message}
                  name="telefono"
                  label="Teléfono"
                  size="large"
                  type="phone"
                />
              </div>
              <div className="tw-pr-4">
                <TextInput
                  reference={register({
                    required: {
                      value: true,
                      message: 'Campo obligatorio',
                    },
                    pattern: {
                      value: /^(X(-|\.)?0?\d{7}(-|\.)?[A-Z]|[A-Z](-|\.)?\d{7}(-|\.)?[0-9A-Z]|\d{8}(-|\.)?[A-Z])$/i,
                      message: 'Formato inválido',
                    },
                    // validate: (value) =>
                    //   !isSubmitting &&
                    //   profile.dni !== value ?
                    //   validateData(value, 'dni'): false
                  })}
                  required
                  name="dni"
                  label="NIF"
                  error={errors?.dni?.message}
                />
              </div>
            </div>
          </div>
        </InputGroup>
        <div className="tw-mt-16">
          <InputGroup title="Datos de acceso">
            <div className="tw-flex tw-w-full ">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-flex-wrap">
                <div className="tw-pr-4">
                  <TextInput
                    // required
                    disabled
                    name="id_sertec"
                    label="¿Como quieres que se llame tu farmacia?"
                    size="small"
                    error={errors?.id_sertec?.message}
                    reference={register}
                  />
                </div>
                <div className="tw-pr-4">
                  <Controller
                    render={(props) => (
                      <TextInput
                        required
                        name="nickname"
                        label="Nombre de usuario"
                        size="small"
                        error={errors?.nickname?.message}
                        value={props.value}
                        onChange={(el) => {
                          let val = el.target.value.toLowerCase()
                          val = val.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')
                          val = val.replace('@', 'at')
                          val = val
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                          val = val.replace(' ', '_')
                          props.onChange(val)
                        }}
                      />
                    )}
                    name="nickname"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Campo obligatorio',
                      },
                    }}
                  />

                  {/* <TextInput
                    reference={register({
                      required: {
                        value: true,
                        message: 'Campo obligatorio',
                      },
                      validate: (value) =>
                        !isSubmitting && validateData(value, 'nickname'),
                    })}
                    required
                    name="nickname"
                    label="Nombre de usuario"
                    size="small"
                    error={errors?.nickname?.message}
                  /> */}
                </div>
                <div className="tw-pr-4 tw-w-60">
                  <PinInput
                    type="text"
                    error={errors?.pin?.message}
                    reference={register({
                      required: {
                        value: true,
                        message: 'Campo obligatorio',
                      },
                      validate: (value) =>
                        !isSubmitting && validateData(value, 'pin'),
                      minLength: {
                        value: true,
                        message: 'Mínimo 6 dígitos',
                      },
                    })}
                    description="Introduce el código de 6 dígitos numéricos que utilizarás desde hoy para acceder a SFERA."
                    required
                  />
                </div>
                <div className="tw-pr-4 tw-w-60">
                  <PinInput
                    type="text"
                    title="Repetir PIN"
                    name="repeatPin"
                    error={errors?.repeatPin?.message}
                    reference={register({
                      required: {
                        value: true,
                        message: 'Campo obligatorio',
                      },
                      validate: revalidatePin,
                      minLength: {
                        value: true,
                        message: 'Mínimo 6 dígitos',
                      },
                    })}
                    required
                  />
                </div>
              </div>
            </div>
          </InputGroup>
        </div>
      </Wrapper>
      <Footer
        loading={false}
        type="submit"
        size="medium"
        textCancel="Cancelar"
        textAccept="Siguiente"
        toggle={toggle}
      />
    </form>
  )
}

AccessInfo.propTypes = {
  validateData: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.func.isRequired,
  profile: PropTypes.object,
  pharmacy: PropTypes.object,
}
export default AccessInfo

import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Wrapper, WrapperLoadFile } from './styles'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import LoadFile from '../Forms/LoadFile/LoadFile'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import PinInput from '../../../commons/Form/PinInput/PinInput'

// import Profile from '../../../../pages/Employees/Profile/Profile'

const AccessInfo = ({
  register,
  id,
  errors,
  code,
  validateData,
  nickname,
  email,
  refPicture,
  dni,
  setPicutre,
  avatar,
  primer_login,
  control,
}) => {
  const { t } = useTranslation()
  const { usuario } = useSelector((state) => state.userReducer)
  return (
    <Wrapper id="AccessInfo" className="AccessInfo tw-w-full">
      <Paragraphs
        weight="bold"
        size="lg"
        className="tw-flex tw-items-center tw-justify-between tw-w-full"
      >
        <div>{t('labels.Introduzca los datos a continuación')}</div>
        <Paragraphs size="xs" weight="bold" className="tw-text-alert">
          {t('messages.Los campos marcados con asterisco son obligatorios*')}
        </Paragraphs>
      </Paragraphs>
      <InputGroup title="Datos de acceso">
        <div className="tw-flex tw-w-full tw-pb-2 lg:tw-pb-9">
          <div className="tw-flex lg:tw-gap-4 tw-flex-wrap">
            <div>
              <TextInput
                label="Código de la farmacia"
                name="pharma-code"
                size="small"
                transparent
                disabled
                value={code}
                reference={register}
              />
            </div>
            <div>
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
                      val = val.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
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
                  validate: {
                    asyncValidate: (value) =>
                      value === nickname
                        ? true
                        : validateData(value, 'nickname'),
                  },
                }}
              />

              {/* <TextInput
                reference={register({
                  required: {
                    value: true,
                    message: 'Campo obligatorio',
                  },
                  validate: {
                    asyncValidate: (value) =>
                      value === nickname
                        ? true
                        : validateData(value, 'nickname'),
                  },
                })}
                required
                disabled={primer_login}
                name="nickname"
                label="Usuario"
                size="small"
                error={errors?.nickname?.message}
              /> */}
            </div>
            {id && (
              <PinInput
                type="text"
                error={errors?.pin?.message}
                reference={register({
                  required: {
                    value: !id,
                    message: 'Campo obligatorio',
                  },
                  validate: {
                    asyncValidate: (value) => validateData(value, 'pin'),
                  },
                  minLength: {
                    value: true,
                    message: 'Mínimo 6 dígitos',
                  },
                })}
                required={!id}
              />
            )}
          </div>
        </div>
      </InputGroup>
      <InputGroup title="Información del usuario">
        <div className="tw-flex tw-w-full">
          <WrapperLoadFile className="tw-pr-4">
            <LoadFile
              reference={refPicture}
              label="Imagen de perfil"
              type="photo"
              size="small"
              name="picture"
              onChangePicture={setPicutre}
              avatar={avatar}
              mode={id !== usuario.id && 'standard'}
            />
          </WrapperLoadFile>

          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-flex-wrap">
            <div className="tw-pr-4">
              <TextInput
                reference={register({
                  required: {
                    value: true,
                    message: 'Campo obligatorio',
                  },
                })}
                required
                name="nombre"
                label="Nombre y apellidos"
                size="small"
                error={errors?.nombre?.message}
              />
            </div>
            <div className="tw-pr-4">
              <TextInput
                reference={register({
                  pattern: {
                    value: /^(X(-|\.)?0?\d{7}(-|\.)?[A-Z]|[A-Z](-|\.)?\d{7}(-|\.)?[0-9A-Z]|\d{8}(-|\.)?[A-Z])$/i,
                    message: 'Formato inválido',
                  },
                  validate: {
                    asyncValidate: (value) =>
                      value !== ''
                        ? value === dni
                          ? true
                          : validateData(value, 'dni')
                        : true,
                  },
                })}
                name="dni"
                label="NIF"
                size="small"
                error={errors?.dni?.message}
              />
            </div>
           
            <div className="tw-pr-4">
              <TextInput
                type="phone"
                reference={register({
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: 'Formato inválido',
                  },
                  required: {
                    value: Number(id) !== 1,
                    message: 'Telefono obligatorio',
                  },
                })}
                required={Number(id) !== 1}
                error={errors?.telefono?.message}
                name="telefono"
                label="Teléfono"
                size="large"
              />
            </div>
            <div className="tw-pr-4">
              <TextInput
                disabled={primer_login}
                hideLabelErrors
                reference={register({
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                  validate: {
                    asyncValidate: (value) =>
                      value
                        ? value === email
                          ? true
                          : validateData(value, 'email')
                        : true,
                  },
                })}
                name="email"
                label="E-mail"
                size="small"
                error={errors?.email?.message}
                type="text"
              />
            </div>
          </div>
        </div>
      </InputGroup>
    </Wrapper>
  )
}

AccessInfo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  code: PropTypes.string,
  validateData: PropTypes.func,
}
export default AccessInfo

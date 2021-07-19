import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import TextInput from '../commons/Form/TextInput/TextInput'
import Button from '../commons/Buttons/Button/Button'

const ExternalCredential = ({ title, onSubmit, actions, data, keys }) => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (data) {
      reset(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <form
      //   onSubmit={handleSubmit((data, e) => console.log(data.name, e))}
      className="tw-p-4 tw-border tw-my-2 tw-border-green-200"
    >
      <div className=" tw-px-4 ">
        <div className="tw-border-b-2 tw-pl-2 tw-pb-2">
          <Paragraphs weight="bold" className="tw-text-secondary">
            {title}
          </Paragraphs>
        </div>
      </div>
      <div className="tw-flex tw-flex-wrap tw-px-4 tw-justify-between">
        <div className="tw-pt-4 tw-flex">
          <div className="tw-pr-4">
            <TextInput
              error={errors[keys ? keys.user.key : 'user']?.message}
              name={keys ? keys.user.key : 'user'}
              className="tw-pl-2"
              label={keys ? keys.user.name : 'Usuario'}
              reference={register({
                required: 'El nombre no puede ser vacío',
                validate: (value) =>
                  value !== '' || {
                    message: 'El nombre no puede ser vacío',
                  },
              })}
              size="small"
              placeholder={`Escribe tu ${
                keys ? keys.user.name.toLowerCase() : 'usuario'
              } aquí`}
            />
          </div>
          <div className="tw-pr-4">
            <TextInput
              error={errors[keys ? keys.password.key : 'user']?.message}
              name={keys ? keys.password.key : 'Contraseña'}
              label={keys ? keys.password.name : 'Contraseña'}
              type="password"
              reference={register({
                required: 'La contraseña no puede estar vacia',
                validate: (value) =>
                  value !== '' || {
                    message: 'La contraseña no puede estar vacia',
                  },
              })}
              size="small"
              transparent
              classNameInput="tw-text-secondary"
              placeholder={`Escribe la ${
                keys ? keys.password.name.toLowerCase() : 'contraseña'
              } aquí`}
            />
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-items-center">
          {actions &&
            actions.map((i, index) => (
              <div
                key={index}
                className={index !== actions.length - 1 ? 'tw-pr-4' : ''}
              >
                <Button
                  label={i.label}
                  primary={index === actions.length - 1}
                  transparent={index !== actions.length - 1}
                  type={i.type}
                  onClick={handleSubmit((data) => onSubmit(data, i.label))}
                  size={i.size ? i.size : null}
                />
              </div>
            ))}
        </div>
      </div>
    </form>
  )
}

ExternalCredential.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  onSubmit: PropTypes.func,
  data: PropTypes.object,
  keys: PropTypes.object,
}

ExternalCredential.defaultProps = {
  title: 'Title',
  onSubmit: () => null,
  actions: [
    { type: 'submit', label: 'Primero' },
    { type: 'submit', label: 'Segundo' },
    { type: 'submit', label: 'Tercero' },
  ],
}

export default ExternalCredential

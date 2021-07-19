import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Wrapper, InputContent, Error } from './styles'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import RadioInput from '../../../commons/Form/RadioInput/RadioInput'
import PseudoAggrid from '../../../commons/PseudoAggrid/PseudoAggrid'
import Footer from '../../../Modal/Draggable/Footer/Footer'
import ModalInfo from '../ModalInfo/ModalInfo'
import Button from '../../../commons/Buttons/Button/Button'

const InviteEmployeeInfo = ({ onSubmit, toggle, validateData }) => {
  const [rol, setrol] = useState(null)
  const [modalNoEmployees, setmodalNoEmployees] = useState(false)
  const [newemployee, setnewemployee] = useState([])
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm({
    mode: 'onSubmit',
  })
  const { t } = useTranslation()
  const handleDeleteRow = (deletedRow) => {
    const filteredRows = []
    newemployee.forEach(
      (row, index) => index !== deletedRow && filteredRows.push(row),
    )
    setnewemployee(filteredRows)
  }

  const handleOnSubmit = () => {
    if (newemployee && newemployee.length === 0) setmodalNoEmployees(true)
    else {
      onSubmit(newemployee)
      setmodalNoEmployees(false)
      setnewemployee([])
    }
  }

  return (
    <div className="tw-h-full tw-w-full tw-flex tw-flex-col tw-overflow-x-auto tw-justify-between">
      {modalNoEmployees && (
        <ModalInfo
          title="No se ha invitado ningún empleado"
          message={[
            'Está seguro de que no desea invitar por el momento a sus empleados Esta acción podrá realizarla más tarde',
          ]}
          onSubmit={() => {
            onSubmit(newemployee)
            setmodalNoEmployees(false)
          }}
          // textCancel={t('actions.Continuar')}
          textAccept="Continuar"
          toggle={() => setmodalNoEmployees(false)}
          alert
        />
      )}
      <Wrapper className="tw-w-full tw-flex-1 ">
        <Paragraphs
          weight="bold"
          size="lg"
          className="tw-flex tw-items-center tw-justify-between tw-p-2"
        >
          <div>
            <div className="tw-flex-1">
              {t('labels.Añade a las personas de tu equipo')}
            </div>

            <Paragraphs size="xs" weight="regular" className="tw-text-gray-400">
              {t(
                'messages.Te recomendamos que agregues a todos los miembros de tu equipo y les asignes un rol predeterminado para acceder a las aplicaciones de SFERA. ',
              )}
            </Paragraphs>
          </div>
          <Paragraphs size="xs" weight="bold" className="tw-text-alert">
            {t('messages.Los campos marcados con asterisco son obligatorios*')}
          </Paragraphs>
        </Paragraphs>
        <PseudoAggrid
          headers={[
            { name: 'Nombre y apellidos', id: 1 },
            { name: 'Correo electrónico', id: 2 },
            { name: 'Teléfono móvil', id: 3 },
            { name: 'Rol', id: 4 },
          ]}
          rows={newemployee}
          onDeleteRow={handleDeleteRow}
        />
        <InputGroup title="Añadir nuevo empleado">
          <form className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4">
            {/* <div className="tw-w-2/12"> */}
            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 tw-w-6/12">
              <TextInput
                // description={t(
                //   'messages.Hemos configurado 2 perfiles de acceso predeterminados que podrás modificar y editar en detalle más adelante',
                // )}
                error={errors?.nombre?.message}
                label="Nombre y apellidos"
                name="nombre"
                required
                reference={register({
                  required: {
                    value: true,
                    message: 'Campo obligatorio',
                  },
                  // validate: (value) => validateData(value, 'nickname'),
                })}
              />
            </div>
            <div className="tw-w-4/12">
              <TextInput
                description={t(
                  'messages.En caso de no completarse esta información, se enviará el email al titular de la farmacia.',
                )}
                error={errors?.email?.message}
                label="Correo electrónico"
                name="email"
                reference={register({
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                  validate: (value) =>
                    value !== '' ? validateData(value, 'email') : clearErrors(),
                })}
              />
            </div>
            <div className="tw-w-2/12">
              <TextInput
                error={errors?.telefono?.message}
                label="Teléfono móvil"
                name="telefono"
                type="phone"
                required
                reference={register({
                  required: {
                    value: true,
                    message: 'Campo obligatorio',
                  },
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: 'Formato inválido',
                  },
                })}
              />
            </div>
          </form>
          <div>
            <Paragraphs size="xs" weight="bold" className=" tw-pt-2 ">
              {t(
                'messages.Selecciona el tipo de perfil de acceso a SFERA para la persona de tu equipo',
              )}
              <span className="tw-text-alert">*</span>
            </Paragraphs>
            <InputContent
              error={
                errors?.titular_farmacéutico?.message ||
                errors?.auxiliar_farmacéutico?.message ||
                errors?.no_acceso_farmacéutico?.message
              }
              className="tw-flex tw-w-12/12 xl:tw-w-6/12 tw-justify-between tw-items-center"
            >
              <div className="tw-flex tw-gap-4 tw-items-center tw-justify-between">
                <RadioInput
                  checked={rol === 'titular_farmacéutico'}
                  error={errors?.titular_farmacéutico?.message}
                  name="titular_farmacéutico"
                  checkActive
                  available
                  id={1}
                  label={t('labels.Acceso completo')}
                  reference={register({
                    validate: () =>
                      rol !== null ||
                      'Uno de los tipos de usuarios es obligatorio',
                  })}
                  handleCheck={() => setrol('titular_farmacéutico')}
                />
                <RadioInput
                  checked={rol === 'auxiliar_farmacéutico'}
                  name="auxiliar_farmacéutico"
                  checkActive
                  available
                  id={2}
                  label={t('labels.Acceso básico')}
                  reference={register({
                    validate: () =>
                      rol !== null || 'Uno del los rols es obligatorio',
                  })}
                  handleCheck={() => setrol('auxiliar_farmacéutico')}
                />
              </div>
            </InputContent>
            {errors &&
              (errors?.titular_farmacéutico?.message ||
                errors?.auxiliar_farmacéutico?.message ||
                errors?.no_acceso_farmacéutico?.message) && (
                <Error className={`tw-text-red-600 `}>
                  {t(
                    `errors.${
                      errors?.titular_farmacéutico?.message ||
                      errors?.auxiliar_farmacéutico?.message ||
                      errors?.no_acceso_farmacéutico?.message
                    }`,
                  )}
                </Error>
              )}
          </div>
          <div>
            {t(
              'messages.Hemos configurado 2 perfiles de acceso predeterminados que podrás modificar y editar en detalle más adelante',
            )}
          </div>
        </InputGroup>
      </Wrapper>
      <div className="tw-flex tw-flex-col tw-items-end tw-justify-end">
        <div className="tw-mt-4">
          <Button
            type="submit"
            size="medium"
            label="Guardar"
            onClick={handleSubmit((data) => {
              const duplicate = newemployee.map((i) => {
                const e = i.find((j) => j.id === 2 && j.data === data.email)
                return e
              })
              if (!duplicate[0]) {
                let rols = null
                let rol_id = null
                if (data.titular_farmacéutico) {
                  rols = 'Acceso completo'
                  rol_id = 3
                } else if (data.auxiliar_farmacéutico) {
                  rols = 'Acceso básico'
                  rol_id = 5
                } else if (data.no_acceso_farmacéutico) {
                  rols = t('labels.No permitir acceso')
                  rol_id = 9
                }
                const input = [
                  {
                    id: 1,
                    data: `${data.nombre}`,
                    type: 'Name',
                  },
                  { id: 2, data: data.email || 'no asignado', type: 'Email' },
                  {
                    id: 3,
                    data: `34${data.telefono}` || 'no asignado',
                    type: 'Phone',
                  },
                  {
                    id: 4,
                    data: t(`labels.${rols}`),
                    rol_id,
                    type: 'Rol',
                  },
                ]

                newemployee.push(input)
                setnewemployee(newemployee)
                setrol(null)
                reset()
              } else if (duplicate[0] && duplicate[0].type === 'Email') {
                setError('email', { message: 'E-mail en uso ' })
              }
            })}
            backgroundColor="transparent"
          />
        </div>
        <Footer
          loading={false}
          size="medium"
          textAccept="Finalizar"
          onAccept={handleOnSubmit}
          toggle={toggle}
          onlyOneButton
          justify="end"
        />
      </div>
    </div>
  )
}

InviteEmployeeInfo.propTypes = {
  onSubmit: PropTypes.func,
  validateData: PropTypes.func,
}

InviteEmployeeInfo.propTypes = {
  onSubmit: () => null,
  validateData: () => null,
}

export default InviteEmployeeInfo

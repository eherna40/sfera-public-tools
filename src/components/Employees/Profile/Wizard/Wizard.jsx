import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Wrapper, WrapperWizardCounter, Container } from './styles'
import WizardCounter from '../WizardCounter/WizardCounter'
import AccessInfo from '../AccessInfo/AccessInfo'
import AccessApp from '../AccessApp/AccessApp'
import Summary from '../Summary/Summary'
import Footer from '../../../Modal/Draggable/Footer/Footer'
import { useUser } from '../../../../infrastructure/Hooks/User/useUser'
import Loader from '../../../commons/Loader/Loader'

const Wizard = ({
  wizardstep,
  handleNext,
  handleCancelOrBack,
  showInfoRol,
  values,
  updateSoftwares,
  updateRol,
  validateData,
  loading,
  gotToStep,
}) => {
  const { t } = useTranslation()
  const [currentwizardstep, setcurrentwizardstep] = useState(wizardstep)
  const { usuario } = useSelector((state) => state.userReducer)
  const { register, handleSubmit, errors, reset, formState, control } = useForm(
    {
      mode: 'onSubmit',
      reValidateMode: 'onSubmit',
      shouldFocusError: true,
      defaultValues: {
        telefono: '34 ',
      },
    },
  )

  const [picture, setPicutre] = useState({})
  const { getPharmacyParams } = useUser()
  useEffect(() => {
    reset({ ...values })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  useEffect(() => {
    setcurrentwizardstep(wizardstep)
  }, [wizardstep])
  const handleWizard = (step) => {
    switch (step) {
      case 1:
        return (
          <AccessInfo
            code={getPharmacyParams('code')}
            register={register}
            errors={errors}
            validateData={validateData}
            id={values.id}
            nickname={values.nickname}
            dni={values.dni}
            email={values.email}
            avatar={values.avatar}
            setPicutre={(file) => setPicutre(file)}
            primer_login={values.primer_login}
            control={control}
          />
        )
      case 2:
        return (
          <AccessApp
            softwares={values.softwares}
            showInfo={showInfoRol}
            updateSoftwares={updateSoftwares}
          />
        )
      case 3:
        return (
          <Summary
            softwareItems={values.softwares}
            accessinfo={values}
            code={getPharmacyParams('code')}
            updateRol={updateRol}
          />
        )

      default:
        return null
    }
  }
  const onSubmit = (data, isIndice, step) => {
    handleNext(data, picture, isIndice, step)
  }
  const hasPermissions = () => {
    if (values.nivel && values.nivel < 50) {
      if (usuario.nivel) {
        if (Number(usuario.nivel) <= Number(values.nivel))
          return t('usuarios.No tienes permisos para actualizar este usuario')
      }
    }
    if (wizardstep !== 1) {
      // if (values.nivel >= 50) return t('usuarios.Usuario con accesso total')
      if (values.id === usuario.id)
        return t('usuarios.Un usuario no se puede cambiar permisos a sí mismo')
    }

    return null
  }
  const textCancel = wizardstep === 1 ? 'Cancelar' : 'Anterior'
  const textAccept =
    // eslint-disable-next-line no-nested-ternary
    wizardstep === 3
      ? values.id
        ? 'Actualizar'
        : 'Crear usuario'
      : 'Siguiente'

  return (
    <Wrapper className="tw-flex tw-h-full tw-w-full">
      {formState.isSubmitting && (
        <div className="tw-absolute tw-h-full tw-w-full tw-bg-white tw-top-0 tw-left-0 tw-z-50 tw-flex tw-items-center tw-justify-center">
          <Loader />
        </div>
      )}

      <WrapperWizardCounter className="tw-h-auto tw-w-full tw-mr-8">
        <WizardCounter
          gotToStep={
            wizardstep === 1
              ? handleSubmit((data, a) => onSubmit(data, true, a))
              : gotToStep
          }
          className="tw-h-full"
          wizardstep={currentwizardstep}
          isUpdate={values.id}
          steps={[
            {
              number: 1,
              title: 'Datos personales',
              body:
                'Edita y completa la información básica de acceso de tu colaborador',
            },
            {
              number: 2,
              title: 'Aplicaciones y roles',
              body:
                'Asígnale un perfil predeterminado o personalizado para cada aplicación.',
            },
            {
              number: 3,
              title: 'Resumen',
              body:
                'Comprueba toda la información de tu colaborador',
            },
          ]}
        />
      </WrapperWizardCounter>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="tw-h-full tw-w-full tw-flex tw-flex-col tw-overflow-x-auto tw-justify-between tw-py-10 tw-pr-8"
      >
        <Container className="Wizard_Body tw-flex">
          {handleWizard(wizardstep)}
        </Container>

        <Footer
          ocultarAceptar={hasPermissions()}
          loading={loading}
          type="submit"
          size="medium"
          textCancel={values.id ? 'Cancelar' : textCancel}
          textAccept={values.id ? 'Actualizar' : textAccept}
          // onAccept={handleNext}
          toggle={handleCancelOrBack}
        />
      </form>
    </Wrapper>
  )
}

Wizard.propTypes = {
  wizardstep: PropTypes.number,
  showInfoRol: PropTypes.func,
  validateData: PropTypes.func,
}

Wizard.defaultProps = {
  wizardstep: 1,
  showInfoRol: null,
}

export default Wizard

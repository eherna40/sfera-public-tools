import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Draggable from '../../Modal/Draggable/Draggable'
import Footer from '../../Modal/Draggable/Footer/Footer'
import TextInput from '../../commons/Form/TextInput/TextInput'
import CustomAlert from '../../commons/CustomAlert/CustomAlert'

const ModalFilters = ({
  children,
  size,
  toggle,
  onAccept,
  loading,
  placeholder,
  error,
}) => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()

  return (
    <Draggable
      padding={3}
      title={t('windowsHeaders.GUARDAR FILTRO')}
      size={size}
      toggle={toggle}
      onAccept={onAccept}
      loading={loading}
      footerComponent={() => null}
    >
      <form className="tw-p-4" onSubmit={handleSubmit(onAccept)}>
        <TextInput
          label={t('Nombre filtro')}
          name="filter"
          placeholder={placeholder}
          reference={register({
            required: {
              value: true,
              message: 'Campo obligatorio',
            },
          })}
        />
        {children}
        <Footer
          type="submit"
          toggle={toggle}
          onAccept={() => null}
          loading={loading}
          textAccept="Guardar"
        />
      </form>
      {error && <CustomAlert mode="danger">{error.message}</CustomAlert>}
    </Draggable>
  )
}

ModalFilters.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.object,
}

ModalFilters.defaultProps = {
  size: 'md',
  toggle: null,
  onAccept: null,
  loading: false,
}

export default ModalFilters

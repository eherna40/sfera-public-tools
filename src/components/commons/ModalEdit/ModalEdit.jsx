import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Draggable from '../../Modal/Draggable/Draggable'
import TextInput from '../Form/TextInput/TextInput'
import Footer from '../../Modal/Draggable/Footer/Footer'

const ModalEdit = ({
  children,
  size,
  toggle,
  onAccept,
  loading,
  placeholder,
  label,
}) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    onAccept(data.folderName)
  }

  return (
    <Draggable
      padding={3}
      title="EDITAR CARPETA"
      size={size}
      toggle={toggle}
      onAccept={onAccept}
      loading={loading}
      footerComponent={() => null}
    >
      <form className="tw-p-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label={label}
          name="folderName"
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
        />
      </form>
    </Draggable>
  )
}

ModalEdit.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
}

ModalEdit.defaultProps = {
  size: 'md',
  toggle: null,
  onAccept: null,
  loading: false,
}

export default ModalEdit

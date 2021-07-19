import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Draggable from '../../../Modal/Draggable/Draggable'
import Footer from '../../../Modal/Draggable/Footer/Footer'
import SelectInput from '../../../commons/Form/SelectInput/SelectInput'
import Textarea from '../../../commons/Form/Textarea/Textarea'
import EditableCheck from '../../../commons/EditableCheck/EditableCheck'

const ModalCreateAnnotations = ({ toggle, onAccept, loading }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    onAccept(data.folderName)
  }

  return (
    <Draggable
      padding={3}
      title="NUEVA ANOTACIÓN"
      size="custom"
      customWidth={650}
      toggle={toggle}
      onAccept={onAccept}
      loading={loading}
      footerComponent={() => null}
    >
      <form className="tw-p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-flex tw-w-full tw-gap-4">
          <div className="tw-w-5/12">
            <SelectInput
              label="Tipo"
              items={[
                { name: 'option 1', id: 1 },
                { name: 'option 2', id: 2 },
              ]}
              name="tipo"
              reference={register}
            />
          </div>
          <div className="tw-flex tw-gap-4 tw-w-7/12">
            <SelectInput
              label="Desde"
              items={[
                { name: 'option 1', id: 1 },
                { name: 'option 2', id: 2 },
              ]}
              name="desde"
              reference={register}
            />
            <SelectInput
              label="Hasta"
              items={[
                { name: 'option 1', id: 1 },
                { name: 'option 2', id: 2 },
              ]}
              name="hasta"
              reference={register}
            />
          </div>
        </div>
        <div className="tw-pt-2">
          <Textarea
            label="Mensaje recordatorio"
            labelWeight="bold"
            minHeight={100}
            name="mensaje-recordatorio"
            reference={register}
          />
        </div>
        <EditableCheck
          borderColor="#22949B"
          bgColor="#22949B"
          label="Mostrar ventana flotante con las anotaciones del artículo en la sección correspondiente."
        />
        <div className="tw-pt-4">
          <Footer
            type="submit"
            toggle={toggle}
            onAccept={() => null}
            loading={loading}
            textAccept="AÑADIR"
            textCancel="CANCELAR"
          />
        </div>
      </form>
    </Draggable>
  )
}

ModalCreateAnnotations.propTypes = {
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
  loading: PropTypes.bool,
}

ModalCreateAnnotations.defaultProps = {
  toggle: () => null,
  onAccept: () => null,
  loading: false,
}

export default ModalCreateAnnotations

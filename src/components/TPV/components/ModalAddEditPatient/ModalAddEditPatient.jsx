import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import useCustomer from '../../../../infrastructure/Hooks/Customer/useCustomer'
import { useLocations } from '../../../../infrastructure/Hooks/Locations/useLocations'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import SelectInput from '../../../commons/Form/SelectInput/SelectInput'
import DateInput from '../../../commons/Form/DateInput/DateInput'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import Draggable from '../../../Modal/Draggable/Draggable'

const ModalAddEditPatient = ({ toggle, clientId }) => {
  const { register, handleSubmit, errors } = useForm()
  const { getCustomer, createPatient, customer, loading } = useCustomer()
  const actualDate = moment().format('M/D/YYYY')
  const [selectedPopulation, setSelectedPopulation] = useState([])
  const {
    provinces,
    getPopulationsByProvinceId,
    countries,
    populations,
  } = useLocations()

  useEffect(() => {
    getCustomer(clientId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (data) => {
    await createPatient({ cliente_id: clientId, ...data })
    toggle()
  }

  const handleSelectedPopulationCPList = (event) => {
    const {
      target: { value: selectedPopulation },
    } = event

    setSelectedPopulation(populations[selectedPopulation])
  }

  const handleClickProvince = (event) => {
    const {
      target: { value: selectedProvinceId },
    } = event

    getPopulationsByProvinceId(selectedProvinceId)
  }

  return (
    <Draggable
      onAccept={handleSubmit(onSubmit)}
      toggle={toggle}
      size="xl"
      title="AÑADIR PACIENTE"
      textSuccess="CREAR PACIENTE"
      isMaximizable
      loading={loading}
    >
      <div className="tw-flex tw-justify-between tw-w-full tw-border tw-p-2 tw-mb-2">
        <TextInput
          label="ID"
          row={true}
          value={customer.id}
          transparent
          classNameInput="tw-select-none"
          containerStyles="tw-flex tw-items-center tw-pr-4"
          labelStyles="tw-flex tw-items-center tw-pr-4"
        />
        <TextInput
          label="Fecha"
          row={true}
          value={actualDate}
          transparent
          classNameInput="tw-select-none"
          containerStyles="tw-flex tw-items-center tw-pr-4"
          labelStyles="tw-flex tw-items-center tw-pr-4"
        />
        <TextInput
          label="Cliente"
          row={true}
          transparent
          classNameInput="tw-select-none"
          containerStyles="tw-flex tw-items-center tw-pr-4"
          labelStyles="tw-flex tw-items-center tw-pr-4"
          value={customer.nombre}
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="tw-flex ">
          <div className="tw-w-6/12 tw-border tw-mr-4">
            <InputGroup title="DATOS GENERALES">
              <div className="tw-flex tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <TextInput
                    label="Nombre"
                    error={errors?.nombre?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                    name="nombre"
                  />
                </div>
                <div className="tw-w-6/12  ">
                  <TextInput
                    label="Apellidos"
                    error={errors?.apellidos?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                    name="apellidos"
                  />
                </div>
              </div>
              <div className="tw-flex  tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <TextInput
                    label="CIP"
                    error={errors?.cip?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                    name="cip"
                  />
                </div>
                <div className="tw-w-6/12  ">
                  <SelectInput
                    label="Género"
                    error={errors?.sexo?.message}
                    items={[{}, { name: 'F', id: 1 }, { name: 'M', id: 2 }]}
                    name="sexo"
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                  />
                </div>
              </div>
              <div className="tw-flex  tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <DateInput
                    error={errors?.fecha_nacimiento?.message}
                    label="Fecha de Nacimiento"
                    name="fecha_nacimiento"
                    reference={register({
                      required: {
                        value: true,
                        message: 'El campo fecha es obligatorio',
                      },
                    })}
                  />
                </div>
                <div className="tw-w-6/12  ">
                  <SelectInput
                    label="Es pensionista"
                    items={[
                      {},
                      { name: 'Si', id: true },
                      { name: 'No', id: false },
                    ]}
                    name="es_pensionista"
                    error={errors?.es_pensionista?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                  />
                </div>
              </div>
              <div className="tw-w-6/12  ">
                <TextInput
                  label="NIF"
                  error={errors?.nif?.message}
                  reference={register({
                    required: { value: true, message: 'Campo obligatorio' },
                  })}
                  name="nif"
                />
              </div>
            </InputGroup>
          </div>
          <div className="tw-border tw-w-6/12 tw-mr-4">
            <InputGroup title="DIRECCION Y CONTACTO">
              <div className="tw-flex  tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <SelectInput
                    label="Tipo de vía"
                    items={[
                      {},
                      { name: 'Calle', id: 1 },
                      { name: 'Avenida', id: 2 },
                    ]}
                    name="via"
                    error={errors?.via?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                  />
                </div>
                <div className="tw-w-6/12 tw-pr-4">
                  <TextInput
                    label="Nombre"
                    error={errors?.nombre_direccion?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                    name="nombre_direccion"
                  />
                </div>
              </div>
              <div className="tw-flex  tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <TextInput
                    label="Número"
                    error={errors?.numero?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                      pattern: {
                        value: /^[0-9]+$/i,
                        message: 'Formato inválido',
                      },
                    })}
                    name="numero"
                  />
                </div>
                <div className="tw-w-6/12 tw-pr-4">
                  <SelectInput
                    label="Provincia"
                    error={errors?.provincia?.message}
                    items={[
                      {},
                      ...provinces.map(({ descripcion, id }) => ({
                        name: descripcion,
                        id,
                      })),
                    ]}
                    onChange={handleClickProvince}
                    name="provincia"
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                  />
                </div>
                <div className="tw-w-6/12 tw-pr-4">
                  <SelectInput
                    label="Población"
                    error={errors?.poblacion?.message}
                    items={[
                      {},
                      ...Object.keys(populations).map((value) => {
                        return {
                          name: value,
                          id: value,
                        }
                      }),
                    ]}
                    onChange={handleSelectedPopulationCPList}
                    name="poblacion"
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                  />
                </div>
              </div>
              <div className="tw-flex  tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <SelectInput
                    label="C.P"
                    error={errors?.codigo_postal?.message}
                    items={[
                      {},
                      ...selectedPopulation.map(({ codigopostalid, id }) => ({
                        name: codigopostalid,
                        id,
                      })),
                    ]}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                      pattern: {
                        value: /^[0-9]+$/i,
                        message: 'Formato inválido',
                      },
                    })}
                    name="codigo_postal"
                  />
                </div>
                <div className="tw-w-6/12 tw-pr-4">
                  <SelectInput
                    label="País"
                    error={errors?.pais?.message}
                    items={[
                      {},
                      ...countries.map(({ nombre: name, id }) => ({
                        name,
                        id,
                      })),
                    ]}
                    name="pais"
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                  />
                </div>
              </div>
              <div className="tw-flex  tw-mb-4">
                <div className="tw-w-6/12 tw-pr-4">
                  <TextInput
                    label="Telefono móvil"
                    error={errors?.telefono_movil?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                    name="telefono_movil"
                  />
                </div>
                <div className="tw-w-6/12  ">
                  <TextInput
                    label="Correo electrónico"
                    error={errors?.correo_electronico?.message}
                    reference={register({
                      required: { value: true, message: 'Campo obligatorio' },
                    })}
                    name="correo_electronico"
                  />
                </div>
              </div>
            </InputGroup>
          </div>
        </div>
      </form>
    </Draggable>
  )
}

ModalAddEditPatient.propTypes = {}

export default ModalAddEditPatient

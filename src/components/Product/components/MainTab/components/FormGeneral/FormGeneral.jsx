import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../../../../../commons/Form/TextInput/TextInput'

const FormGeneral = ({ product }) => {
  debugger
  const { register } = useForm()
  return (
    <>
      <div className="tw-flex tw-py-8 tw-border-b">
        <div className="tw-w-3/12 tw-mr-4">
          <div className="tw-flex tw-justify-center tw-items-center tw-border tw-h-48">
            <img src={product?.image} alt="IMAGEN" />
          </div>
        </div>

        <div className="tw-w-9/12 tw-flex tw-flex-col">
          <div className="tw-flex">
            <div className="tw-w-48 tw-mr-4">
              <TextInput
                hideError
                disabled
                label="Código"
                value={product?.id || ''}
                name="codigo"
                reference={register}
              />
            </div>
            <div className="tw-flex-grow">
              <TextInput
                hideError
                disabled
                label="Nombre"
                value={product?.nombre || ''}
                name="nombre"
                reference={register}
              />
            </div>
          </div>

          <div className="tw-flex">
            <div className="tw-w-48 tw-mr-4">
              <TextInput
                hideError
                disabled
                label="Código EAN"
                value={product?.ean13 || ''}
                name="codigoEan"
                reference={register}
              />
            </div>
            <div className="tw-flex-grow">
              <TextInput
                hideError
                disabled
                label="Laboratorio"
                value={product?.laboratorio?.nombre || ''}
                name="laboratorio"
                reference={register}
              />
            </div>
          </div>

          <div className="tw-flex">
            <div className="tw-flex-grow tw-mr-4">
              <TextInput
                hideError
                disabled
                label="Grupo Terapéutico"
                value={product?.atc5?.descripcion || ''}
                name="grupoTerapeutico"
                reference={register}
              />
            </div>
            <div className="tw-w-48 tw-mr-4">
              <TextInput
                hideError
                disabled
                label="Tipo"
                value={product?.tipo || ''}
                name="tipo"
                reference={register}
              />
            </div>
            <div className="tw-w-48">
              <TextInput
                hideError
                disabled
                label="Unidad Envases"
                value={
                  (product?.composicion &&
                    product?.composicion[0].unidad_medida) ||
                  ''
                }
                name="unidadEnvases"
                reference={register}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tw-w-6/12 tw-flex tw-flex-col tw-my-8">
        <div className="tw-flex">
          <div className="tw-flex-grow tw-mr-4">
            <TextInput
              hideError
              disabled
              label="Fecha alta"
              value={product?.fecha_alta_insalud || ''}
              name="fechaAlta"
              reference={register}
            />
          </div>
          <div className="tw-w-48 tw-mr-4">
            <TextInput
              hideError
              disabled
              label="Fecha EXO"
              value={product?.fecha_exclusion_insalud || ''}
              name="fechaExo"
              reference={register}
            />
          </div>
          <div className="tw-w-48">
            <TextInput
              hideError
              disabled
              label="Fecha Sus. Sanidad"
              name="fechaSusSanidad"
              value=""
              reference={register}
            />
          </div>
        </div>

        <div className="tw-flex tw-justify-between">
          <div className="tw-w-32">
            <TextInput
              hideError
              disabled
              label="Fecha baja"
              value={product?.fecha_baja_sanidad || ''}
              name="fechaBaja"
              reference={register}
            />
          </div>

          <div className="tw-w-36">
            <TextInput
              hideError
              disabled
              label="Fecha Rehab Sanidad"
              name="fechaRehabSanidad"
              value=""
              reference={register}
            />
          </div>
        </div>
      </div>
    </>
  )
}

FormGeneral.propTypes = {}

export default FormGeneral

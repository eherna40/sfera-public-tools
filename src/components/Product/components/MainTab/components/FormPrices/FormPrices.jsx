import React from 'react'
import { useForm } from 'react-hook-form'

import TextInput from '../../../../../commons/Form/TextInput/TextInput'
import InputGroup from '../../../../../commons/Form/InputGroup/InputGroup'

const FormPrices = ({ product }) => {
  const { register } = useForm()

  return (
    <div className="tw-flex tw-flex-col tw-my-4">
      <div className="tw-flex tw-my-4">
        <div className="tw-w-48 tw-mr-4">
          <TextInput
            hideError
            disabled
            label="P.Laboratorio"
            value={String(product?.precio_laboratorio) || ''}
            name="pLaboratorio"
            reference={register}
          />
        </div>
        <div className="tw-w-48 tw-mr-4">
          <TextInput
            hideError
            disabled
            label="P. Referencia"
            value={String(product?.precio_referencia_iva) || ''}
            name="pReferencia"
            reference={register}
          />
        </div>
        <div className="tw-w-48 tw-mr-4">
          <TextInput
            hideError
            disabled
            label="P.V.P."
            value={String(product?.precio_eur) || ''}
            reference={register}
            name="PVP"
          />
        </div>
        <div className="tw-w-48">
          <TextInput
            hideError
            disabled
            label="P. Financiado"
            name="pFinanciado"
            reference={register}
            value=""
          />
        </div>
      </div>

      <InputGroup
        title="Precios futuros"
        primary
        name="preciosFuturos"
        reference={register}
        value=""
      />

      <div className="tw-flex tw-my-8">
        <div className="tw-w-48 tw-mr-4">
          <TextInput
            hideError
            disabled
            label="Precio con IVA"
            value={String(product?.precio_eur) || ''}
            name="precioIVA"
            reference={register}
          />
        </div>
        <div className="tw-w-48 tw-mr-4">
          <TextInput
            hideError
            disabled
            label="Precio menor"
            value={String(product?.grupoHomogeneo?.precio_menor) || ''}
            name="precioMenor"
            reference={register}
          />
        </div>
        {/* "Precio más bajo"  y "en vigor a partir de" vienen en el campo preciosFuturos, que ahora mismo llega como array vacío */}
        <div className="tw-w-48 tw-mr-4">
          <TextInput
            hideError
            disabled
            label="Precio más bajo"
            name="precioBajo"
            reference={register}
            value=""
          />
        </div>
        <div className="tw-w-48">
          <TextInput
            hideError
            disabled
            label="En vigor a partir de:"
            name="vigorApartir"
            reference={register}
            value=""
          />
        </div>
      </div>
    </div>
  )
}

FormPrices.propTypes = {}

export default FormPrices

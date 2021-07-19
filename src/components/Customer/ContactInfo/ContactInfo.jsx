import React, { useContext } from 'react'

// Components
import TextInput from '../../commons/Form/TextInput/TextInput'
import SelectInput from '../../commons/Form/SelectInput/SelectInput'
import AddressInput from '../../commons/Form/AddressInput/AddressInput'
import PhoneInput from '../../commons/Form/PhoneInput/PhoneInput'
import { CustomerContext } from '../../../infrastructure/contexts/customer/Customer'

const ContactInfo = ({ reference, onClickAdress }) => {
  const { handleModification } = useContext(CustomerContext)

  return (
    <div className="ContactInfo tw-flex tw-flex-col">
      <div className="tw-flex tw-flex-col tw-gap-4">
        <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row">
          <div className="tw-w-9/12">
            <AddressInput
              required
              reference={reference}
              onClickAdress={onClickAdress}
              name="domicilio"
            />
          </div>
          <div className="tw-w-3/12">
            <TextInput
              required
              label="Código postal"
              reference={reference}
              name="localidad_id"
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row">
          <SelectInput
            required
            label="Localidad"
            items={[
              { id: 0, name: 'Option 1' },
              { id: 1, name: 'Option 2' },
            ]}
            name="localidad"
            reference={reference}
          />
          <TextInput
            label="Provincia"
            reference={reference}
            required
            name="provincia"
          />
          <SelectInput
            label="País"
            items={[
              { id: 0, name: 'Option 1' },
              { id: 1, name: 'Option 2' },
            ]}
            name="pais"
            reference={reference}
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row">
          <PhoneInput
            reference={reference}
            label="Teléfono fijo"
            name="telefono1"
            onChange={handleModification}
          />
          <PhoneInput
            reference={reference}
            label="Teléfono móvil"
            name="telefono_movil"
            onChange={handleModification}
          />
          <TextInput
            label="Correo electrónico"
            reference={reference}
            name="email"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

import React, { useState } from 'react'

// Components
import TextInput from '../../commons/Form/TextInput/TextInput'
import MultiSelectorInput from '../../commons/Form/MultiSelectorInput/MultiSelectorInput'

const GeneralInfo = ({ reference }) => {
  const [items, setItems] = useState([
    { name: 'Particular', active: false },
    { name: 'Empresa', active: false },
    { name: 'Hombre', active: false },
    { name: 'Mujer', active: false },
    { name: 'Soltero', active: false },
    { name: 'Casado', active: false },
    { name: 'Developer', active: false },
  ])

  const handleSelect = (e, i) => {
    const newItems = items.map((el) => {
      if (el.name === i.name) {
        return { name: el.name, active: !el.active }
      }
      return el
    })
    setItems(newItems)
  }

  return (
    <div className="general-info tw-flex tw-flex-col tw-pr-2">
      <div className="tw-flex tw-flex-col tw-w-10/12">
        <div className="tw-flex tw-flex-col  xl:tw-flex-row tw-gap-4">
          <div className="tw-w-3/12">
            <MultiSelectorInput
              required
              label="Tipo Cliente"
              items={items}
              onClickItem={handleSelect}
              multi
              reference={reference}
              name="tipo_cliente"
            />
          </div>
          <div className="tw-w-8/12">
            <TextInput
              required
              label="Nombre y apellidos"
              reference={reference}
              name="nombre"
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col xl:tw-flex-row tw-gap-4">
          <div className="tw-w-3/12">
            <TextInput
              required
              label="Fecha de nacimiento"
              reference={reference}
              name="fecha_nacimiento"
            />
          </div>
          <div className="tw-flex tw-gap-4 tw-w-7/12">
            <TextInput
              label="DNI/NIE/NIF"
              reference={reference}
              name="nif"
              required
            />
            <TextInput label="CIP" reference={reference} name="cip" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo

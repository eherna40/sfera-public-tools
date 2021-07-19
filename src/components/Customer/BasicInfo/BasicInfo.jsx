import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../commons/Form/TextInput/TextInput'

const BasicInfo = ({ reference }) => (
  <div className="BasicInfo tw-full xl:tw-w-5/12">
    <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4">
      <div className="tw-w-3/12">
        <TextInput
          label="ID Cliente"
          reference={reference}
          readOnly
          name="id"
        />
      </div>
      <div className="tw-w-6/12">
        <TextInput
          label="Nombre"
          reference={reference}
          readOnly
          name="nombre"
        />
      </div>
      <div className="tw-w-3/12">
        <TextInput
          label="Fecha de alta"
          reference={reference}
          readOnly
          name="usuarioAlta.created_at"
        />
      </div>
    </div>
  </div>
)

BasicInfo.propTypes = {
  reference: PropTypes.func,
}

export default BasicInfo

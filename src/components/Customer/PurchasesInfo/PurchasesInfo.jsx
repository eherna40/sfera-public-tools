import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { CustomerContext } from '../../../infrastructure/contexts/customer/Customer'

// Components
import TextInput from '../../commons/Form/TextInput/TextInput'

const PurchasesInfo = ({ reference }) => {
  const { customer } = useContext(CustomerContext)
  return (
    <div className="PurchaseInfo tw-flex tw-w-full">
      <div className="tw-flex xl:tw-flex-row tw-w-full tw-gap-4">
        <div className="tw-flex tw-gap-4 tw-w-5/12">
          <TextInput
            label="Crédito máximo"
            value={customer?.clienteCuenta?.totalCredito}
            name="credito_maximo"
            reference={reference}
          />
          <TextInput
            label="Saldo"
            disabled
            value={customer?.clienteCuenta?.saldo}
            name="saldo"
            reference={reference}
          />
        </div>
        <div className="tw-flex tw-gap-4 tw-w-7/12">
          <div className="tw-w-9/12">
            <TextInput
              label="Tarjeta fidelización"
              name="tarjeta_fidelizacion"
              reference={reference}
            />
          </div>
          <div className="tw-w-3/12">
            <TextInput
              label="Puntos"
              disabled
              name="puntos"
              reference={reference}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PurchasesInfo.propTypes = {
  reference: PropTypes.func,
}

export default PurchasesInfo

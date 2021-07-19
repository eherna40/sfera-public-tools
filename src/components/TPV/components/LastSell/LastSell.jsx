import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { TPVContext } from '../../../../infrastructure/contexts/TPV/TPV'
// import PropTypes from 'prop-types'
import TextInput from '../../../commons/Form/TextInput/TextInput'

const LastSell = () => {
  const { previouSale } = useContext(TPVContext)
  const { t } = useTranslation()

  const withCurrency = () => {
    if (previouSale && previouSale.devolucion) return true
    return false
  }

  return (
    <div className="tw-flex tw-w-full">
      <div className="tw-w-40">
        <TextInput
          label={t('labels.Nº Última venta')}
          name="-"
          reference={() => null}
          value={
            previouSale && previouSale.codigo ? `${previouSale.codigo}` : '0'
          }
          disabled
        />
      </div>
      <div className="tw-w-24">
        <TextInput
          label={t('labels.Total')}
          name="-"
          disabled
          reference={() => null}
          value={
            previouSale && previouSale.importe_a_pagar
              ? `${previouSale.importe_a_pagar}`
              : '-'
          }
          currency={withCurrency()}
        />
      </div>
      <div className="tw-w-24">
        <TextInput
          label={t('labels.Entregado')}
          name="-"
          disabled
          reference={() => null}
          value={
            previouSale && previouSale.entregado
              ? `${previouSale.entregado}`
              : '-'
          }
          currency={withCurrency()}
        />
      </div>
      <div className="tw-w-24">
        <TextInput
          label={t('labels.Cambio')}
          name="-"
          disabled
          reference={() => null}
          value={
            previouSale && previouSale.devolucion
              ? `${previouSale.devolucion}`
              : '-'
          }
          currency={withCurrency()}
        />
      </div>
    </div>
  )
}

export default LastSell

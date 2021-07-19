import i18next from 'i18next'
import React from 'react'
import { IcCardPayment } from '../../components/commons/Icons/IcCardPayment'
import { IcCashPayment } from '../../components/commons/Icons/IcCashPayment'
import { IcCreditPayment } from '../../components/commons/Icons/IcCreditPayment'
import { IcOtherPayment } from '../../components/commons/Icons/IcOtherPayment'

const getMethodData = (key) => {
  switch (key) {
    case 'EFECTIVO':
      return {
        name: i18next.t('tpv.titleCashMethod'),
        icon: <IcCashPayment />,
      }
    case 'TARJETA':
      return {
        name: i18next.t('tpv.titleCardMethod'),
        icon: <IcCardPayment />,
      }
    case 'CHEQUE':
      return {
        name: i18next.t('tpv.titleCreditMethod'),
        icon: <IcCreditPayment />,
      }

    case 'VALE':
      return {
        name: i18next.t('tpv.titleCouponMethod'),
        icon: <IcCashPayment />,
      }

    case 'COMPENSAR EN CUENTA':
      return {
        name: i18next.t('tpv.titlCompensationMethod'),
        icon: <IcCashPayment />,
      }

    default:
      return {
        name: i18next.t('tpv.titlOthersMethod'),
        icon: <IcOtherPayment />,
      }
  }
}

export default getMethodData

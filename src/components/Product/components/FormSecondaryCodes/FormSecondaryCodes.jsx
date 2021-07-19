import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductsContext } from '../../../../infrastructure/contexts/Products/Products'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import Loader from '../../../commons/Loader/Loader'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const FormSecondaryCodes = () => {
  const { t } = useTranslation()
  const { codes, formSecondaryLoading, getSecondaryCodes } = useContext(
    ProductsContext,
  )

  useEffect(() => {
    getSecondaryCodes()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="tw-w-full tw-border tw-h-full tw-p-4 tw-relative">
      <InputGroup title="Códigos segundarios" />
      {formSecondaryLoading && !codes && (
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-z-40 tw-bg-white">
          <Loader />
        </div>
      )}
      {codes &&
        codes.forEach((i) => (
          <div className="tw-mx-2 tw-mb-4 tw-pt-2">
            <Paragraphs>
              {i.codigo} - {i.descripcion}
            </Paragraphs>
            <Paragraphs size="xxs" className="tw-text-grey-400">
              {t('labels.Fecha de creación')}: {i.created_add}
            </Paragraphs>
          </div>
        ))}
    </div>
  )
}

export default FormSecondaryCodes

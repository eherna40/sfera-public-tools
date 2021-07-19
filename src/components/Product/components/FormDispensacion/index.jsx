import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import { ProductsContext } from '../../../../infrastructure/contexts/Products/Products'
import Loader from '../../../commons/Loader/Loader'

const FormDispensacion = () => {
  const { t } = useTranslation()
  const {
    unlock,
    loadingDispensation,
    dispensation,
    getDispensation,
  } = useContext(ProductsContext)

  useEffect(() => {
    getDispensation()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="tw-w-full FormDispensacion tw-flex tw-flex-col tw-flex-grow tw-items-stretch tw-border tw-h-full tw-p-2 tw-relative">
      <InputGroup title="Tipo de dispensación">
        {loadingDispensation && !dispensation && (
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-z-40 tw-bg-white">
            <Loader />
          </div>
        )}
        <div className="tw-flex tw-items-center tw-flex-wrap">
          <Paragraphs
            className="tw-text-right tw-w-5/12 tw-px-3"
            weight="bold"
            size="xs"
          >
            {t('labels.Tipo de caducidad')}
          </Paragraphs>
          <div className="tw-w-7/12">
            <TextInput
              name="tipoPaquete"
              className="tw-w-full"
              hideError
              disabled={!unlock}
              reference={() => null}
              value={
                (dispensation && dispensation.articulo && dispensation.articulo.tipoCaducidad) || ''
              }
            />
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-flex-wrap">
          <Paragraphs
            className="tw-text-right tw-w-5/12 tw-px-3"
            weight="bold"
            size="xs"
          >
            {t('labels.Es autorizado web')}
          </Paragraphs>
          <div className="tw-w-7/12">
            <TextInput
              className="tw-w-full"
              name="es_autorizaro_web"
              hideError
              disabled={!unlock}
              value={
                (dispensation &&
                  dispensation.articulo &&
                  dispensation.articulo.dispensacion &&
                  dispensation.articulo.dispensacion.es_autorizaro_web) ||
                ''
              }
              reference={() => null}
            />
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-flex-wrap">
          <Paragraphs
            className="tw-text-right tw-w-5/12 tw-px-3"
            weight="bold"
            size="xs"
          >
            {t('labels.Origen catálogo')}
          </Paragraphs>
          <div className="tw-w-7/12">
            <TextInput
              className="tw-w-full"
              hideError
              disabled={!unlock}
              reference={() => null}
              name="origen_catalogo"
              value={
                (dispensation &&
                  dispensation.articulo &&
                  dispensation.articulo.dispensacion &&
                  dispensation.articulo.dispensacion.origen_catalogo) ||
                ''
              }
            />
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-p-2 tw-flex-wrap tw-px-2">
          <Paragraphs
            className="tw-text-right tw-w-5/12 tw-px-3"
            weight="bold"
            size="xs"
          >
            {t('labels.Tipo de sustitución')}
          </Paragraphs>
          <div className="tw-w-7/12">
            <TextInput
              className="tw-w-full"
              hideError
              disabled={!unlock}
              reference={() => null}
              name="tipo-paquete"
              value={`${
                dispensation?.articulo?.dispensacion?.tipoSustitucion?.id || ''
              } - ${
                dispensation?.articulo?.dispensacion?.tipoSustitucion
                  ?.descripcion || ''
              }`}
            />
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-p-2 tw-flex-wrap tw-px-2">
          <Paragraphs
            className="tw-text-right tw-w-5/12 tw-px-3"
            weight="bold"
            size="xs"
          >
            {t('labels.Conservación')}
          </Paragraphs>
          <div className="tw-w-7/12">
            <TextInput
              className="tw-w-full"
              hideError
              disabled={!unlock}
              reference={() => null}
              name="tipo-paquete"
              value={`${
                dispensation?.articulo?.dispensacion?.conservación
                  ?.descripcion || ''
              }`}
            />
          </div>
        </div>
      </InputGroup>
    </div>
  )
}

FormDispensacion.propTypes = {}

export default FormDispensacion

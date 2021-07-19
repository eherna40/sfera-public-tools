import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import EditableCheck from '../../../commons/EditableCheck/EditableCheck'
import Loader from '../../../commons/Loader/Loader'
import { ProductsContext } from '../../../../infrastructure/contexts/Products/Products'

const FormSellEntidad = () => {
  const { t } = useTranslation()
  const { getEntities, loadingEntities, entities } = useContext(ProductsContext)
  const unlock = null
  const register = () => null
  const [selected, setSelected] = useState(1)

  useEffect(() => {
    getEntities()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="tw-flex tw-w-full tw-flex-grow-0 2xl:tw-flex-grow ">
      <div className="tw-w-full tw-border tw-p-4 tw-relative">
        <div className="tw-flex tw-border-b tw-pb-3 ">
          {loadingEntities && !entities && (
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-z-40 tw-bg-white">
              <Loader />
            </div>
          )}
          <div aria-hidden="true" onClick={() => setSelected(1)}>
            <Paragraphs
              className={`tw-mr-8 tw-text-secondary tw-cursor-pointer tw-uppercase ${
                selected === 1 ? 'tw-opacity-100' : 'tw-opacity-40'
              }`}
              weight="bold"
            >
              {t('labels.Ventas entidad')}
            </Paragraphs>
          </div>
          <div aria-hidden="true" onClick={() => setSelected(2)}>
            <Paragraphs
              className={`tw-text-secondary tw-cursor-pointer tw-uppercase ${
                selected === 2 ? 'tw-opacity-100' : 'tw-opacity-40'
              }`}
              weight="bold"
            >
              {t('labels.Ventas mutuas')}
            </Paragraphs>
          </div>
        </div>

        {selected === 1 ? (
          <div>
            <div className="tw-w-full tw-flex tw-pt-4">
              <div className="tw-w-1/2 tw-mr-4">
                <div className="tw-flex tw-flex-col">
                  <div className="tw-flex tw-items-center">
                    <Paragraphs
                      className="tw-w-4/12 tw-text-right tw-pr-2"
                      weight="bold"
                      size="xs"
                    >
                      {t('labels.Tipo de paquete')}
                    </Paragraphs>
                    <div className="tw-w-8/12">
                      <TextInput
                        hideError
                        disabled={!unlock}
                        reference={register}
                        name="tipo-paquete"
                        value={`${
                          entities?.articulo?.dispensacion?.tipoPaquete?.id ||
                          ''
                        } - ${
                          entities?.articulo?.dispensacion?.tipoPaquete
                            ?.descripcion || ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="tw-flex tw-items-center">
                    <Paragraphs
                      className="tw-w-4/12 tw-text-right tw-pr-4"
                      weight="bold"
                      size="xs"
                    >
                      {t('labels.Tipo de aportación')}
                    </Paragraphs>
                    <div className="tw-w-8/12">
                      <TextInput
                        hideError
                        disabled={!unlock}
                        reference={register}
                        name="tipo-aportacion"
                        value={`${
                          entities?.articulo?.dispensacion?.tipoAportacion
                            ?.id || ''
                        } - ${
                          entities?.articulo?.dispensacion?.tipoAportacion
                            ?.descripcion || ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="tw-flex tw-items-center">
                    <Paragraphs
                      className="tw-w-4/12 tw-text-right tw-pr-2"
                      weight="bold"
                      size="xs"
                    >
                      {t('labels.Aviso ventas')}
                    </Paragraphs>
                    <div className="tw-w-8/12">
                      <TextInput
                        hideError
                        disabled={!unlock}
                        reference={register}
                        name="aviso-ventas"
                      />
                    </div>
                  </div>

                  <div className="tw-flex tw-items-center">
                    <Paragraphs
                      className="tw-w-4/12 tw-text-right tw-pr-2"
                      weight="bold"
                      size="xs"
                    >
                      {t('labels.Control dispensación')}
                    </Paragraphs>
                    <div className="tw-w-8/12">
                      <TextInput
                        hideError
                        disabled={!unlock}
                        reference={register}
                        name="control"
                      />
                    </div>
                  </div>

                  <div className="tw-flex tw-w-full tw-items-center">
                    <div className="tw-flex tw-w-8/12">
                      <Paragraphs
                        className="tw-w-6/12 tw-flex tw-items-center tw-justify-end tw-pr-4"
                        weight="bold"
                        size="xs"
                      >
                        {t('labels.Fecha EXO')}
                      </Paragraphs>
                      <div className="tw-w-6/12 tw-pr-4">
                        <TextInput
                          value={
                            entities?.articulo?.fecha_exclusion_insalud || ''
                          }
                          hideError
                          disabled={!unlock}
                          reference={register}
                          name="fecha-exo"
                        />
                      </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-w-4/12">
                      <Paragraphs
                        className="tw-w-8/12 tw-flex tw-items-center tw-justify-end tw-pr-4"
                        weight="bold"
                        size="xs"
                      >
                        {t('labels.Precintos')}
                      </Paragraphs>
                      <div className="tw-w-4/12">
                        <TextInput
                          hideError
                          disabled={!unlock}
                          reference={register}
                          name="precintos"
                          value={entities?.articulo?.envases_maximos || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tw-w-1/2 tw-flex tw-flex-col">
                <div className="tw-flex tw-gap-8">
                  <div className="tw-flex tw-flex-col tw-gap-6">
                    <EditableCheck
                      id="tls"
                      label="TLD"
                      value={entities?.articulo?.dispensacion?.es_TLD || false}
                      disabled={!unlock}
                    />
                    <EditableCheck
                      checked
                      id="lb"
                      label="Libro recetario"
                      disabled={!unlock}
                    />
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-6">
                    <EditableCheck
                      id="receta"
                      value={
                        entities?.articulo?.dispensacion?.necesita_receta ||
                        false
                      }
                      label="Receta médica"
                      disabled={!unlock}
                    />
                    <EditableCheck
                      id="sevem"
                      value={entities?.articulo?.dispensacion?.es_SEVE || false}
                      label="Sevem"
                      disabled={!unlock}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="tw-mx-2 tw-my-4 tw-w-96">
            <div className="tw-flex tw-items-center">
              <Paragraphs
                className="tw-w-4/12 tw-text-right tw-pr-2"
                weight="bold"
                size="xs"
              >
                {t('labels.Tipo de paquete')}
              </Paragraphs>
              <div className="tw-w-8/12">
                <TextInput
                  hideError
                  disabled={!unlock}
                  reference={register}
                  name="tipo-paquete"
                  value={`${
                    entities?.articulo?.dispensacion?.tipoPaquete?.id || ''
                  } - ${
                    entities?.articulo?.dispensacion?.tipoPaquete
                      ?.descripcion || ''
                  }`}
                />
              </div>
            </div>

            <div className="tw-flex tw-items-center">
              <Paragraphs
                className="tw-w-4/12 tw-text-right tw-pr-4"
                weight="bold"
                size="xs"
              >
                {t('labels.Tipo de aportación')}
              </Paragraphs>
              <div className="tw-w-8/12">
                <TextInput
                  hideError
                  disabled={!unlock}
                  reference={register}
                  name="tipo-aportacion"
                  value={`${
                    entities?.articulo?.dispensacion?.tipoAportacion?.id || ''
                  } - ${
                    entities?.articulo?.dispensacion?.tipoAportacion
                      ?.descripcion || ''
                  }`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

FormSellEntidad.propTypes = {}

export default FormSellEntidad

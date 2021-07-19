/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react'
import Draggable from '../../../Modal/Draggable/Draggable'
import SearchInputArrow from '../../../commons/Form/SearchInputArrow/SearchInputArrow'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import { TPVContext } from '../../../../infrastructure/contexts/TPV/TPV'
import { formatDate } from '../../../../infrastructure/helpers/date'
const tabs = [
  {
    id: 1,
    name: 'GENERAL',
  },
  {
    id: 2,
    name: 'INFO ESPECÍFICA',
  },
  {
    id: 3,
    name: 'ATRIBUTOS',
  },
  {
    id: 4,
    name: 'INFO ADICIONAL',
  },
  {
    id: 5,
    name: 'INTERACCIONES',
  },
]
const ModalArticleDetail = ({ toggle }) => {
  const [activeTab, setActiveTab] = useState(1)
  const {
    currentArticleDetails,
    getProductDetails,
    currentArticlePhotos,
  } = useContext(TPVContext)

  useEffect(() => {
    getProductDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(currentArticlePhotos)
  }, [currentArticlePhotos])

  return (
    <Draggable
      toggle={toggle}
      padding={8}
      isMaximizable
      title="DETALLE ARTÍCULO"
      textSuccess="VER FICHA COMPLETA"
      textCancel="VOLVER ATRÁS"
      sizeButton="medium"
      size="xl"
    >
      <div>
        <SearchInputArrow />
        <div className="tw-w-full tw-flex tw-flex-col tw-border tw-my-4 tw-border-t-0 tw-border-r-0">
          <div className="tw-flex tw-w-full tw-border-0 tw-border-b">
            {/* TABS */}
            {tabs.map((tab) => (
              <div
                aria-hidden="true"
                key={tab.id}
                className={`${
                  tab.id === activeTab
                    ? 'tw-bg-white tw-text-primary'
                    : 'tw-bg-primary tw-text-white'
                } tw-w-36 tw-p-2 tw-flex tw-justify-center tw-cursor-pointer tw-border tw-border-b-0 tw-border-l-0 tw-border-r ${
                  activeTab === 5 && 'tw-border-r-0'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Paragraphs weight="bold" size="xs">
                  {tab.name}
                </Paragraphs>
              </div>
            ))}
          </div>

          <div className="tw-flex tw-border-r tw-py-4">
            {/* FICHA */}
            {activeTab === 1 ? (
              <>
                <div className="tw-w-3/6 tw-pl-4">
                  <InputGroup title="Ficha" />
                  <div className="tw-flex">
                    <div className="tw-mr-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Código EAN"
                        value={
                          currentArticleDetails
                            ? currentArticleDetails.ean13
                            : ''
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Laboratorio"
                        value={
                          currentArticleDetails
                            ? currentArticleDetails.laboratorio.nombre
                            : ''
                        }
                      />
                    </div>
                  </div>

                  <div className="tw-flex">
                    <div className="tw-mr-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Categoría"
                        value={
                          currentArticleDetails &&
                          currentArticleDetails.categoria &&
                          currentArticleDetails.categoria.nombre
                            ? currentArticleDetails.categoria.nombre
                            : ''
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Familia"
                        value={
                          currentArticleDetails &&
                          currentArticleDetails.familia &&
                          currentArticleDetails.familia.descripcion
                        }
                      />
                    </div>
                  </div>

                  <div className="tw-flex">
                    <div className="tw-mr-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Tipo de producto"
                        value={
                          currentArticleDetails && currentArticleDetails.tipo
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Tipo de producto interno"
                        value={
                          currentArticleDetails &&
                          currentArticleDetails.codigo_interno
                        }
                      />
                    </div>
                  </div>

                  <div className="tw-flex">
                    <div className="tw-mr-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Ubicacion"
                        value={
                          currentArticleDetails &&
                          currentArticleDetails.ubicaciones[0].almacenUbicacion
                            .nombre_ubicacion
                        }
                      />
                    </div>
                    <div className="tw-mr-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Fecha de alta"
                        value={
                          currentArticleDetails &&
                          currentArticleDetails.fecha_alta_insalud &&
                          formatDate(currentArticleDetails.fecha_alta_insalud)
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Caducidad"
                        value={
                          currentArticleDetails &&
                          currentArticleDetails.dispensacion &&
                          currentArticleDetails.descripcion
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* PRECIO */}
                <div className="tw-w-2/6 tw-pr-4">
                  <InputGroup title="Precio" />

                  <div className="tw-flex">
                    <div className="tw-mx-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Precio de coste"
                        value={
                          currentArticleDetails
                            ? `${currentArticleDetails.articuloPrecios[0].precio_coste}€`
                            : ''
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Precio intervenido"
                        value={
                          currentArticleDetails
                            ? `${
                                currentArticleDetails.articuloPrecios[0]
                                  .precio_intervenido
                                  ? 'Si'
                                  : 'No'
                              }`
                            : ''
                        }
                      />
                    </div>
                  </div>

                  <div className="tw-flex">
                    <div className="tw-mx-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Margen"
                        value={
                          currentArticleDetails
                            ? `${currentArticleDetails.articuloPrecios[0].margen}€`
                            : ''
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="Precio coste medio"
                      />
                    </div>
                  </div>

                  <div className="tw-flex">
                    <div className="tw-mx-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="IVA"
                        value={
                          currentArticleDetails
                            ? `${currentArticleDetails.iva}%`
                            : ''
                        }
                      />
                    </div>
                    <div className="tw-flex-1">
                      <TextInput hideError disabled label="Precio FIFO" />
                    </div>
                  </div>

                  <div className="tw-flex">
                    <div className="tw-ml-4 tw-flex-1">
                      <TextInput
                        hideError
                        disabled
                        label="PVP"
                        value={
                          currentArticleDetails
                            ? `${currentArticleDetails.articuloPrecios[0].precio_pvp}€`
                            : ''
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="tw-w-1/6 tw-flex tw-flex-col tw-mr-4">
                  <InputGroup title="Fotografía" />

                  <div
                    className={`${
                      currentArticlePhotos &&
                      currentArticlePhotos[0] &&
                      currentArticlePhotos[0].url
                        ? ''
                        : 'tw-h-24'
                    } tw-border tw-bg-grey-300 tw-object-contain`}
                  >
                    <div className="tw-p-2">
                      {currentArticlePhotos &&
                      currentArticlePhotos[0] &&
                      currentArticlePhotos[0].url ? (
                        <img src={currentArticlePhotos[0].url} alt="IMAGEN" />
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                  <InputGroup title="Código de barras" />
                  <div className="tw-h-24 tw-border tw-bg-grey-300 "></div>
                </div>
              </>
            ) : activeTab === 2 ? (
              <div className="tw-px-4">INFO ESPECÍFICA</div>
            ) : activeTab === 3 ? (
              <div className="tw-px-4">ATRIBUTOS</div>
            ) : activeTab === 4 ? (
              <div className="tw-px-4">INFO ADICIONAL</div>
            ) : (
              <div className="tw-px-4">INTERACCIONES</div>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

ModalArticleDetail.propTypes = {}

export default ModalArticleDetail

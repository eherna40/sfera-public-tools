import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import { ColorCube, InputRangeWrapper } from './styles'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'
import IcUpload from '../../commons/Icons/IcUpload'
import Button from '../../commons/Buttons/Button/Button'
import IcTrash from '../../commons/Icons/IcTrash'

const ImageProfile = ({ toggle, colors }) => {
  return (
    <Draggable
      toggle={toggle}
      padding={0}
      title="IMAGEN DE PERFIL"
      size="xl"
      footerComponent={() => null}
    >
      <div className="tw-flex" style={{ height: '600px' }}>
        <div className="tw-w-3/12 tw-h-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-bg-secondary tw-bg-opacity-10 tw-p-8">
          <div>
            <div className="tw-flex tw-flex-col tw-mb-4">
              <Paragraphs weight="bold" size="xs">
                Añadir imagen
              </Paragraphs>
              <div className="tw-bg-white tw-flex tw-justify-between tw-items-center tw-p-2 tw-my-2">
                <div className="tw-w-32">
                  <input
                    type="file"
                    name="photo"
                    style={{ opacity: 1, position: 'absolute', zIndex: -1 }}
                  />
                  <Paragraphs size="xs">Seleccionar fichero</Paragraphs>
                </div>
                <IcUpload color={colors['primary']} />
              </div>

              <Paragraphs className="tw-text-grey-400" size="xxs">
                JPG, GIF o PNG. Tamaño máximo 800 Kb.
              </Paragraphs>
            </div>
            <Paragraphs className="tw-text-secondary" weight="bold">
              SELECCIONE UN COLOR DE FONDO
            </Paragraphs>

            <div className="tw-flex tw-flex-wrap tw-p-4 tw-pl-0">
              {colors.map((color) => (
                <ColorCube key={color.id} bgColor={color.color} />
              ))}
            </div>

            <Paragraphs className="tw-text-secondary tw-mb-4" weight="bold">
              EDITAR
            </Paragraphs>

            <div className="tw-flex tw-justify-between tw-items-center">
              <Paragraphs weight="bold">Zoom</Paragraphs>
              <Paragraphs className="tw-text-primary" weight="bold">
                8
              </Paragraphs>
            </div>
            <InputRangeWrapper className="tw-mb-4">
              <input type="range" />
            </InputRangeWrapper>

            <div className="tw-flex tw-justify-between tw-items-center">
              <Paragraphs weight="bold">Enderezar</Paragraphs>
              <Paragraphs className="tw-text-primary" weight="bold">
                8
              </Paragraphs>
            </div>
            <InputRangeWrapper className="tw-mb-4">
              <input type="range" />
            </InputRangeWrapper>
          </div>
          <Button bgWhite transparent label="CANCELAR" onClick={toggle} />
        </div>

        <div className="tw-w-9/12 tw-h-full tw-flex tw-flex-col tw-justify-between tw-p-8">
          <div className="tw-border-4 tw-h-4/5 tw-py-4"></div>
          <div className="tw-flex tw-justify-between tw-items-center">
            <div className="tw-flex">
              <div className="tw-mr-2">
                <IcTrash />
              </div>
              <Paragraphs className="tw-text-alert" weight="bold">
                ELIMINAR
              </Paragraphs>
            </div>
            <Button primary label="ACEPTAR" />
          </div>
        </div>
      </div>
    </Draggable>
  )
}

ImageProfile.propTypes = {
  colors: PropTypes.array,
}

ImageProfile.defaultProps = {
  colors: [
    {
      id: 1,
      color: '#FF0062',
    },

    {
      id: 2,
      color: '#9E349D',
    },
    {
      id: 3,
      color: '#6843A0',
    },
    {
      id: 4,
      color: '#4054AB',
    },
    {
      id: 5,
      color: '#0D8DD0',
    },

    {
      id: 6,
      color: '#3FCBD9',
    },

    {
      id: 7,
      color: '#009B8B',
    },
    {
      id: 8,
      color: '#66B728',
    },
    {
      id: 9,
      color: '#C9DF00',
    },
    {
      id: 10,
      color: '#FBEE00',
    },

    {
      id: 11,
      color: '#FFAF00',
    },

    {
      id: 12,
      color: '#FF4100',
    },
    {
      id: 13,
      color: '#815445',
    },
    {
      id: 14,
      color: '#9F9F9F',
    },
    {
      id: 15,
      color: '#587F8E',
    },
  ],
}

export default ImageProfile

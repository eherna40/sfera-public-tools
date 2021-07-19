import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import { useTranslation } from 'react-i18next'

const SoftwareDescription = ({ nombre, id, rol, updateRol }) => {
  const words = nombre.split(' ')
  const {t} = useTranslation()
  return (
    <div className="SoftwareDescription tw-flex tw-p-4 tw-border tw-my-2 tw-border-green-200">
      <div className="tw-flex tw-flex-col tw-px-4 tw-w-60">
        <div className="tw-border-l-2 tw-flex tw-flex-col tw-pl-2">
          <Paragraphs className="tw-text-secondary">{words[0]}</Paragraphs>
          <Paragraphs className="tw-text-primary">{words[1]}</Paragraphs>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-between tw-h-full">
        <div className="tw-pb-4">
          <Paragraphs weight="bold" size="xs">
            {rol.nombre}
          </Paragraphs>
          <Paragraphs className="tw-text-grey-600" size="xs">
            {rol.descripcion}
          </Paragraphs>
        </div>
        <div aria-hidden onClick={() => updateRol(id, rol.id)}>
          <Paragraphs
            weight="bold"
            className="tw-text-primary tw-cursor-pointer"
            size="xs"
          >
            {t('labels.Editar configuración')}
          </Paragraphs>
        </div>
      </div>
    </div>
  )
}
SoftwareDescription.propTypes = {
  nombre: PropTypes.string,
  id: PropTypes.string,
  rol: PropTypes.object,
}

SoftwareDescription.defaultProps = {
  nombre: 'No encontardo',
  rol: {}
}

export default SoftwareDescription

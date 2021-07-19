import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Wrapper } from './styles'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import SoftwareRolSelector from '../../../commons/SoftwareRolSelector/SoftwareRolSelector'

const AccessApp = ({ showInfo, updateSoftwares, softwares }) => {
  const { t } = useTranslation()
  const onClickInput = (softwareId, rolId, asociado) => {
    const foo = []
    softwares.forEach((i) => {
      const roles = []
      i.roles.forEach((e) => {
        let autorizar = softwareId === i.id ? e.id === rolId : e.autorizar
        autorizar = rolId ? autorizar : e.autorizar
        if (!rolId && softwareId === i.id) {
          autorizar = false
        }
        if (softwareId !== i.id && rolId && asociado.length > 0) {
          const esAsociado = asociado.find(
            (asociacion) => asociacion.id === e.id,
          )
          if (esAsociado) autorizar = true
          else autorizar = false
        }
        roles.push({
          ...e,
          autorizar,
        })
      })
      foo.push({
        ...i,
        roles,
      })
    })
    updateSoftwares(foo)
  }

  return (
    <Wrapper className="tw-w-full">
      <div className="tw-flex tw-flex-col tw-gap-4">
        <Paragraphs size="lg" weight="bold">
          {t(
            'messages.Seleccione un rol base para las aplicaciones que desee activar',
          )}
        </Paragraphs>
        <div className="tw-flex tw-gap-4 tw-overflow-x-auto tw-pb-4">
          {softwares.map((software) => (
            <SoftwareRolSelector
              key={software.id}
              softwareName={software && software.nombre}
              softwareId={software && software.id}
              active={software.activo}
              available={software.activo}
              roles={software.roles}
              showInfo={showInfo}
              onClickInput={(rol, asociado) =>
                onClickInput(software.id, rol, asociado)
              }
            />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

AccessApp.propTypes = {
  showInfo: PropTypes.func,
  updateSoftwares: PropTypes.func,
  softwares: PropTypes.arrayOf(PropTypes.object),
}

AccessApp.defaultProps = {
  showInfo: null,
  softwares: [],
}

export default AccessApp

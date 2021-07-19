import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, WrapperAccessInfo, WrapperAppInfo } from './styles'
import IPrint from '../../../commons/Icons/IPrint'
import IcButton from '../../../commons/Buttons/IcButton/IcButton'
import SoftwareDescription from '../../../SoftwareDescription/SoftwareDescription'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
// eslint-disable-next-line
import colors from '../../../../styles/colors'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import { useTranslation } from 'react-i18next'

const Summary = ({ accessinfo, softwareItems, code, updateRol }) => {
  const hasRol = (software) => software.roles.find((i) => i.autorizar)
  const { t } = useTranslation()
  return (
    <Wrapper className="tw-flex tw-flex-col tw-w-full">
      <Paragraphs
        weight="bold"
        size="lg"
        className="tw-flex tw-items-center tw-justify-between tw-w-full"
      >
        <div>Compruebe los datos a continuación</div>
        <IcButton
          icicon={<IPrint color={colors['primary']} size={20} />}
          primary
          size="small"
          spinnerSize="small"
          loading={false}
          transparent
        />
      </Paragraphs>
      <div className="tw-w-full lg:tw-flex">
        <div className="tw-w-full lg:tw-w-1/3">
          <InputGroup title="Datos personales">
            <WrapperAccessInfo className="tw-w-full tw-flex lg:tw-block tw-gap-6 lg:tw-gap-2">
              <div>
                <Paragraphs size="xs" weight="bold">
                  {t('labels.Código de la farmacia')}
                </Paragraphs>
                <Paragraphs className="tw-py-2">{code}</Paragraphs>
              </div>
              <div>
                <Paragraphs size="xs" weight="bold">
                  {t('labels.Usuario')}
                </Paragraphs>
                <Paragraphs className="tw-py-2">
                  {accessinfo.nickname}
                </Paragraphs>
              </div>
              <div>
                <Paragraphs size="xs" weight="bold">
                  {t('labels.Nombre y apellidos')}
                </Paragraphs>
                <Paragraphs className="tw-py-2">{accessinfo.nombre}</Paragraphs>
              </div>
              <div>
                <Paragraphs size="xs" weight="bold">
                  NIF
                </Paragraphs>
                <Paragraphs className="tw-py-2">{accessinfo.nif}</Paragraphs>
              </div>
              <div>
                <Paragraphs size="xs" weight="bold">
                  E-mail
                </Paragraphs>
                <Paragraphs className="tw-py-2">{accessinfo.email}</Paragraphs>
              </div>
            </WrapperAccessInfo>
          </InputGroup>
        </div>

        <InputGroup title="Aplicaciones y permisos">
          <WrapperAppInfo className="tw-w-full tw-pl-4 tw-pb-4">
            {softwareItems.map((item) => {
              if (hasRol(item) && item.activo) {
                return (
                  <SoftwareDescription
                    key={item.id}
                    nombre={item.nombre}
                    id={item.id}
                    rol={item.roles.find((i) => i.autorizar)}
                    updateRol={updateRol}
                  />
                )
              }
              return null
            })}
          </WrapperAppInfo>
        </InputGroup>
      </div>
    </Wrapper>
  )
}

Summary.propTypes = {
  accessinfo: PropTypes.object,
  softwareItems: PropTypes.array,
}

Summary.defaultProps = {
  accessinfo: {},
  softwareItems: [],
}

export default Summary

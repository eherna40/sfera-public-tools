import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Wrapper, WrapperAccessInfo, WrapperAppInfo } from './styles'
import IPrint from '../../../commons/Icons/IPrint'
import IcButton from '../../../commons/Buttons/IcButton/IcButton'
import SoftwareDescription from '../../../SoftwareDescription/SoftwareDescription'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
// eslint-disable-next-line
import colors from '../../../../styles/colors'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import CustomCheck from '../../../commons/CustomCheck/CustomCheck'

const SummaryProfile = ({ accessinfo, softwareItems, code, updateRol }) => {
  const { t } = useTranslation()
  return (
    <Wrapper className="tw-flex tw-flex-col tw-w-full tw-justify-between">
      <div>
        <Paragraphs
          weight="bold"
          size="lg"
          className="tw-flex tw-items-center tw-justify-between tw-w-full"
        >
          <div>{t('Compruebe los datos a continuación')}</div>
          <IcButton
            icicon={<IPrint color={colors['primary']} size={20} />}
            primary
            size="small"
            spinnerSize="small"
            loading={false}
            transparent
          />
        </Paragraphs>
        <div className="tw-flex tw-w-full">
          <WrapperAccessInfo className="tw-w-full">
            <InputGroup title="Datos personales">
              <Paragraphs size="xs" weight="bold">
                {t('labels.Código de la farmacia')}
              </Paragraphs>
              <Paragraphs className="tw-py-2">{code}</Paragraphs>
              <Paragraphs className="tw-py-2" size="xs" weight="bold">
                {t('labels.Usuario')}
              </Paragraphs>
              <Paragraphs>{accessinfo.nickname}</Paragraphs>
              <Paragraphs className="tw-py-2" size="xs" weight="bold">
                {t('labels.Nombre y apellidos')}
              </Paragraphs>
              <Paragraphs>{accessinfo.nombre}</Paragraphs>
              <Paragraphs className="tw-py-2" size="xs" weight="bold">
                {t('labels.NIF')}
              </Paragraphs>
              <Paragraphs>{accessinfo.nif}</Paragraphs>
              <Paragraphs className="tw-py-2" size="xs" weight="bold">
                E-mail
              </Paragraphs>
              <Paragraphs>{accessinfo.email}</Paragraphs>
            </InputGroup>
          </WrapperAccessInfo>
          <WrapperAppInfo className="tw-w-full tw-pl-4">
            <InputGroup title="Aplicaciones y permisos">
              {softwareItems.map((item) => (
                <SoftwareDescription
                  key={item.id}
                  nombre={item.nombre}
                  id={item.id}
                  rol={item.roles.find((i) => i.autorizar)}
                  updateRol={updateRol}
                />
              ))}
            </InputGroup>
          </WrapperAppInfo>
        </div>
      </div>
      <div className="tw-flex tw-w-full tw-p-2 tw-gap-8">
        <CustomCheck
          label="Compartir el resumen al correo electrónico del empleado."
          checked
        />
        <CustomCheck
          label="Enviar una copia a mi correo electrónico."
          borderPrimary
        />
      </div>
    </Wrapper>
  )
}

SummaryProfile.propTypes = {
  accessinfo: PropTypes.object,
  softwareItems: PropTypes.array,
}

SummaryProfile.defaultProps = {
  accessinfo: {},
  softwareItems: [],
}

export default SummaryProfile

import React from 'react'
import PropTypes from 'prop-types'

import { useTranslation } from 'react-i18next'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'
import Button from '../Buttons/Button/Button'
import InputGroup from '../Form/InputGroup/InputGroup'
import Checkbox from '../Form/CheckBox/Checkbox'

const UpdateActions = ({
  toggle,
  modulo,
  descripcion,
  id,
  onChangePermission,
}) => {
  const { t } = useTranslation()
  return (
    <div id="UpdateActions">
      <Container className="tw-flex tw-flex-col tw-border tw-w-full tw-p-8 tw-gap-6 tw-overflow-auto">
        <div>
          <Paragraphs weight="bold">{descripcion}</Paragraphs>
        </div>
        <div>
          <Paragraphs weight="bold">
            {t('labels.Modifique los permisos para el empleado')}
          </Paragraphs>
        </div>
        {modulo.map((i) => (
          <InputGroup
            title={i.nombre}
            noTranslation
            // actionCheckbox={() => onChangePermission(null, i.id, id)}
            // checked={i.autorizar}
          >
            {i.recursos.map((e) => (
              <div className="">
                <Checkbox
                  size="xs"
                  onChange={() => onChangePermission(e.id, i.id, id)}
                  label={e.nombre}
                  checked={e.autorizar}
                />
                <Paragraphs className="tw-py-4 tw-text-grey-400 tw-pl-5">
                  {e.descripcion}
                </Paragraphs>
              </div>
            ))}
          </InputGroup>
        ))}
      </Container>
      <div className="tw-flex tw-w-full tw-justify-end tw-p-4">
        <Button onClick={toggle} primary label="Atras" uppercase />
      </div>
    </div>
  )
}
UpdateActions.propTypes = {
  modulo: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
}
UpdateActions.defaultProps = {
  modulo: [],
}

export default UpdateActions

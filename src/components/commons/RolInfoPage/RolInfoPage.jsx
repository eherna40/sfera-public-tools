import React from 'react'
import PropTypes from 'prop-types'
import IcUserActive from '../Icons/IcUserActive'
import IcUserInactive from '../Icons/IcUserInactive'

import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'
import Button from '../Buttons/Button/Button'

const RolInfoPage = ({ nombre, descripcion, toggle, modulo }) => (
  <div>
    <Container className="tw-flex tw-flex-col tw-border tw-w-full tw-p-8 tw-gap-6 tw-overflow-auto">
      <div>
        <Paragraphs weight="bold">{nombre}</Paragraphs>
        <Paragraphs>{descripcion}</Paragraphs>
      </div>
      {modulo.map((i, idx) => (
        <div key={idx}>
          <Paragraphs weight="bold" className="tw-text-primary tw-pb-4">
            {i.nombre}
          </Paragraphs>
          {i.recursos.map((e, idx) => (
            <div key={idx} className="tw-flex tw-flex-col tw-pl-6 tw-gap-8">
              <Paragraphs weight="bold">
                <div className="tw-flex">
                  <div className="tw-pr-2">
                    {e.autorizar ? <IcUserActive /> : <IcUserInactive />}
                  </div>
                  <div>{e.nombre}</div>
                </div>
              </Paragraphs>
              <Paragraphs>{e.descripcion}</Paragraphs>
            </div>
          ))}
        </div>
      ))}
    </Container>
    <div className="tw-flex tw-w-full tw-justify-end tw-p-4">
      <Button onClick={toggle} primary label="Atras" uppercase />
    </div>
  </div>
)
RolInfoPage.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  modulo: PropTypes.arrayOf(PropTypes.object),
}
RolInfoPage.defaultProps = {
  modulo: [],
}

export default RolInfoPage

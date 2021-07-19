import React from 'react'
import PropTypes from 'prop-types'

// Components
import SoftwareRolSelector from '../SoftwareRolSelector/SoftwareRolSelector'
import Paragraphs from '../Paragraphs/Paragraphs'

const RolSelectorWrapper = ({ data, showInfo, onClickInput }) => (
  <div className="tw-flex tw-flex-col tw-gap-4">
    <Paragraphs size="lg" weight="bold">
      Seleccione un tipo de usuario para las aplicaciones que desee activar
    </Paragraphs>
    <div className="tw-flex tw-gap-4">
      {data.map((el) => (
        <SoftwareRolSelector
          softwareName={el.software}
          active={el.active}
          available={!el.available}
          roles={el.roles}
          showInfo={showInfo}
          onClickInput={onClickInput}
          idSoftware={el.id}
        />
      ))}
    </div>
  </div>
)

RolSelectorWrapper.propTypes = {
  data: PropTypes.array,
  showInfo: PropTypes.func,
}

RolSelectorWrapper.defaultProps = {
  data: [],
  showInfo: () => null,
}

export default RolSelectorWrapper

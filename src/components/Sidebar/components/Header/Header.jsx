import React from 'react'
import PropTypes from 'prop-types'
import Dynamic from '../../../commons/Logos/Dynamic/Dynamic'
import Logo from '../../../../assets/img/logos/logo_mono.svg'
import { useSelector } from 'react-redux'

const Header=({ user,software,softwareVersion }) => {
  const { farmacia }=useSelector(state => state.userReducer)
  const hasLogo=farmacia?.logotipo?.url||farmacia?.grupoCorporativo?.logo
  return <div className="tw-container tw-bg-white tw-p-4">
    <Dynamic
      logo={hasLogo||Logo}
      softwareName={software&&software.nombre}
      softwareVersion={softwareVersion}
    />
    <div className="tw-font-bold tw-text-xs tw-mt-4 tw-mb-1">
      {user.almacenLogueado.nombre}
    </div>
    <div className="tw-text-xs tw-text-gray-400">{user.nombre}</div>
  </div>
}

Header.propTypes={
  user: PropTypes.object,
  software: PropTypes.object,
  softwareVersion: PropTypes.string,
}

Header.defaultProps={
  software: {},
  softwareVersion: 'v1.01',
  user: {},
}

export default Header

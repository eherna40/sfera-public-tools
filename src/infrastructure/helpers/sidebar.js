import React from 'react'

const IcGeneral = require('../../assets/img/icons/ic_general.svg')
const IcCompras = require('../../assets/img/icons/ic_compras.svg')
const IcServicios = require('../../assets/img/icons/ic_servicios.svg')
const IcReporting = require('../../assets/img/icons/ic_reporting.svg')
const IcVentas = require('../../assets/img/icons/ic_ventas.png')
const IcFolder = require('../../assets/img/icons/ic_folder.svg')

export const getIconNavLink = (tag) => {
  switch (tag) {
    case 'Mi farmacia':
      return <img src={IcGeneral} alt={tag} className="mr-2" width={18} />
    case 'Compras':
      return <img src={IcCompras} alt={tag} className="mr-2" width={18} />
    case 'Servicios':
      return <img src={IcServicios} alt={tag} className="mr-2" width={15} />
    case 'Reporting':
      return <img src={IcReporting} alt={tag} className="mr-2" width={17} />
    case 'Ventas':
      return <img src={IcVentas} alt={tag} className="mr-2" width={15} />
    case 'folder':
      return <img width={16} src={IcFolder} alt={tag} className="mr-2" />
    default:
      return null
  }
}

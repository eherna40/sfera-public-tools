import React from 'react'
import { useNavigation } from '../../infrastructure/Hooks/navigation/useNavigation'
import PowerBI from '../../pages/PorwerBI/PowerBI'
import Page404 from '../../pages/Page404/Page404'
import ListingEmployees from '../../pages/Employees/Listing/Listing'
import Profile from '../../pages/Profile/Profile'
import Boxes from '../../pages/Boxes/Boxes'
import Softwares from '../../pages/Softwares/Softwares'
import TPV from '../../pages/TPV/TPV'
import ListingLabs from '../../pages/Labs/Listing/Listing'
import LisitngProducts from '../../pages/Products/Listing'
import Customers from '../../pages/Customer'
import Families from '../../pages/Families/Families'
import ListingEntities from '../../pages/Entities/Listing/Listing'
import Products from '../../pages/Products'
import Books from '../../pages/Books'
import Interface from '../../pages/Interface/Interface'

// import Listing from '../../pages/Products/Listing'

const StackNavigator = () => {
  const navigation = useNavigation()

  const getComponent = (item) => {
    switch (item.componente) {
      case 'softwares':
        return <Softwares {...item} />

      case 'perfil_usuario':
        return <Profile {...item} />


      case 'config_interfaz':
        return <Interface {...item} />

      case 'ventas_tpv':
        return <TPV {...item} />

      case 'config_usuarios':
        return <ListingEmployees {...item} />

      case 'bi_iframe':
        return <PowerBI {...item} /> // No coincide con el punto de menu

      // Maestros
      case 'maestros_articulos':
        return <LisitngProducts {...item} />

      case 'maestros_caja':
        return <Boxes {...item} />

      case 'maestros_clientes':
        return <Customers {...item} />

      case 'maestros_familias':
        return <Families {...item} />

      case 'maestros_laboratorios':
        return <ListingLabs {...item} />

      case 'mi_farmacia_entidades':
        return <ListingEntities {...item} />

      case 'reporting_recetario':
        return <Books {...item} />

      case 'Product':
        return <Products {...item} />

      default:
        return <Page404 {...item} />
    }
  }
  return navigation.stack.map((i, index) => (
    <div
      id="StackNavigator"
      key={index}
      className="StackNavigator tw-w-full tw-h-full"
      style={{ display: i.active ? 'block' : 'none', visibility: i.active ? 'visible' : 'hidden' }}
    >
      {getComponent(i)}
    </div>
  ))
}

export default StackNavigator

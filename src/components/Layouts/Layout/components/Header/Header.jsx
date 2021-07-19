import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Logo from '../../../../../assets/img/logos/logo_mono_white.svg'
import MultiUsers from '../../../../MultiUsers/MultiUsers'
import { Container, Nav } from './styles'
import Dynamic from '../../../../commons/Logos/Dynamic/Dynamic'
import IcHamburgerMenu from '../../../../commons/Icons/IcHamburgerMenu'
import SelectWarehouse from '../../../../SelectWarehouse/SelectWarehouse'
import Tab from '../../../../Tab/Tab'
import { useMenu } from '../../../../../infrastructure/Hooks/Menu/useMenu'
import { useWarehouse } from '../../../../../infrastructure/Hooks/Warehouse/useWarehouse'
import { useNavigation } from '../../../../../infrastructure/Hooks/navigation/useNavigation'
import Clock from '../../../../commons/Clock/Clock'
import CounterDesk from '../../../../CounterDesk/CounterDesk'

const Header = ({
  showClock,
  showMultiUsers,
  showSelectorWarehouse,
  className,
  openMobileMenu,
}) => {
  const { software } = useMenu()
  const user = (state) => state.userReducer.usuario
  const navigation = useNavigation()
  const {
    getWarehouses,
    selectedWarehouse,
    warehouseList,
    setSelectedWarehouse,
  } = useWarehouse()
  /* 
  const { palettes } = useInterface() */

  useEffect(() => {
    getWarehouses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCLoseTab = (key) => {
    navigation.remove(key)
  }

  const onPressTab = (key) => {
    navigation.toggle(key)
  }

  /**
   * Get tab color from the warehouse object in user state (see warehouseList in useWarehouse hook)
   * @param {string} wareHouseId - warehouse id from tabs stored in Database
   */
  const getColorFromState = (wareHouseId) =>
    warehouseList.find((warehouse) => warehouse.id === wareHouseId)?.color

  return (
    <Container
      className={`Header tw-fixed tw-w-full tw-justify-between  tw-top-0 tw-left-0 ${className}`}
    >
      <div className="tw-flex sm:tw-justify-start md:tw-justify-between tw-bg-tertiary tw-w-full tw-items-center tw-px-4 tw-py-2">
        <div
          aria-hidden="true"
          className="tw-pr-2 tw-text-xs sm:tw-hidden tw-cursor-pointer"
          onClick={openMobileMenu}
        >
          <IcHamburgerMenu size={24} />
        </div>
        <Dynamic
          modeWhite
          logo={Logo}
          softwareName={software && software.nombre}
          softwareVersion="v1.01"
          user={user}
        />
        <div className="tw-w-max sm:tw-flex tw-items-center">
          <CounterDesk />
          {showSelectorWarehouse && <SelectWarehouse />}
          {showClock && <Clock />}
          <SelectWarehouse
            warehouses={warehouseList}
            activeWarehouse={selectedWarehouse}
            onClickWarehouse={setSelectedWarehouse}
          />
          {/* <Languages /> */}
          {showMultiUsers && <MultiUsers />}
        </div>
      </div>
      <Nav className="tw-flex tw-bg-secondary tw-bg-opacity-10">
        {navigation.stack.map((i, index) => (
          <Tab
            onClose={() => onCLoseTab(i.key)}
            onPress={() => onPressTab(i.key)}
            // TODO - IMPORTANT - I DONT KNOW WHY THE PORPS KEY HAVE REMOVE UNDER THE DEVELOPMENT BRANCH
            key={i.key || index}
            name={i.nombre}
            background="white"
            color={i && i.warehouse && getColorFromState(i.warehouse.id)}
            closeTab={() => null}
            active={i.active}
            id={i.key}
            multiTab={i?.multiTab?.length > 1 ? i.multiTab : false}
            list={i.multiparams}
          />
        ))}
      </Nav>
    </Container>
  )
}

Header.propTypes = {
  showClock: PropTypes.bool,
  showSelectorWarehouse: PropTypes.bool,
  showMultiUsers: PropTypes.bool,
  className: PropTypes.string,
  openMobileMenu: PropTypes.func,
}

export default Header

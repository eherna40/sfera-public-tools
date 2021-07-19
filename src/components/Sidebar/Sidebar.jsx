import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// styles
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import {
  SidebarInner,
  SidebarSmall,
  Container,
  Items,
  Transition,
  Translate,
} from './styles'

// components
import IcFavoritos from '../../assets/img/menus/commons/ic_favoritos.svg'
import SoftwareMenu from '../SoftwareMenu/SoftwareMenu'
import Header from './components/Header/Header'
import IcArrowLeft from '../commons/Icons/IcArrowLeft'
import IcButton from '../commons/Buttons/IcButton/IcButton'
import IcMenu from '../commons/Icons/IcMenu'
import SearchInput from './components/SearchInput/SearchInput'
import {
  actionOpenSelectSoftware,
  actionSelectSoftware,
  // actionSelectSoftwareSuccess,
} from '../../infrastructure/redux/actions/software'
import Favorites from './components/Favorites/Favorites'
import { useMenu } from '../../infrastructure/Hooks/Menu/useMenu'
import Backdrop from '../commons/BackDrop/Backdrop'
import Module from './components/Module/Module'
import { useNavigation } from '../../infrastructure/Hooks/navigation/useNavigation'
import ImgIcon from '../commons/Icons/ImgIcon'
import ModalFavorite from './components/Favorites/ModalFavorite'
import useDebounce from '../../infrastructure/Hooks/useDebounce'
import Spinner from '../commons/Spinner/Spinner'
// import { useLogin } from '../../infrastructure/Hooks/Login/useLogin'
import { HEADER_HEIGHT, NAV_TABS } from '../../infrastructure/constants/sizes'
import { Popup } from '../commons/Popup/Popup'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import { useLogin } from '../../infrastructure/Hooks/Login/useLogin'
// import Paragraphs from '../commons/Paragraphs/Paragraphs'

const Sidebar = ({ mobileMenu }) => {
  // open 1 mormal, 2, favoritos, 3 configuraciones, 0 cerrado
  const { t } = useTranslation()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [addFavorite, setAddFavorite] = useState(null)
  const dispatch = useDispatch()
  const openSoftwares = useSelector((state) => state.softwareReducer.open)
  const user = useSelector((state) => state.userReducer.usuario)
  const urlAreaprivada = useSelector(
    (state) => state.userReducer.usuario.urlAreaprivada,
  )

  const navigation = useNavigation()
  const { session } = useLogin()

  const {
    favorites,
    toggleFavorite,
    moveFavorite,
    module,
    softwares,
    getModulesErp,
    onSelectModule,
    software,
    // urlAreaprivada,
    removeFavorite,
    getMenus,
    setFavorite,
    loadingFav,
    searchResources,
    userSearch,
    searchLoading,
    // getAreaPrivada,
  } = useMenu()

  useEffect(() => {
    if (session) {
      getMenus()
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [session])
  useEffect(() => {
    if (debouncedSearchTerm) {
      searchResources(debouncedSearchTerm)
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [debouncedSearchTerm])
  useEffect(() => {
    if (!searchTerm) {
      searchResources()
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [searchTerm])

  const toggle = () => dispatch(actionOpenSelectSoftware())

  const handleSelectSoftware = (item) => {
    let defaultTab
    const activeResource = item.children.find((i) => i.children)
    if (
      activeResource &&
      activeResource.children &&
      activeResource.children.length > 0
    ) {
      defaultTab = [...activeResource.children].shift()
      navigation.push(defaultTab)
    }
    // dispatch(actionSelectSoftwareSuccess(item))
    history.push('/')
    dispatch(actionSelectSoftware(item))
  }

  const handleFavorite = (item, folder) => {
    toggleFavorite(item, folder)
  }

  const onMove = (folder, item) => {
    moveFavorite(folder, item)
  }

  const slectedModule = (idSoftware, idModule, idModuleSoftware) => {
    setSearchTerm('')
    const res = onSelectModule(idSoftware, idModule, idModuleSoftware)
    if (res) {
      if (res.type === 'link') {
        navigation.push(res.data)
        setOpen(null)
      } else {
        setOpen(res.data)
      }
    } else setOpen(null)
  }

  const handleAddFavorite = async (item) => {
    const res = await setFavorite(item)
    if (res.status) {
      setAddFavorite(null)
    } else {
      setErrorMessage(res.error)
    }
  }

  const getIcon = (id) => {
    switch (id) {
      case '1':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/commons/ic_configuracion.svg')
      case '101':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_mi_farmacia.svg')
      case '200':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_ventas.svg')
      case '300':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_compras.svg')
      case '400':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_estadisticas.svg')
      case '500':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_servicios.svg')
      case '600':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_menu_maestros.svg')
      case '1001':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/BI/ic_inicio.svg')
      case '1500':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/BI/ic_inicio.svg')
      case '1002':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/ERP/ic_estadisticas.svg')
      case '1100':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/BI/ic_mi_farmacia.svg')
      case '1200':
        // eslint-disable-next-line global-require
        return require('../../assets/img/menus/BI/ic_clientes.svg')

      default:
        return null
    }
  }

  const getSoftwareErp = (idSoftware) => {
    // si el software es 0 no mostramos puntos de menus - ya se muestra uno en la parte inferior
    if (idSoftware === '0') return null
    const modules = getModulesErp(idSoftware)
    return modules.map((i, idx) => {
      if (!i.componente && !i.children) {
        return null
      }
      let active
      if (module.id === i.id && open !== 2 && open) active = true
      else active = false

      return (
        <Translate idx={idx} key={idx}>
          <IcButton
            onClick={() => slectedModule(idSoftware, i.id, i.software_id)}
            icicon={<ImgIcon url={getIcon(i.id)} size={27} />}
            aria-hidden="true"
            active={active}
            primary
            visible={i.visible}
          />
        </Translate>
      )
    })
  }

  const handlePressItem = (item) => {
    if (item.software_id && !item.software)
      item.software = {
        id: item.software_id,
      }
    if (navigation.push(item)) {
      setOpen(null)
    }
  }

  const handleSetFavorite = (item) => {
    if (!item.fav_id) {
      setAddFavorite({ item })
    } else {
      removeFavorite(item.fav_id)
    }
  }

  return (
    <Container
      className={`Sidebar ${
        mobileMenu ? 'openMobile tw-bg-black tw-w-full' : 'closeMobile'
      } tw-fixed tw-h-screen tw-top-0 tw-left-0 tw-bg-opacity-40`}
    >
      {addFavorite && (
        <ModalFavorite
          toggle={() => setAddFavorite(null)}
          title="EDITAR FAVORITO"
          {...addFavorite}
          setFavorite={handleAddFavorite}
          errorMessage={errorMessage}
          loading={loadingFav}
          favorites={favorites}
          nombre={addFavorite.item.nombre}
          id={addFavorite.item.id}
        />
      )}

      {open && <Backdrop zIndex={10} onClick={() => setOpen(false)} />}

      <SidebarInner
        className={`Sidebar-Inner tw-flex tw-h-screen tw-bg-primary tw-relative tw-z-50 ${
          open ? 'open' : ''
        }`}
      >
        {openSoftwares && (
          <SoftwareMenu
            softwares={softwares}
            toggle={() => toggle()}
            title="Aplicaciones"
            handleClick={handleSelectSoftware}
            privateAreaUrl={urlAreaprivada}
          />
        )}

        <SidebarSmall
          className={`Sidebar__small tw-h-full tw-flex ${
            user.primer_login && 'tw-hidden'
          }`}
        >
          <div className="tw-flex tw-flex-col tw-h-full tw-justify-between">
            <div className="tw-flex text-center tw-flex-col tw-h-full">
              <Transition style={{ height: HEADER_HEIGHT + NAV_TABS }}>
                <IcButton
                  primary
                  className="tw-mt-3 tw-mb-8"
                  icicon={
                    open ? (
                      <IcArrowLeft color="#FFFFFF" />
                    ) : (
                      <IcMenu color="#FFFFFF" size={25} />
                    )
                  }
                  onClick={
                    open
                      ? () => setOpen(false)
                      : () => dispatch(actionOpenSelectSoftware())
                  }
                />
              </Transition>
              <div
                id="getSoftwareErp"
                className="tw-w-full tw-flex tw-flex-col tw-items-center"
              >
                {software && getSoftwareErp(software.id)}
              </div>
            </div>

            <div className="tw-flex tw-flex-col tw-items-center">
              <IcButton
                onClick={() => {
                  setOpen(open === 2 ? null : 2)
                }}
                icicon={<ImgIcon url={IcFavoritos} size={27} />}
                aria-hidden="true"
                active={open === 2}
                primary
              />
              <div className="tw-relative">
                {getSoftwareErp(0)}
                {user.info_popup_login && user.nivel === 50 && (
                  <Popup left="80px" bottom="20px">
                    <Paragraphs weight="bold" className="tw-text-primary">
                      {t('labels.Gestión de usuarios')}
                    </Paragraphs>
                    <Paragraphs className="tw-text-gray-400">
                      {t(
                        'messages.¿Quieres editar de nuevo o agragar personas a tu equipo? Configúralo ahora o más tarde desde tu gestión de usuarios.',
                      )}
                    </Paragraphs>
                  </Popup>
                )}
              </div>
            </div>
          </div>
        </SidebarSmall>

        <div className="Sidebar-bigger tw-w-full tw-relative tw-z-50">
          {open && (
            <>
              <Header
                software={software}
                businessName="Farmacia del Mercat Hostafrancs"
                user={user}
              />
              <Items className="tw-bg-secondary tw-flex tw-flex-col tw-justify-between">
                <div className="tw-flex-1 tw-overflow-auto">
                  {open === 2 && (
                    <Favorites
                      onPress={handlePressItem}
                      onMove={onMove}
                      toggle={handleFavorite}
                      favorites={favorites}
                      handleSetFavorite={handleSetFavorite}
                    />
                  )}
                  {open === 1 && (
                    <div>
                      <Module
                        onPress={handlePressItem}
                        nombre={searchTerm ? 'Búsqueda' : module.nombre}
                        recursos={(searchTerm && userSearch) || module.children}
                        handleSetFavorite={handleSetFavorite}
                        visible={!!searchTerm}
                      />
                      {searchLoading && <Spinner />}
                    </div>
                  )}
                </div>
                {open === 1 && (
                  <SearchInput
                    placeholder={t('menus.Busqueda')}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                )}
              </Items>
            </>
          )}
        </div>
      </SidebarInner>
    </Container>
  )
}

Sidebar.propTypes = {
  mobileMenu: PropTypes.bool,
}

Sidebar.defaultProps = {
  mobileMenu: false,
}

export default Sidebar

import React, { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import imgSoftware from '../../../assets/img/logos/logo_erp_farmaceutico.png'
import Sidebar from '../../Sidebar/Sidebar'
import { Container, GlobalStyle } from './styles'
import { useLogin } from '../../../infrastructure/Hooks/Login/useLogin'
import { useNavigation } from '../../../infrastructure/Hooks/navigation/useNavigation'
import { useAreaPrivada } from '../../../infrastructure/Hooks/useAreaPrivada'
import useWindowSize from '../../../infrastructure/Hooks/useWindowSize'
import FullscreenMessage from '../../commons/FullscreenMessage/FullscreenMessage'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'
import Logo from '../../../assets/img/logos/logo_big.png'
import { useFarmaPremium } from '../../../infrastructure/Hooks/useFarmaPremium'
import useWebsocket from '../../../infrastructure/Hooks/webSocket/useWebsocket'

const Layout = ({ children }) => {
  const size = useWindowSize()
  const { token } = useSelector((state) => state.userReducer)

  const [mobileMenu, setMobileMenu] = useState(false)
  const timeout = process.env.NODE_ENV !== 'development' ? 500000 : 500000
  const { onCloseSession, session } = useLogin()
  
  const { getUserSession } = useNavigation()
  const { usuario, farmacia } = useSelector((state) => state.userReducer)
  const { getAreaPrivada } = useAreaPrivada()
  useFarmaPremium()
  const [connect] = useWebsocket()
  const handleOnIdle = () => {
    onCloseSession()
  }

  const { pause, reset } = useIdleTimer({
    timeout,
    onIdle: handleOnIdle,
  })

  useEffect(() => {
    if (!session) {
      pause()
    } else {
      reset()
      getUserSession()
      // get private area
      getAreaPrivada()
    }
    // fetchConfigurations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])
  useEffect(() => {
    // eslint-disable-next-line no-console
    if (token) connect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])
  useEffect(() => {
    if (usuario.idioma) i18next.changeLanguage(usuario.idioma.codigo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return size.width > 679 ? (
    <Container className="Layout tw-h-screen tw-overflow-hidden">
     {farmacia.paleta &&  <GlobalStyle paleta={farmacia.paleta} />}
      <Sidebar mobileMenu={mobileMenu} />
      <Header
        openMobileMenu={() => setMobileMenu(true)}
        showClock
        showDesk
        showMultiUsers
        imgSoftware={imgSoftware}
      />
      <div className="tw-flex tw-h-full">{children}</div>
    </Container>
  ) : (
    <FullscreenMessage>
      <img src={Logo} alt="logo" width={200} />
      <Paragraphs weight="bold" size="lg" className="tw-text-center">
        Lo sentimos, actualmente la aplicación no se encuentra disponible para
        dispositivos móviles
      </Paragraphs>
    </FullscreenMessage>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
// Components
import SoftwareItem from '../commons/SoftwareItem/SoftwareItem'
import IcCloseBold from '../commons/Icons/IcCloseBold'
import IcButton from '../commons/Buttons/IcButton/IcButton'
import { Container, Content } from './styles'
import Backdrop from '../commons/BackDrop/Backdrop'
import colors from '../../styles/colors'
import { useFarmaPremium } from '../../infrastructure/Hooks/useFarmaPremium'

const SoftwareMenu = ({
  title,
  softwares,
  toggle,
  handleClick,
  privateAreaUrl,
}) => {
  const { t } = useTranslation()
  const { urlFarmaPremium } = useFarmaPremium()

  const { software } = useSelector((state) => state.softwareReducer)
  const { usuario } = useSelector((state) => state.userReducer)
  const openFarmaPremium = () => {
    if (urlFarmaPremium) window.open(urlFarmaPremium, '_blank')
  }
  return (
    <Container
      id="SoftwareMenu"
      aria-hidden="true"
      className="SoftwareMenu tw-flex tw-fixed tw-w-full tw-h-screen tw-items-start"
    >
      <Backdrop zIndex={0} onClick={toggle} />
      <Content className="tw-flex tw-flex-col tw-p-4 tw-bg-white tw-h-full tw-w-full tw-z-10">
        <div
          aria-hidden="true"
          className="tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-w-4 tw-my-5"
        >
          <IcButton
            transparent
            onClick={toggle}
            icicon={<IcCloseBold size={18} color={colors.primary} />}
          />
        </div>
        <div className="tw-flex tw-w-full tw-items-center tw-justify-center">
          <div className="tw-flex tw-flex-col tw-gap-4">
            <div className="tw-font-bold">{title}</div>
            {softwares.map((soft, index) => {
              if (Number(soft.id) !== 0 && soft.visible)
                return (
                  <SoftwareItem
                    key={index}
                    isDemo={soft.demo}
                    nombre={soft.nombre}
                    disabled={!soft.activo}
                    handleClick={() => handleClick(soft)}
                    active={software && soft && software.id === soft.id}
                  />
                )
              return null
            })}
            {usuario.nivel > 30 && privateAreaUrl && (
              <SoftwareItem
                handleClick={() => {
                  window.open(privateAreaUrl, '_blank')
                  toggle()
                }}
                nombre={t('labels.Area Privada')}
                key={-1}
                id={-1}
                active
              />
            )}
            <SoftwareItem
              handleClick={() => openFarmaPremium()}
              nombre={t('labels.Farma Premium')}
              key={-2}
              id={-2}
            />
          </div>
        </div>
      </Content>
    </Container>
  )
}
SoftwareMenu.propTypes = {
  title: PropTypes.string,
  softwares: PropTypes.array,
  toggle: PropTypes.func,
  privateAreaUrl: PropTypes.string,
}

SoftwareMenu.defaultProps = {
  softwares: [],
  privateAreaUrl: null,
}

export default SoftwareMenu

import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Avatar from '../Avatar/Avatar'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import Backdrop from '../commons/BackDrop/Backdrop'
import { Box } from './styles'
import Languages from '../Languages'

const ProfileBox = ({
  nickname,
  avatar,
  rol,
  name,
  toggle,
  closeSession,
  openUserProfile,
  onLogout,
}) => {
  const { t } = useTranslation()

  
  return (
    <div className="ProfileBox tw-fixed tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-z-50">
      <Backdrop zIndex={50} onClick={toggle} />
      <Box className="tw-absolute tw-bg-white tw-top-3 tw-right-3 tw-pb-6">
        <div className="tw-flex tw-items-center tw-p-5">
          <div className="tw-mr-3">
            <Avatar
              size="large"
              picture={avatar}
              rol={rol}
              name={name}
              active
            />
          </div>

          <div className="tw-flex tw-flex-col">
            <Paragraphs size="sm" weight="bold" className="tw-text-black">
              {name}
            </Paragraphs>
          </div>
        </div>
        <Languages />
        <div className="tw-px-5 tw-pb-4">
          <hr />
        </div>

        <div className="tw-flex tw-flex-col tw-justify-around">
          <div className="tw-flex tw-flex-col tw-justify-evenly">
            {/* <div className="tw-p-5 tw-py-4 tw-cursor-pointer hover:tw-bg-black hover:tw-bg-opacity-10">
              <Paragraphs size="xs">Perfil de usuario</Paragraphs>
            </div> */}
            <div
              onClick={() => openUserProfile()}
              aria-hidden="true"
              className="tw-p-5 tw-text-black  tw-py-4 tw-cursor-pointer hover:tw-bg-black hover:tw-bg-opacity-10"
            >
              <Paragraphs size="xs">{t('labels.Perfil de usuario')}</Paragraphs>
            </div>
            <div
              onClick={() => closeSession()}
              aria-hidden="true"
              className="tw-p-5  tw-text-black   tw-py-4 tw-cursor-pointer hover:tw-bg-black hover:tw-bg-opacity-10"
            >
              <Paragraphs size="xs">{t('actions.Suspender')}</Paragraphs>
            </div>
            <div
              aria-hidden
              onClick={onLogout}
              className="tw-p-5 tw-py-4 tw-cursor-pointer"
            >
              <Paragraphs size="xs" className="tw-text-alert" weight="bold">
                {t('actions.Cerrar sesión')}
              </Paragraphs>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

ProfileBox.propTypes = {
  name: PropTypes.string,
  rol: PropTypes.string,
  items: PropTypes.array,
  toggle: PropTypes.func,
  closeSession: PropTypes.func,
  openUserProfile: PropTypes.func,
  onLogout: PropTypes.func,
}

ProfileBox.defaultProps = {
  name: '',
  rol: '',
  items: [],
  onLogout: null,
}

export default ProfileBox

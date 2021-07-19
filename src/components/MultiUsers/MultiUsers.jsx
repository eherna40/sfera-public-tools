import React, { useState } from 'react'

import ProfileBox from '../ProfileBox/ProfileBox'
import IcPlus from '../commons/Icons/IcPlus'
import { Plus } from './styles'
import Avatar from '../Avatar/Avatar'
import { useUser } from '../../infrastructure/Hooks/User/useUser'
import IcButton from '../commons/Buttons/IcButton/IcButton'
import PinModal from '../commons/PinModal/PinModal'
import { useLogin } from '../../infrastructure/Hooks/Login/useLogin'
import { useNavigation } from '../../infrastructure/Hooks/navigation/useNavigation'
import Paragraphs from '../commons/Paragraphs/Paragraphs'

const MultiUsers = () => {
  const [open, setOpen] = useState(false)

  const { onCloseSession, session, onLogout } = useLogin()
  const navigation = useNavigation()
  const [handleModal, setHandleModal] = useState({
    id: null,
    userName: '',
  })
  const { users, activeUser } = useUser()

  const closeProfileBox = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    setOpen(false)
    onLogout()
  }

  const closeSession = (user) => {
    if (user)
      setHandleModal({
        id: user.id,
        userName: user.nombre,
      })
    else setHandleModal({})
    navigation.reset()
    setOpen(false)
    onCloseSession()
  }

  const openUserProfile = () => {
    navigation.push({
      componente: 'perfil_usuario',
      nombre: 'Perfil de usuario',
      key: 3333333,
      id: 3333333,
      noShowMenu: true,
    })
    setOpen(false)
  }
  return (
    <div className="MultiUsers tw-flex tw-flex-row-reverse tw-w-max tw-items-center tw-relative tw-text-white">
      {activeUser && activeUser.usuario && (
        <div className="tw-pl-3">
          <Paragraphs weight="bold" size="xxs">
            {activeUser.usuario.nombre}
          </Paragraphs>
          <Paragraphs size={'xxs'}>
            {activeUser.usuario.nickname} ({activeUser.usuario?.rol?.nombre})
          </Paragraphs>
        </div>
      )}
      {users.map((user, index) => (
        <Avatar
          zIndex={users.length - index}
          key={index}
          translateX={5 * index}
          picture={user?.avatar?.url_250}
          name={user.nombre}
          active={index === 0}
          onClick={index === 0 ? () => setOpen(user) : () => closeSession()}
        />
      ))}

      <Plus
        index={0}
        translateX={5 * users.length}
        className="tw-bg-tertiary tw-border-primary tw-px-1 tw-rounded-full tw-flex tw-items-center tw-relative tw-justify-center"
        onClick={() => closeSession()}
      >
        <IcButton
          size="small"
          transparent
          icicon={<IcPlus color="#FFFFFF" size={14} />}
        />
      </Plus>
      {!session && (
        <PinModal id={handleModal.id} userName={handleModal.userName} />
      )}
      {open && (
        <ProfileBox
          onLogout={handleLogout}
          nickname={open.nickname}
          // rol={open.rol.nombre}
          name={activeUser.usuario.nickname}
          toggle={closeProfileBox}
          closeSession={() => closeSession()}
          openUserProfile={() => openUserProfile()}
        />
      )}
    </div>
  )
}

export default MultiUsers

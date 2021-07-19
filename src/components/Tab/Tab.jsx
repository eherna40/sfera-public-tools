import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useSelector } from 'react-redux'
import { Container, List, CloseButton } from './styles'
import IcMultiTab from '../commons/Icons/IcMultiTab'
import IcCloseBold from '../commons/Icons/IcCloseBold'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import IcMenu from '../commons/Icons/IcMenu'
import { useNavigation } from '../../infrastructure/Hooks/navigation/useNavigation'

const NewTab = ({ name, multiTab, onClose, color, active, onPress, id }) => {
  const { primer_login: PrimerLogin } = useSelector(
    (state) => state.userReducer.usuario,
  )

  const navigation = useNavigation()
  return (
    <Container
      color={!active ? color : '#fff'}
      active={active}
      className={`newTab main-tab ${
        id !== '-1' ? 'tw-flex ' : active ? 'tw-bg-white' : 'tw-bg-primary'
      } tw-cursor-pointer tw-relative tw-text-xs tw-items-center tw-min-w-9 ${
        PrimerLogin && id === '-1' && 'tw-hidden'
      }`}
    >
      <div
        onClick={onPress}
        aria-hidden
        className={`tw-flex ${
          id !== '-1' ? 'tw-truncate tw-px-3' : 'tw-justify-center'
        } content-tab tw-h-full tw-items-center`}
      >
        {multiTab && (
          <>
            <div className="tw-flex tw-items-center tw-justify-center tw-mr-2">
              <IcMultiTab size="12" color={active ? '#fff' : color} />
            </div>
          </>
        )}

        <Paragraphs
          uppercase
          size="xs"
          weight="bold"
          color={active ? color : '#fff'}
          className={`tw-truncate`}
        >
          {name !== '' ? (
            name
          ) : (
            <IcMenu color={active ? color : '#fff'} size={20} />
          )}
        </Paragraphs>
      </div>
            
      { !PrimerLogin && id !== '-1' && (
        <CloseButton
          className="tw-p-1 tw-mr-2"
          tabColor={active ? color : '#fff'}
          onClick={onClose}
          selected={active}
          style={{ width: 16, height: 16 }}
        >
          <IcCloseBold color={!active ? color : '#fff'} size={8} />
          {/* <span class="material-icons-outlined">close</span> */}
        </CloseButton>
      )}
      {multiTab && multiTab.length > 0 && (
        <List className="list tw-absolute tw-z-50 tw-shadow-lg tw-bg-white tw-border">
          {multiTab.map((item, index) => (
            <div
              key={index}
              className="tw-flex tw-text-xs tw-w-full tw-z-50 tw-cursor-pointer tw-uppercase hover:tw-underline"
            >
              <div
                className=" tw-px-4 tw-py-4 tw-flex-1"
                onClick={() => navigation.setParamsMultitab(item, id)}
                aria-hidden
              >
                <Paragraphs size="xs">{item.nombre_descripcion}</Paragraphs>
              </div>
              <div
                onClick={() => navigation.removeParamsMultitab(item, id)}
                className="tw-px-4 tw-py-4 tw-w-3 tw-text-center"
                style={{ width: 60 }}
                aria-hidden
              >
                <IcCloseBold />
              </div>
            </div>
          ))}
        </List>
      )}
    </Container>
  )
}

NewTab.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string,
  multiTab: PropTypes.bool,
  active: PropTypes.bool,
  onClose: PropTypes.func,
  onPress: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NewTab

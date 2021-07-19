import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

// Components
import IcLocked from '../Icons/IcLocked'
import InfoMessage from './components/InfoMessage'
import RadioInput from '../Form/RadioInput/RadioInput'
import { Wrapper } from './styles'

const SoftwareRolSelector = ({
  softwareName,
  active,
  available,
  roles,
  onClickInput,
  showInfo,
  softwareId,
}) => {
  const words = softwareName.split(' ')
  const checkActive = () => roles.find((rol) => rol.autorizar)
  const handleMessage = (act) =>
    act ? 'aplicación no contratada' : 'No disponible'
  const handleColor = (act) => (act ? 'red-500' : 'primary')
  const { usuario } = useSelector((state) => state.userReducer)
  return (
    <Wrapper
      className={`tw-flex tw-flex-col tw-justify-between tw-items-start tw-border-2  ${
        active && checkActive() && 'tw-border-primary'
      } ${
        !checkActive() && available && 'hover:tw-border-primary'
      } tw-p-4 tw-bg-${active && checkActive() && 'primary'} ${
        !available && 'tw-cursor-default'
      }`}
      checked={checkActive()}
      id="wrapper"
    >
      <div className="tw-flex tw-flex-col tw-w-full tw-gap-8">
        <div className={`${!available && !active && 'tw-opacity-30'}`}>
          <div
            className="tw-flex tw-h-full"
            style={{ filter: !available && !active && 'grayscale(100%)' }}
          >
            <div>
              <div
                className={`tw-w-0.5 tw-h-full tw-mr-3 ${
                  active && checkActive() ? 'tw-bg-white' : 'tw-bg-primary-300'
                }`}
              />
            </div>
            <div className="tw-leading-5 tw-text-xl">
              <p
                className={`${
                  active && checkActive()
                    ? 'tw-text-white'
                    : 'tw-text-secondary'
                }`}
              >
                {words[0]}
              </p>
              <p
                className={`${
                  active && checkActive() ? 'tw-text-white' : 'tw-text-primary'
                }`}
              >
                {words[1]}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`tw-flex tw-w-full tw-flex-col tw-gap-4 tw-text-xs tw-mb-3 ${
            !available && !active && 'tw-opacity-30'
          }`}
        >
          {roles.map((rol) => (
            <RadioInput
              key={rol.id}
              id={rol.id}
              label={rol.nombre}
              handleCheck={() => onClickInput(rol.id, rol.rolAsociado)}
              checked={rol.autorizar}
              available={usuario.nivel >= 50 ? true : usuario.nivel > rol.nivel}
              active={active}
              checkActive={checkActive()}
              showInfo={() => showInfo(rol)}
            />
          ))}
        </div>
      </div>
      <div
        className={`tw-flex tw-w-full tw-pt-4 ${
          softwareId !== '0' ? !active && 'tw-border-t' : ''
        } tw-border-solid tw-border-primary ${
          active && checkActive() ? 'tw-text-white' : 'tw-text-black'
        }`}
      >
        {!active && (
          <InfoMessage
            message={handleMessage(active)}
            color={handleColor(active)}
          >
            {active && <IcLocked size={18} />}
          </InfoMessage>

          // ) : (
          //   softwareId !== '0' && (
          //     // <RadioInput
          //     //   label="No conceder acceso"
          //     //   handleCheck={() => onClickInput(-1)}
          //     //   checked={false}
          //     //   active={active}
          //     //   available
          //     //   info={false}
          //     //   checkActive={checkActive()}
          //     //   // setShowRolDescription={setShowRolDescription}
          //     // />
          //   )
        )}
      </div>
    </Wrapper>
  )
}

SoftwareRolSelector.propTypes = {
  softwareName: PropTypes.string,
  active: PropTypes.bool,
  available: PropTypes.bool,
  roles: PropTypes.array,
  onClickInput: PropTypes.func,
  showInfo: PropTypes.func,
  softwareId: PropTypes.string,
}

SoftwareRolSelector.defaultProps = {
  roles: [],
  softwareName: 'No encontrado',
  showInfo: () => null,
}

export default SoftwareRolSelector

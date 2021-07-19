import React from 'react'
import PropTypes from 'prop-types'
import { DynamicText, Transition } from './styles'
import colors from '../../../../styles/colors'

const Dynamic = ({ logo, softwareName, softwareVersion, modeWhite }) => {
  const words = softwareName ? softwareName.split(' ') : null
  return (
    <div id="dynamic" className="tw-flex tw-items-center">
      <Transition
        className={`tw-h-8 tw-flex tw-items-center tw-border-r-2 ${
          !modeWhite ? 'tw-border-separator' : 'tw-border-white'
        }`}
      >
        <img
          className="tw-w-20 tw-mr-2"
          src={logo}
          alt="Logo"
          style={{ maxWidth: 60 }}
        />
      </Transition>
      <div className="tw-flex tw-items-center tw-justify-center tw-ml-1">
        <div className="tw-leading-5 tw-flex tw-flex-col">
          <DynamicText
            size={10}
            color={modeWhite ? '#FFFFFF' : colors.green[900]}
            className="first-text"
          >
            {softwareName && words[0]}
          </DynamicText>
          <div className="tw-flex">
            <DynamicText
              size={10}
              color={modeWhite ? '#FFFFFF' : colors.green[600]}
              className="second-text"
            >
              {softwareName && words[1]}
            </DynamicText>
            <DynamicText
              size={10}
              // color={modeWhite ? '#FFFFFF' : colors.green[600]}
              className={`second-text ${modeWhite ? '#FFF' : 'tw-text-primary'} `}
            >
              {softwareName && softwareVersion}
            </DynamicText>
          </div>
        </div>
      </div>
    </div>
  )
}

Dynamic.propTypes = {
  logo: PropTypes.string,
  softwareName: PropTypes.string,
  softwareVersion: PropTypes.string,
  modeWhite: PropTypes.bool,
}
export default Dynamic

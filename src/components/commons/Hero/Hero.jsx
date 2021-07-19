import React from 'react'
import PropTypes from 'prop-types'
import Clock from '../Clock/Clock'
import MultiUsers from '../../MultiUsers/MultiUsers'
import Languages from '../../Languages'
import icSfera from '../../../assets/img/logos/logo_mono.svg'

const Hero = ({ bg, showClock, showMultiUsers, showLogo, small }) => {
  return (
    <>
      <div
        className={`Hero tw-h-${
          small ? '16' : '64'
        } tw-bg-tertiary tw-flex tw-flex-col tw-w-full ${
          small ? 'tw-pr-6' : 'tw-p-6'
        } tw-justify-center`}
      >
        <div className="tw-w-full tw-flex tw-items-center tw-justify-end">
          {showClock && <Clock />}
          <Languages label={null} type="hero" />
          {showMultiUsers && <MultiUsers />}
        </div>
      </div>
      {showLogo && (
        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-48">
          <img src={icSfera} alt="sfera_logo" width={180} />
        </div>
      )}
    </>
  )
}

Hero.propTypes = {
  bg: PropTypes.oneOf(['black', 'green-600']),
  showClock: PropTypes.bool,
  showMultiUsers: PropTypes.bool,
  showLogo: PropTypes.bool,
  small: PropTypes.bool,
}

Hero.defaultProps = {
  bg: 'green-600',
  small: false,
  showLogo: true,
}

export default Hero

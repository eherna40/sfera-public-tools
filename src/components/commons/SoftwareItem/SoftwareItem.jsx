import React from 'react'
import PropTypes from 'prop-types'

// Components
import { SoftwareDiv, Separator, VersionIndicator } from './styles'

const SoftwareItem = ({
  nombre,
  disabled,
  children,
  isDemo,
  handleClick,
  active,
  interactive,
}) => {
  const words = nombre.split(' ')
  return (
    <SoftwareDiv
      id="SoftwareItem"
      interactive={interactive}
      onClick={disabled ? null : handleClick}
      disabled={disabled}
      className={`SoftwareItem ${
        interactive && 'tw-border'
      } hover:tw-bg-primary ${interactive && active && 'tw-border-secondary'}`}
    >
      <div>
        <Separator className="separator" />
      </div>
      <div className="tw-flex tw-items-center tw-justify-center">
        <div className="tw-leading-6">
          <p className="first-text tw-text-secondary">{words[0]}</p>
          <p className="second-text tw-text-primary">{words[1]}</p>
        </div>
      </div>
      {isDemo && (
        <VersionIndicator className="tw-text-xs tw-text-secondary">
          Demo
        </VersionIndicator>
      )}
      {children}
    </SoftwareDiv>
  )
}

SoftwareItem.propTypes = {
  disabled: PropTypes.bool,
  nombre: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.bool,
  ]),
  active: PropTypes.bool,
  interactive: PropTypes.bool,
}

SoftwareItem.defaultProps = {
  disabled: false,
  nombre: 'ERP Farmacéutico',
  active: false,
  interactive: true,
}

export default SoftwareItem

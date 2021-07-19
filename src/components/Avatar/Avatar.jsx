import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import { useUser } from '../../infrastructure/Hooks/User/useUser'
import Paragraphs from '../commons/Paragraphs/Paragraphs'

const Avatar = ({
  name,
  picture,
  onClick,
  active,
  translateX,
  zIndex,
  size,
}) => {
  const { getInitials } = useUser()
  const init = getInitials(name)

  return (
    <Container
      size={size}
      zIndex={zIndex}
      onClick={onClick}
      active={active}
      translateX={translateX}
      className={`Avatar tw-border-2  tw-border-solid ${
        !active ? 'tw-border-green-600 ' : 'tw-border-white'
      } tw-cursor-pointer tw-relative tw-rounded-full tw-overflow-hidden`}
    >
      <div
        className={`tw-flex tw-items-center tw-justify-center tw-w-full tw-bg-${
          active ? 'primary' : 'secondary'
        }`}
      >
        {picture ? (
          <img
            aria-hidden="true"
            className="tw-max-w-full"
            src={picture}
            alt={`Avatar ${name}`}
          />
        ) : (
          <Paragraphs
            size="xs"
            weight="bold"
            uppercase
            className="tw-text-white"
          >
            {init}
          </Paragraphs>
        )}
      </div>
    </Container>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  picture: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  translateX: PropTypes.number,
  zIndex: PropTypes.number,
}

Avatar.defaultProps = {
  translateX: 0,
  size: 'small',
}

export default Avatar

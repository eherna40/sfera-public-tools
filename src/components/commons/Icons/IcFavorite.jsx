import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcFavorite = ({ favorite, onClick, size, color }) => (
  <Icon
    size={size}
    color={color}
    onClick={onClick}
    aria-hidden="true"
    className="material-icons"
  >
    {favorite ? 'favorite' : 'favorite_border'}
  </Icon>
)

IcFavorite.propTypes = {
  favorite: PropTypes.number,
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
}

IcFavorite.defaultProps = {
  favorite: 0,
  size: 12,
  color: 'white',
}

export default IcFavorite

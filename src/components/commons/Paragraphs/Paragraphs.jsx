import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './styles'

const Paragraphs = ({
  children,
  italic,
  size,
  color,
  uppercase,
  family,
  className,
  weight,
}) => (
  <Text
    color={color}
    weight={weight}
    className={`Paragraphs tw-text-${size} ${italic ? 'tw-italic' : ''} ${
      uppercase && 'tw-uppercase'
    } ${className}`}
    family={family}
  >
    {children}
  </Text>
)

Paragraphs.propTypes = {
  family: PropTypes.oneOf(['atkinson', 'gotham', 'Atkinson Hyperlegible']),
  weight: PropTypes.oneOf(['light', 'medium', 'bold', 'book', 'regular']),
  italic: PropTypes.bool,
  size: PropTypes.oneOf([
    'xxs',
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

Paragraphs.defaultProps = {
  family: 'Atkinson Hyperlegible',
  className: '',
  weight: 'regular',
  size: 'sm',
  children: '',
}

export default Paragraphs

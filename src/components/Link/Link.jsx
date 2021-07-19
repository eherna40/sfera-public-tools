import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './styles'
import Paragraphs from '../commons/Paragraphs/Paragraphs'

const Link = ({ text, active, className }) => (
  <div className="Link tw-p-2 tw-cursor-pointer">
    <Paragraphs
      size="sm"
      className={className ? className : 'tw-text-primary'}
      weight="bold"
    >
      <Item active={active}>{text}</Item>
    </Paragraphs>
  </div>
)

Link.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
}

Link.defaultProps = {
  active: false,
  className: '',
}

export default Link

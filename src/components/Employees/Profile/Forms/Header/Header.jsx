import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, WrapperText } from './styles'

const Header = ({ text, capitalization, underline, theme }) => (
  <Wrapper
    className={`${
      underline ? 'tw-border-b' : ''
    } tw-${theme}-200 tw-w-full tw-pb-3`}
  >
    <WrapperText className={`tw-text-${theme}-600 tw-border-none`}>
      {capitalization ? text.toUpperCase() : text}
    </WrapperText>
  </Wrapper>
)

Header.propTypes = {
  text: PropTypes.string,
  capitalization: PropTypes.bool,
  underline: PropTypes.bool,
  theme: PropTypes.string,
}

Header.defaultProps = {
  theme: 'green',
  capitalization: true,
  underline: true,
}

export default Header

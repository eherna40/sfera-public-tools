/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

const Button = styled.button`
  width: ${(props) =>
    props.size === 'small' ? '32px' : props.size === 'large' ? '72px' : '60px'};
  height: ${(props) =>
    props.size === 'small' ? '32px' : props.size === 'large' ? '72px' : '60px'};
`

export { Button }

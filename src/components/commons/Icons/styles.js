import styled from 'styled-components'

const Icon = styled.span`
  font-size: ${(props) => `${props.size ? props.size : 24}px`};
  color: ${(props) => props.color && props.color};
`

export { Icon }

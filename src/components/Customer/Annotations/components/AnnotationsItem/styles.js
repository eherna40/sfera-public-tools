import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${(props) => (props.active ? 'white' : props.color)};
  width: 200px;
  background: ${(props) => (props.active ? props.color : 'transparent')};
  border-color: ${(props) => props.active && props.color};
`

import styled from 'styled-components'

export const Item = styled.div`
  opacity: ${(props) => (props.active ? '1' : '0.5')};
  &:hover {
    opacity: 1;
  }
`

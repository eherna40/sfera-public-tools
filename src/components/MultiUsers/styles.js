import styled from 'styled-components'

const Plus = styled.div`
  transform: ${(props) =>
    props.translateX && `translateX(${props.translateX}px)`};
  z-index: ${(props) => props.index};
  height: 26px;
  width: 26px;
  border-width: 3px;
`

export { Plus }

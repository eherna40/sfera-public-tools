import styled from 'styled-components'

export const Container = styled.div`
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  width: 300px;
  zindex: 400;
`

export const Pointer = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
  position: absolute;
  bottom: 8px;
  left: -4px;
  transform: rotate(140deg);
  z-index: -1;
`

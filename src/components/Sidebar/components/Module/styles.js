import styled, { keyframes } from 'styled-components'

const translate = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px)
  }
  100% {
    opacity: 1;
    transform: translateX(0)
  }
`

export const Translate = styled.div`
  animation-duration: 0.1s;
  animation-name: ${translate};
  animation-delay: ${(props) => `${props.idx * 0.1}s`};
  opacity: 0;
  animation-fill-mode: forwards;
`

export const Modulo = styled.div`
  background-color: ${(props) => `${props.level > 0 ? 'white' : null}`};
  position: ${(props) => `${props.level > 0 ? 'absolute' : null}`};
  min-width: ${(props) => `${props.level > 0 ? '218px' : null}`};
  top: ${(props) => `${props.level > 0 ? '0' : null}`};
  left: ${(props) => `${props.level > 0 ? '218px' : null}`};
  display: ${(props) => `${props.level > 0 ? 'none' : 'block'}`};
  ${(props) => `.${props.name} .${props.level} {background-color: red;}`};
`
export const Container = styled.div`
  &:hover > .Modulo {
    display: block;
  }
`

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    right: -100%;
  }
  100% {
    right: 20px;
  }
`

export const Container = styled.div`
  padding: 15px;
  z-index: 999999999;
  right: -100%;
  &.open {
    max-width: 600px;
    animation-name: ${fadeIn};
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`

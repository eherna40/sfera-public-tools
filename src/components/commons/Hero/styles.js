import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
      transform: translateY(0px)
  }
`
export const Transition = styled.div`
  animation-duration: 3s;
  animation-name: ${fadeIn};
`

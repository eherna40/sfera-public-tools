import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
      transform: translateX(0px)
  }
`

const DynamicText = styled.span`
  font-size: ${(props) => `${props.size}px` || '8px'};
  color: ${(props) => props.color || 'black'};
  line-height: 14px;
`
export const Transition = styled.div`
  animation-duration: 0.8s;
  animation-name: ${fadeIn};
`

export { DynamicText }

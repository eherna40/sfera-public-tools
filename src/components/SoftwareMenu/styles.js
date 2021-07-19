import styled, { keyframes } from 'styled-components'
import { SIDEBAR_SOFTWARE } from '../../infrastructure/constants/sizes'

const translate = keyframes`
  0% {
    transform:translateX(-100%)
  }
  100% {
    transform:translateX(0%)
  }
`
const Container = styled.div`
  width: ${`${SIDEBAR_SOFTWARE}px`};
  z-index: 999;
`
export const Content = styled.div`
  animation-duration: 0.3s;
  animation-name: ${translate};
`

export { Container }

import styled, { keyframes } from 'styled-components'
import {
  SIDEBAR_COLLAPSE_WIDTH,
  SIDEBAR_OPEN_WIDTH,
} from '../../infrastructure/constants/sizes'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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
  animation-duration: 0.3s;
  animation-name: ${translate};
  animation-delay: ${(props) => `${props.idx * 0.3}s`};
  opacity: 0;
  animation-fill-mode: forwards;
`
export const Transition = styled.div`
  animation-duration: 0.8s;
  animation-name: ${fadeIn};
`
const SidebarInner = styled.div`
  background-color: ${(props) => props.color};
  width: ${`${SIDEBAR_COLLAPSE_WIDTH}px`};
  &.open {
    width: ${`${SIDEBAR_OPEN_WIDTH}px`};
  }

  @media (max-width: 640px) {
    transform: translateX(-60px);
    position: absolute;
    top: 0;
    left: 0;
  }
`

const SidebarSmall = styled.div`
  width: ${`${SIDEBAR_COLLAPSE_WIDTH}px`};
`

const Container = styled.div`
  z-index: 10;

  &.openMobile .Sidebar-Inner {
    transform: translateX(0px);
  }
`

const HiddenDiv = styled.div`
  & .hide {
    opacity: 0;
    display: flex;
    align-items: 'center';
    justify-content: 'center';
  }

  &:hover .hide {
    opacity: 1;
  }
`

const ImageContent = styled.div`
  & .img {
    display: block;
  }
  & .img-hover {
    display: none;
  }
  &:hover {
    background: white;
    & .img-hover {
      display: block;
    }
    & .img {
      display: none;
    }
  }
`
const Content = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.4);
`

export const Items = styled.div`
  height: calc(100vh - 112px);
`
export {
  SidebarInner,
  SidebarSmall,
  Container,
  ImageContent,
  Content,
  HiddenDiv,
}

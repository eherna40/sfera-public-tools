import styled from 'styled-components'

export const Selector = styled.div`
  &:hover .selector-inner {
    opacity: 1;
    visibility: visible;
    z-index: 50;
  }
`

export const SelectorInner = styled.div`
  top: 18px;
  z-index: 20;
  background: white;
  right: 0;
  opacity: 0;
  visibility: hidden;
  &.selection-text {
  }
`

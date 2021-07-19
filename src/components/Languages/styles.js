import styled from 'styled-components'

export const Box = styled.div`
  top: 25px;
  right: 0;
  visibility: hidden;
  opacity: 0;
`

export const Container = styled.div`
  &:hover .box-languages {
    visibility: visible;
    opacity: 1;
  }
`

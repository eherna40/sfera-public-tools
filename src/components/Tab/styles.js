import styled from 'styled-components'

const Container = styled.div`
  max-width: 150px;
  background-color: ${(props) => props.color};
  &.main-tab {
    height: 36px;
  }

  /* & .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */

  &:hover > .list {
    display: block;
  }
`

const List = styled.div`
  top: 36px;
  left: 0;
  display: none;
  width: 350px;
  background-color: white;
`

const CloseButton = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.selected ? props.tabColor : 'white')};
  color: ${(props) => (props.selected ? props.tabColor : 'white')};
`

export { Container, List, CloseButton }

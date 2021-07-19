import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 32px;
  z-index: 5;
  background-color: #2c2c2c;
  right: ${(props) => (props.sidebarVisible ? '2px' : '1px')};
  width: auto;
  top: ${(props) => (props.searchBar ? '42px' : '1px')};

  .icon-wrapper {
    height: 31px;
    width: 29px;
    background-color: ${(props) =>
      props.sidebarVisible ? 'white' : '#2c2c2c'};
  }
`

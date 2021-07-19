import styled from 'styled-components'

export const Container = styled.div`
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
  & .address {
    color: #2c2c2c;
  }

  &:hover .address {
    color: white;
  }

  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`

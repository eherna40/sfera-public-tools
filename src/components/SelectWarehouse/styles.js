import styled from 'styled-components'

const Content = styled.div`
  top: 25px;
  border-radius: 2px;
`

const ArrowUp = styled.div`
  right: 3px;
  top: -1px;
`

const Square = styled.div`
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
`
export { Content, ArrowUp, Square }

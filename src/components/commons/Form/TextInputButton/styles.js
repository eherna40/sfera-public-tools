import styled from 'styled-components'

const Container = styled.div`
  height: 35px;
  background-color: white;
  padding: 0px 8px;
  border: ${(props) => props.border};
  margin-bottom: ${(props) => props.marginBottom};
`

export { Container }

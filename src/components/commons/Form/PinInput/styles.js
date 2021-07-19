import styled from 'styled-components'

const InputContent = styled.div`
  height: 35px;
  border-bottom: ${(props) => props.error && '2px solid red'};
`
const Input = styled.input`
  font-size: 13px;
  width: calc(100% / 6);
  font-weight: bold;
  min-height: 40px;
`

const Error = styled.div`
  font-size: 10px;
  height: 14px;
`
export { InputContent, Input, Error }

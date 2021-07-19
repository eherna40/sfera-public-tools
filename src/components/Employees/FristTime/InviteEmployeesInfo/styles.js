import styled from 'styled-components'

const Wrapper = styled.div`
  /* min-width: 850px; */
  /* max-height: 535px; */
  background-color: transparent;
  overflow: auto;
  max-height: calc(100vh - 188px);
`

const Error = styled.div`
  font-size: 10px;
  height: 14px;
`

const InputContent = styled.div`
  height: 35px;
  border-bottom: ${(props) => props.error && '2px solid red'};
`

export { Wrapper, InputContent, Error }

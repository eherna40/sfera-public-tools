import styled from 'styled-components'

const Wrapper = styled.div`
  /* min-width: 850px; */
  background-color: transparent;
  overflow: auto;
  max-height: calc(100vh - 188px);
`
const WrapperLoadFile = styled.div`
  max-height: 100px;
  line-height: 1;
`

export { Wrapper, WrapperLoadFile }

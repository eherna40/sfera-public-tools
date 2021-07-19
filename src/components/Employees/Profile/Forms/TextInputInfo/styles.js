import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: transparent;
`

const WrapperInputContent = styled.div`
  height: 35px;
  border-bottom: ${(props) => props.error && '2px solid red'};
`
const WrapperInput = styled.input`
  font-size: 12px;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #2c2c2c;
    opacity: 1; /* Firefox */
  }
`
const WrapperLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
`

export { Wrapper, WrapperInputContent, WrapperLabel, WrapperInput }

import styled from 'styled-components'

const ColorInput = styled.input`
  height: 35px;
  width: 35px;
  border: none;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
  }
`

export { ColorInput }

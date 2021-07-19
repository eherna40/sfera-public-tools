import styled from 'styled-components'

const ColorOption = styled.div`
  height: ${({ size = 30 }) => `${size}px`};
  width: ${({ size = 30 }) => `${size}px`};
  background-color: ${({ color }) => `${color}`};
`

const EditBox = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: -20%;
  left: 85%;
`

export { ColorOption, EditBox }

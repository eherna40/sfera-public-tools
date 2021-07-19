import styled from 'styled-components'

const weight = {
  bold: 'Bold',
  regular: 'Regular',
}
export const Text = styled.div`
  color: ${(props) => props.color};
  font-family: ${(props) => `${props.family} ${weight[props.weight]}`};
  transition: 0.2s linear all;
`

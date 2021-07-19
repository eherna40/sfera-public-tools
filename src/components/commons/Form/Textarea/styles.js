import styled from 'styled-components'
// eslint-disable-next-line
import colors from '../../../../styles/colors'

const InputContent = styled.div`
  height: 35px;
  border-bottom: ${(props) => props.error && '2px solid red'};
`
const TextAreaInput = styled.textarea`
  font-size: 12px;
  padding: 10px;
  /* background-color: ${(props) =>
    !props.disabled ? `${colors.green[200]}` : '#FFFFFF'}; */
  border: ${(props) => props.disabled && `2px solid ${colors.green[200]}`};
  height: 100%;
  min-height: ${(props) => `${props.minHeight}px` || 'auto'};
`

const Error = styled.div`
  font-size: 10px;
  height: 14px;
`
export { InputContent, TextAreaInput, Error }

import styled from 'styled-components'
// eslint-disable-next-line
import colors from '../../../../styles/colors'

const InputContent = styled.div`
  height: 35px;
  border-bottom: ${(props) => props.error && '2px solid red'};
  position: relative;
`
const Input = styled.input`
  font-size: 12px;
  text-align: ${(props) => props.alignRight && 'right'};
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.color === 'success'
      ? `${colors.success}`
      : // eslint-disable-next-line no-nested-ternary
      props.color === 'error'
      ? `${colors.alert}`
      : props.color === 'warning'
      ? `${colors.warning}`
      : ''};

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
  }
`

const Error = styled.div`
  font-size: 10px;
  height: 14px;
`
export { InputContent, Input, Error }

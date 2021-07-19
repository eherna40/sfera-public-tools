import styled from 'styled-components'
// eslint-disable-next-line
import colors from '../../../../styles/colors'

const InputContent = styled.div`
  height: 35px;
  border-bottom: ${(props) => props.error && '2px solid red'};
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
`

const ContainerIcon = styled.div`
  &:hover {
    & .Tooltip {
      z-index: 99999999;
      display: block;
    }
  }

  .Tooltip {
    display: none;
  }
`

const Tooltip = styled.div`
  background: white;
`

const Error = styled.div`
  font-size: 10px;
  height: 14px;
`
export { InputContent, Input, Error, Tooltip, ContainerIcon }

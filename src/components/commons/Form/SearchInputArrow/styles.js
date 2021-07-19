import styled from 'styled-components'
import Icinputclose from '../../../../assets/img/icons/ic_input_close.svg'

const iconsize = 24
const bordercolor = '#E8F4F5'

const InputContent = styled.div`
  height: 52px;
  border-color: ${bordercolor};
`
const Input = styled.input`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  &::-webkit-search-cancel-button {
    cursor: pointer;
    position: relative;
    -webkit-appearance: none;
    height: ${iconsize}px;
    width: ${iconsize}px;
    border-radius: ${iconsize}px;
    background-image: url('${Icinputclose}');
  }
`

const Button = styled.button``

export { Input, InputContent, Button }

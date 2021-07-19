import styled from 'styled-components'

const InputContent = styled.div`
  /* height: 35px; */
`

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  /* margin-bottom: 5px; */
  width: 100%;
`
const Select = styled.select`
  height: 35px;
  font-size: 12px;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 8px 10px 8px 10px;
  outline: none;
  border-radius: 0px;
  background-color: ${(props) => (props.transparent ? 'white' : '#e8f4f5')};
  color: #2c2c2c;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  & select::-ms-expand {
    display: none;
  }

  & select:hover,
  & select:focus {
    background: #e8f4f5;
  }
  & select:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

const SelectArrow = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 0px;
  height: 0px;
  border: solid #2c2c2c;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

const Label = styled.div`
  font-size: 12px;
`

const Error = styled.div`
  font-size: 10px;
  height: 14px;
`
export { InputContent, Label, SelectContainer, SelectArrow, Select, Error }

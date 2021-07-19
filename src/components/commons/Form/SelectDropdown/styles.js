import styled from 'styled-components'

export const PseudoSelect = styled.div`
  height: 35px;
  outline: none;
`

export const SelectArrow = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 0px;
  height: 0px;
  border: solid ${({ color }) => color || '#2c2c2c'};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

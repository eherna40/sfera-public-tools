import styled from 'styled-components'

const SoftwareDiv = styled.div`
  display: flex;
  width: 213px;
  min-height: 84px;
  height: ${(props) => (props.children ? 'auto' : '84px')};
  padding: 16px;
  font-size: 18px;

  cursor: default;
  &:hover .first-text {
    color: ${(props) => props.interactive && 'white'};
  }
  &:hover .second-text {
    color: ${(props) => props.interactive && 'white'};
  }
  & .separator {
    background-color: ${(props) => (props.disabled ? '#CFE0E1' : '#e8f4f5')};
  }
  &:hover .separator {
    background-color: ${(props) =>
      props.disabled ? '#CFE0E1' : props.interactive && 'white'};
  }
`
const Separator = styled.div`
  width: 2px;
  height: 100%;
  margin-right: 14px;
`

const VersionIndicator = styled.div`
  position: relative;
  top: 50%;
  margin-left: 15%;
  display: block;
`

export { SoftwareDiv, Separator, VersionIndicator }

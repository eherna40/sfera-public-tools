import styled from 'styled-components'

export const Wrapper = styled.div`
  .check-input {
    opacity: 0;
    cursor: pointer;
  }

  .check-input:checked ~ .check-indicator {
    background: ${(props) => `url(${props.bgImage})`};
    background-color: ${(props) => props.bgColor};
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 85%;
    border-color: ${(props) => props.bgColor};
  }

  .check-indicator {
    border: ${(props) => `${props.borderWidth}px solid ${props.borderColor}`};
    height: ${(props) => `${props.size}px`};
    width: ${(props) => `${props.size}px`};
    top: 0px;
    border-radius: ${(props) => `${props.borderRadius}px`};
  }
`

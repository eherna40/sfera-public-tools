import styled from 'styled-components'

const Wrapper = styled.div`
  .control {
    /* display: block; */
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-size: 16px;
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 15px;
    width: 15px;
    background: ${(props) => (props.borderPrimary ? '#FFFFFF' : '#e6e6e6')};
    border: ${(props) =>
      props.borderPrimary ? '2px solid #22949B' : '0px solid #000000'};
    border-radius: 0px;
  }

  /* .control:hover input ~ .control_indicator,
  .control input:focus ~ .control_indicator {
    background: #cccccc;
  } */

  .control input:checked ~ .control_indicator {
    background: ${(props) => (props.bgPrimary ? '#22949B' : '#3fcbd9')};
  }
  /* .control:hover input:not([disabled]):checked ~ .control_indicator,
  .control input:checked:focus ~ .control_indicator {
    background: #3fcbd9;
  } */
  .control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
    border: 1px solid red;
  }
  .control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
  }
  .control input:checked ~ .control_indicator:after {
    display: block;
  }
  .control-checkbox .control_indicator:after {
    left: ${(props) => (props.borderPrimary ? '3px' : '5px')};
    top: ${(props) => (props.borderPrimary ? '0px' : '2px')};
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
  }
`

export { Wrapper }

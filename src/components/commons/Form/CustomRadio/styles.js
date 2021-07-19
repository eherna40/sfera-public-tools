import styled from 'styled-components'

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: ${(props) => (props.size === 'sm' ? '25px' : '28px')};
  margin-bottom: 2px;
  padding-top: 3px;
  cursor: pointer;

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  // TAMAÑO CIRCULO EXTERIOR
  & .indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: ${(props) => (props.size === 'sm' ? '16px' : '20px')};
    width: ${(props) => (props.size === 'sm' ? '16px' : '20px')};
    background: #ffffff;
    border: 2px solid #22949b;
    border-radius: undefinedpx;
  }
  &:hover input ~ .indicator,
  & input:focus ~ .indicator {
    background: #e8e8e8;
  }

  & input:checked ~ .indicator {
    background: #ffffff;
  }
  &:hover input:not([disabled]):checked ~ .indicator,
  & input:checked:focus ~ .indicator {
    background: #eeeeee;
  }
  & input:disabled ~ .indicator {
    background: #e6e6e6;
    opacity: 1;
    pointer-events: none;
  }
  .indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
  }
  & input:checked ~ .indicator:after {
    display: block;
  }
  & .indicator {
    border-radius: 50%;
  }

  //CIRCULO DEL MEDIO
  & .indicator:after {
    left: ${(props) => (props.size === 'sm' ? '3px' : '3px')};
    top: ${(props) => (props.size === 'sm' ? '3px' : '3px')};
    height: ${(props) => (props.size === 'sm' ? '6px' : '10px')};
    width: ${(props) => (props.size === 'sm' ? '6px' : '10px')};
    border-radius: 50%;
    background: #22949b;
    transition: background 250ms;
  }
  & input:disabled ~ .indicator:after {
    background: #22949b;
  }
`
export { Label }

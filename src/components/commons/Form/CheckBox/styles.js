import styled from 'styled-components'

const size = {
  xs: '15px',
  sm: '25px',
}

const top = {
  xs: '2px',
  sm: '7px',
}

export const Container = styled.label`
    height:${(props) => size[props.size]};
    width: ${(props) => size[props.size]};

  & input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  & input:checked ~ .checkmark:after {
  display: block;

}
& .checkmark:after {
  left: 5px;
  top: ${(props) => top[props.size]};
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
}
`

export const Input = styled.input`
  opacity: 0;
  cursor: pointer;
`

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => size[props.size]};
  width: ${(props) => size[props.size]};
  background-color: #eee;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

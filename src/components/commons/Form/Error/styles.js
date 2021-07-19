import styled from 'styled-components'

const sizes = {
  small: {
    width: '35px',
    height: '45px',
    fontSize: '20px',
  },
  medium: {
    width: '56px',
    height: '74px',
    fontSize: '30px',
  },
}
export const Pin = styled.div`
  & .field-a {
    font-size: ${(props) => sizes[props.size].fontSize};
    text-align: center;
    width: ${(props) => sizes[props.size].width};
    height: ${(props) => sizes[props.size].height};
  }
  & .field-a.-focus::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: red;
  }
`

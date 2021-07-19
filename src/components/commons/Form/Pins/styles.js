import styled from 'styled-components'

const sizes = {
  small: {
    width: '25px',
    height: '35px',
    fontSize: '20px',
  },
  medium: {
    width: '35px',
    height: '45px',
    fontSize: '20px',
  },

  large: {
    width: '56px',
    height: '74px',
    fontSize: '30px',
  },
  responsive: {
    width: '100%',
    height: '45px',
    minWidth: '20px',
    fontSize: '30px',
  },
}
export const Pin = styled.div`
  & .field-a {
    border-color: #E8F4F5;
    font-size: ${(props) => sizes[props.size].fontSize};
    text-align: center;
    width: ${(props) => sizes[props.size].width};
    height: ${(props) => sizes[props.size].height};
    min-width: ${(props) => sizes[props.size].minWidth};
    min-height: ${(props) => sizes[props.size].minHeight};
  }

  @media (max-width: 1500px) {
  & .field-a  {
    height: ${(props) => props.size === 'responsive' && '30px'};
    /* width: ${(props) => props.size === 'responsive' && '15px'}; */
    /* font-size: 10px; */
  }

  & .field-a.-focus::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: red;
  }
`

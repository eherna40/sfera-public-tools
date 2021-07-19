import styled from 'styled-components'

const InputSearch = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: 'bold';
  font-size: 14px;
  color: white;
  &::placeholder {
    font-weight: 'bold';
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  &:focus {
    outline: none;
  }
`

export { InputSearch }

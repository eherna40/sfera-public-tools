import styled from 'styled-components'

const Wrapper = styled.div`
  .checkmark {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  .checkmark-fill {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    /* background: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.active ? 'white' : props.secondary ? '#3FCBD9' : '#22949B'}; */
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }

  input:checked ~ .checkmark {
    background: transparent;
    border: 2px solid white;
  }

  input:checked ~ .rol-name {
    opacity: 1;
  }
`
export { Wrapper }

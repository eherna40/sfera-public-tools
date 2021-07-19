import styled from 'styled-components'

const Btn = styled.button`
  font-size: 12px;
  height: 40px;
  outline: none !important;
  justify-content: ${(props) => (props.shortcut ? 'space-between' : 'center')};
  width: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.size === 'small'
      ? '150px'
      : props.size === 'medium'
      ? '200px'
      : '100%'};

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    gap: 15px;
    & .shortcut {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }
`

export { Btn }

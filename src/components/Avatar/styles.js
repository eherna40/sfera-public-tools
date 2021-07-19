import styled from 'styled-components'
import colors from '../../styles/colors'

const Container = styled.div`
  display: flex;
  transform: ${(props) =>
    props.translateX && `translateX(${props.translateX}px)`};
  z-index: ${(props) => props.zIndex};
  /* border: ${(props) =>
    props.active ? '2px solid white' : `2px solid ${colors.green[600]}`}; */
  width: ${(props) => (props.size === 'small' ? '35px' : '40px')};
  height: ${(props) => (props.size === 'small' ? '35px' : '40px')};

  div::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => !props.active && 'rgba(255, 255, 255, 0.2)'};
  }
`

export { Container }

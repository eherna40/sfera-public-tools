import styled from 'styled-components'

const Wrapper = styled.div`
  .edit-icon {
    opacity: 0;
  }
  &:hover .edit-icon {
    opacity: 1;
  }
`

const BackgroundImage = styled.div`
  background: ${(props) => `url(${props.file})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const DropZone = styled.div`
  width: 200px;
  height: 100px;
`
export { Wrapper, BackgroundImage }

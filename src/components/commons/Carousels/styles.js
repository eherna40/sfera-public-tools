import styled from 'styled-components'

export const Img = styled.div`
  height: 150px;
  width: 500px;
  background: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none !important;
  outline: none !important;
  &:focus {
    border: none !important;
    outline: none !important;
  }
`

export const Dot = styled.div`
  .BrainhubCarousel__dots .BrainhubCarousel__dot {
    opacity: 1;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot:before {
    background: white;
    border: 2px solid #22949b;
    /* background: #22949b; */
    width: 12px;
    height: 12px;
  }

  .BrainhubCarousel__dots
    .BrainhubCarousel__dot.BrainhubCarousel__dot--selected:before {
    opacity: 1 !important;
    background: #22949b;
  }
`

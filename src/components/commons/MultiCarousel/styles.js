import styled from 'styled-components'

export const Wrapper = styled.div`
  & .react-multiple-carousel__arrow {
    background: transparent;
    outline: none;
  }

  & .react-multiple-carousel__arrow::before {
    color: #22949b;
  }

  & .react-multiple-carousel__arrow:hover::before {
    color: white;
  }
  & .react-multiple-carousel__arrow:hover {
    background: #22949b;
  }
`

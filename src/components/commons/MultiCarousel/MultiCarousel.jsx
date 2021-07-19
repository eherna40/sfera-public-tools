import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

const MultiCarousel = ({ children }) => (
  <Wrapper>
    <Carousel responsive={responsive} infinite>
      {children}
    </Carousel>
  </Wrapper>
)

MultiCarousel.propTypes = {
  children: PropTypes.node,
}

export default MultiCarousel

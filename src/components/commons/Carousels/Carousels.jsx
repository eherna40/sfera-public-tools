import React, { useState } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import { Img, Dot } from './styles'
import '@brainhubeu/react-carousel/lib/style.css'

const Carousels = ({ images }) => {
  const [indice, setIndice] = useState(0)
  return (
    <div className="tw-relative tw-h-full">
      <Carousel
        value={indice}
        infinite
        clickToChange
        keepDirectionWhenDragging
        slidesPerPage={1}
        onChange={(e) => setIndice(e)}
      >
        {images.map((i, index) => (
          <Img key={index} url={i.url} />
        ))}
      </Carousel>
      <Dot className="tw-w-full tw-flex tw-items-center tw-justify-center">
        <Dots value={indice} number={images.length} />
      </Dot>
    </div>
  )
}

export default Carousels

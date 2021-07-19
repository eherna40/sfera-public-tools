import React from 'react'
import { Container, Spinner } from './styles'
import Logo from '../../../assets/img/loader.png'

const Loader = ({ className }) => (
  <Container
    className={`Loader tw-p-4 tw-flex tw-justify-center tw-flex-col tw-items-center ${className}`}
  >
    <img src={Logo} alt="loader" width={120} />
    <div className="tw-mt-3">
      <Spinner />
    </div>
  </Container>
)

export default Loader

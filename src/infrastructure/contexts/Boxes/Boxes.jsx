/* eslint-disable import/no-cycle */
import React from 'react'
import Container from '../../../components/Page/Container/Container'

let BoxesContext
// eslint-disable-next-line no-multi-assign
const { Provider } = (BoxesContext = React.createContext())

const BoxesProvider = ({ children }) => (
  <Provider>
    <Container name="BoxesProvider">{children}</Container>
  </Provider>
)

export { BoxesContext, BoxesProvider }

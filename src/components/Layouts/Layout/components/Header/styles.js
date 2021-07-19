import styled from 'styled-components'
import {
  HEADER_HEIGHT,
  NAV_TABS,
} from '../../../../../infrastructure/constants/sizes'

const Container = styled.div`
  z-index: 9;
  background-color: ${(props) => props.color};
  height: ${`${HEADER_HEIGHT + NAV_TABS}px`};
  @media (min-width: 640px) {
    padding-left: 60px;
  }
`

export const Nav = styled.div`
  background-color: ${(props) => props.color};
  height: ${`${NAV_TABS}px`};
`
export { Container }

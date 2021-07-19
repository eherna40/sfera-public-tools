import styled from 'styled-components'

const hasSearchBar = (searchBar) => {
  if (searchBar) {
    return '52px - 0.75rem'
  }
  return '0px'
}

export const PadlockWrapper = styled.div`
  z-index: 9999;
  width: 26px;
  height: 26px;
`

export const Container = styled.div`
  height: ${(props) =>
    props.height || `calc(100% - ${hasSearchBar(props.searchBar)} )`};
`

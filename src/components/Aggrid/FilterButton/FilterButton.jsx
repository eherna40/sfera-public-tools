import React from 'react'
import PropTypes from 'prop-types'
import IcTableIcon from '../../../assets/img/aggrid/IcTableIcon'
import { Wrapper } from './styles'

const FilterButton = ({ onClick, sidebarVisible, searchBar }) => (
  <Wrapper
    sidebarVisible={sidebarVisible}
    searchBar={searchBar}
    className="tw-flex tw-w-full tw-items-center tw-justify-end tw-cursor-pointer filter-button tw-absolute"
  >
    <div
      onClick={onClick}
      aria-hidden="true"
      className="icon-wrapper tw-flex tw-items-center tw-justify-center"
    >
      <IcTableIcon size={20} sidebarVisible={sidebarVisible} />
    </div>
  </Wrapper>
)

FilterButton.propTypes = {
  onClick: PropTypes.func,
  sidebarVisible: PropTypes.bool,
  searchBar: PropTypes.bool,
}

FilterButton.defaultProps = {
  onClick: () => null,
  sidebarVisible: false,
  searchBar: false,
}

export default FilterButton

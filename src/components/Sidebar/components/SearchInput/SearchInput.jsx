import React from 'react'
import PropTypes from 'prop-types'
import { InputSearch } from './styles'
import IcSearch from '../../../commons/Icons/IcSearch'

const SearchInput = ({ placeholder, value, onChange }) => (
  <div className="tw-h-14 tw-relative">
    <InputSearch
      type="search"
      name="search"
      className="tw-h-full tw-w-full tw-pl-4 tw-pr-5"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <div className="tw-absolute tw-right-5 tw-top-4">
      {!value && <IcSearch size={24} color="white" />}
    </div>
  </div>
)

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

SearchInput.defaultProps = {
  placeholder: 'Buscar un recurso...',
}

export default SearchInput

import React from 'react'
import PropTypes from 'prop-types'
import IconActive from '../../../assets/img/icons/ic_filter_active.png'

const IcFilter = ({ className }) => (
  <span className={`IcFilter ${className}`}>
    <img src={IconActive} alt="filter"></img>
  </span>
)

IcFilter.propTypes = {
  className: PropTypes.string,
}

export default IcFilter

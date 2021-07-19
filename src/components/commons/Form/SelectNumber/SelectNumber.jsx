import React from 'react'
import PropTypes from 'prop-types'

const SelectNumber = ({ num }) => {
  const options = []
  const renderOptions = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < num; i++) {
      options.push(<option>{i}</option>)
      // more statements
    }
    return options.map((el) => el)
  }
  return (
    <div>
      <select id="quantity" className="tw-border tw-pl-2">
        {renderOptions()}
        <option type="text">{options.length + 1} +</option>
      </select>
    </div>
  )
}

SelectNumber.propTypes = {
  num: PropTypes.number,
}

SelectNumber.defaultProps = {
  num: 10,
}

export default SelectNumber

import React from 'react'
import PropTypes from 'prop-types'
import Listing from '../../pages/Employees/Listing/Listing'

const StackEmployee = ({ path }) => {
  switch (path) {
    case '/listing':
      return <Listing />
    default:
      return <div>404</div>
  }
}

StackEmployee.propTypes = {
  path: PropTypes.string,
}
StackEmployee.defaultProps = {
  path: '',
}

export default StackEmployee

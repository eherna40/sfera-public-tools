import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => (
  <div
    style={{ height: '60px' }}
    className="tw-text-white tw-font-bold tw-flex tw-items-center tw-px-4"
  >
    {title}
  </div>
)

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: 'Mi Farmacia',
}

export default Title

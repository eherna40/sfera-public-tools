import React from 'react'
import PropTypes from 'prop-types'
import IcFeature from '../../../assets/img/icons/ic_feature.svg'

const ImgIcon = ({ url, size }) => (
  <div>
    <img src={url} alt="icon" style={{ width: size }} />
  </div>
)

ImgIcon.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number,
}

ImgIcon.defaultProps = {
  url: IcFeature,
  size: 26,
}

export default ImgIcon

import React from 'react'
import icon from '../../../assets/img/icons/ic_collapse_up.svg'
import './icon.css'

const ICollapse = ({ height, width, vertical }) => (
  <div className="ICollapse">
    <img
      alt="icon"
      src={icon}
      style={{ height, width }}
      className={`icon-collapse ${vertical ? 'vertical' : 'horizontal'}`}
    />
  </div>
)

export default ICollapse

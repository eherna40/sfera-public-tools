import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SwitchCSS } from './styles'

const Switch = ({ isActive }) => {
  const [active, setActive] = useState(isActive)
  return (
    <SwitchCSS>
      <label className="Switch">
        <input
          type="checkbox"
          defaultChecked={active}
          onChange={() => setActive(!active)}
        />
        <span className="slider round"></span>
      </label>
    </SwitchCSS>
  )
}

Switch.propTypes = {
  isActive: PropTypes.bool,
}

Switch.defaultProps = {
  isActive: false,
}

export default Switch

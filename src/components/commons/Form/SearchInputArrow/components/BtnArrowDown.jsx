import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Button } from './styles'

// components
import IcArrowDown from '../../../Icons/IcArrowDown'

const BtnArrowDown = ({ onClick, theme }) => (
  <Button
    className={`BtnArrowDown tw-h-full tw-items-center tw-justify-center tw-bg-${theme}-900 focus:tw-outline-none tw-outline-none tw-border-none tw-px-2`}
    onClick={onClick}
  >
    <div className="tw-flex tw-items-center tw-justify-center">
      <IcArrowDown size={32} />
    </div>
  </Button>
)

BtnArrowDown.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
}
BtnArrowDown.defaultProps = {
  theme: 'green',
  onClick: undefined,
}

export default BtnArrowDown

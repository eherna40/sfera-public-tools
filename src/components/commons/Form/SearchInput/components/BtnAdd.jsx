import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Button } from './styles'

// components
import IcAdd from '../../../Icons/IcAdd'
import IcPlus from '../../../../../assets/img/icons/IcPlus'

const BtnAdd = ({ onClick, theme, border }) => (
  <Button
    className={`BtnAddFilter tw-h-full tw-items-center tw-justify-center tw-bg-${theme}-900 focus:tw-outline-none tw-outline-none tw-border-none tw-px-2`}
    onClick={onClick}
  >
    <div className="tw-flex tw-items-center tw-justify-center">
      {border ? <IcAdd /> : <IcPlus size={12} />}
    </div>
  </Button>
)

BtnAdd.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.bool,
}
BtnAdd.defaultProps = {
  theme: 'primary',
  onClick: undefined,
  border: true,
}

export default BtnAdd

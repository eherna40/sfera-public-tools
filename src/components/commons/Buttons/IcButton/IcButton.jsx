import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'
import Spinner from '../../Spinner/Spinner'

const IcButton = ({
  active,
  icicon,
  primary,
  size,
  onClick,
  loading,
  transparent,
  visible,
}) => {
  let mode = primary ? `primary` : 'secondary'
  mode = transparent ? 'transparent' : mode

  return (
    <>
      {visible && (
        <Button
          size={size}
          className={`IcButton ${
            active ? 'tw-bg-activeMenu' : `tw-bg-${mode}`
          } tw-flex tw-items-center tw-justify-center tw-bg-green focus:tw-outline-none tw-outline-none tw-border-none`}
          onClick={onClick}
        >
          {loading ? <Spinner color="#FFFFFF" size="small" /> : icicon}
        </Button>
      )}
    </>
  )
}

IcButton.propTypes = {
  icicon: PropTypes.node,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  transparent: PropTypes.bool,
  active: PropTypes.bool,
  visible: PropTypes.bool,
}

IcButton.defaultProps = {
  size: 'medium',
  onClick: undefined,
  active: false,
  visible: true,
}

export default IcButton

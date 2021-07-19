import React from 'react'
import PropTypes from 'prop-types'
import IcMoney from '../../../../../commons/Icons/IcMoney'
import InputGroup from '../../../../../commons/Form/InputGroup/InputGroup'
import SelectLines from '../SelectLines/SelectLines'

const PaymentMethod = ({
  title,
  children,
  className,
  active,
  handleClick,
  isSelectLinesOpen,
  handleActive,
  setIsSelectLinesOpen,
}) => (
  <div
    aria-hidden="true"
    className={`tw-w-48 tw-h-full tw-border-2 xl:tw-w-72 xl:tw-h-60 tw-relative  ${className} ${
      active && 'tw-border-primary'
    }`}
    onClick={handleClick}
  >
    <div
      className={`tw-cursor-pointer ${
        !active ? 'tw-opacity-30' : 'tw-opacity-100'
      } tw-ml-2`}
      aria-hidden="true"
      onClick={handleActive ? () => handleActive() : null}
    >
      <IcMoney />
      <InputGroup title={title} primary />
    </div>
    {isSelectLinesOpen && <SelectLines />}
    <div
      aria-hidden="true"
      className="tw-px-2"
      onClick={setIsSelectLinesOpen ? () => setIsSelectLinesOpen(false) : null}
    >
      {children}
    </div>
  </div>
)

PaymentMethod.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  handleActive: PropTypes.func,
}

PaymentMethod.defaultProps = {
  title: 'TÍTULO',
  active: true,
}

export default PaymentMethod

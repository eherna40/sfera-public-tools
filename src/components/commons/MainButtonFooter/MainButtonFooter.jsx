import React from 'react'
import PropTypes from 'prop-types'
import IcButton from '../Buttons/IcButton/IcButton'
import IcPlus from '../../../assets/img/icons/IcPlus'
import IcClose from '../Icons/IcClose'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'

const MainButtonFooter = ({ items, icon, open, toogle }) => (
  <div className="tw-relative">
    <div className="tw-bg-primary">
      <IcButton
        size="large"
        icicon={
          icon || (open ? <IcClose size={40} color="#FFFFFF" /> : <IcPlus />)
        }
        onClick={() => {
          toogle(!open)
        }}
      />
    </div>

    {open && (
      <Container className="tw-bg-white tw-text-black tw-absolute tw-text-center">
        {items.map((item, index) => (
          <button
            key={index}
            id={item.id}
            onClick={item.action}
            type="button"
            className="tw-w-full tw-flex tw-flex-col tw-items-center tw-py-4 tw-px-2 tw-border tw-border-b-0 tw-border-secondary tw-text-activeMenu"
          >
            <Paragraphs size="xxs" weight="bold">
              {item.name}
            </Paragraphs>
          </button>
        ))}
      </Container>
    )}
  </div>
)

MainButtonFooter.propTypes = {
  items: PropTypes.array,
  open: PropTypes.bool,
  toogle: PropTypes.func,
}

MainButtonFooter.defaultProps = {
  items: [
    {
      id: 1,
      name: 'Cerrar venta',
      action: () => alert(),
    },
    {
      id: 2,
      name: 'Cierre rápido',
      action: () => alert(),
    },
    {
      id: 3,
      name: 'Cierre rápido con ticket',
      action: () => alert(),
    },
  ],
  open: false,
  toogle: () => null,
}

export default MainButtonFooter

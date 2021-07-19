import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../../../commons/Buttons/Button/Button'
import IcButton from '../../../../../commons/Buttons/IcButton/IcButton'
import IcCheck from '../../../../../commons/Icons/IcCheck'

const Footer = () => {
  const itemButtons = [
    {
      id: 1,
      name: 'Editar venta',
      shortcut: 'ESC',
    },
    {
      id: 2,
      name: 'Aplicar redondeo',
      shortcut: 'Ctrl+R',
    },
    {
      id: 1,
      name: 'Observaciones',
      shortcut: 'Ctrl+O',
    },
  ]

  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-bg-secondary tw-bg-opacity-10">
      <div className="tw-flex tw-flex-wrap tw-justify-around tw-ml-2 xl:tw-flex-nowrap xl:tw-justify-start">
        {itemButtons.map((item, index) => (
          <div key={index} className="tw-mx-2">
            <Button label={item.name} shortcut={item.shortcut} primary />
          </div>
        ))}
      </div>

      <div>
        <IcButton icicon={<IcCheck />} />
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer

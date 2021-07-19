import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ProfileMenu = ({ options }) => {
  const [activeOption, setActiveOption] = useState(0)
  const toggleOption = (index) => {
    setActiveOption(index)
  }
  return (
    <div className="ProfileMenu tw-flex tw-flex-wrap lg:tw-flex-row tw-justify-between tw-items-center tw-gap-8 tw-text-xs tw-font-bold tw-text-primary">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => toggleOption(index)}
          aria-hidden="true"
          className={`tw-opacity-${
            index === activeOption ? '100' : '50'
          } tw-cursor-pointer`}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

ProfileMenu.propTypes = {
  options: PropTypes.array,
}

ProfileMenu.defaultProps = {
  options: [
    'Ficha cliente',
    'Consultas',
    'Estadísticas',
    'Puntos',
    'R.G.P.D.',
    'Encargos',
    'Facturación',
    'Pacientes',
  ],
}

export default ProfileMenu

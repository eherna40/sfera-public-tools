import React, { useState, useEffect } from 'react'
import Input from 'reactstrap/lib/Input'
import SferaModal from '../../commons/Modals/SferaModal/SferaModal'
import './ModalIconsLegend.scss'

export const ModalIConsLegend = ({
  title,
  toggle,
  hasFooter,
  className,
  size,
  legendIcons,
}) => {
  const [icons, setIcons] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (icons.length === 0) {
      setIcons(legendIcons)
    }
  }, [legendIcons])  // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchInput = (e) => {
    const { value } = e.target
    setSearchText(value)
  }

  const handleFilter = () => {
    if (searchText === '') setIcons(legendIcons)
    const iconsNames = legendIcons.filter((icon) =>
      icon.name.toLowerCase().includes(searchText.toLowerCase()),
    )
    setIcons(iconsNames)
  }

  useEffect(() => {
    handleFilter()
  
  }, [searchText])  // eslint-disable-line react-hooks/exhaustive-deps

  const handleResetSearch = () => setSearchText('')

  return (
    <SferaModal
      title={title}
      toggle={toggle}
      hasFooter={hasFooter}
      className={className}
      size={size}
    >
      <div className="Modal-iconsLegend__search mx-n3 mt-n3">
        <Input
          placeholder="Filtra por los nombres de los iconos..."
          className="p-3 py-4"
          onChange={(e) => handleSearchInput(e)}
          value={searchText}
        />
        {searchText !== '' && (
          <div className="Modal-iconsLegend__search__clear animation__animated animation__fadeIn animate__delay-2s">
            <button type="button" onClick={handleResetSearch}>
              Borrar búsqueda
            </button>
          </div>
        )}
      </div>
      <ul className="Modal-iconsLegend__list">
        {icons.length !== 0 ? (
          icons.map((icon, index) => (
            <li key={`id${index}`} className="Modal-iconsLegend__list__item">
              <img src={icon.img} alt={icon.name} />
              <dl>
                <dt>{icon.name}</dt>
                <dd>{icon.description}</dd>
              </dl>
            </li>
          ))
        ) : (
          <p className="Modal-iconsLegend__noResult">
            No se ha encontrado ningún resultado
          </p>
        )}
      </ul>
    </SferaModal>
  )
}

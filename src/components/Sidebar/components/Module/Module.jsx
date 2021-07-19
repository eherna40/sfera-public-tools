import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next'
import ItemMenu from '../ItemMenu/ItemMenu'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import { Translate, Modulo, Container } from './styles'

const Module = ({
  name,
  level,
  nombre,
  recursos,
  onPress,
  handleSetFavorite,
  firstChildren,
  visible,
}) => {
  // const {t} = useTranslation()
  const [data, setData] = useState([])
  useEffect(() => {
    // setData([])
    // setTimeout(() => {
    console.log(recursos)
    setData(recursos)
    // }, 200)
    // console.log(recursos)
  }, [recursos])
  return (
    <Modulo level={level} name={name} className={`${name} ${level} Modulo`}>
      {nombre && (
        <Paragraphs weight="bold" size="lg" className="tw-text-white tw-p-4">
          {nombre}
        </Paragraphs>
      )}
      {data.map((i, idx) => (
        <Translate className="Module-inner" idx={idx} key={idx}>
          <Container className="Item-menu">
            <ItemMenu
              level={level}
              onPress={() => (i.id !== -1 ? onPress(i) : null)}
              fav={i.fav_id}
              onChildren={i.children}
              software={i.software ? i.software.nombre : ''}
              options={false}
              key={i.id}
              name={i.nombre}
              handleSetFavorite={() => handleSetFavorite(i)}
              firstChildren={firstChildren}
              className={i.nombre}
              visible={i.visible}
              idItem={Number(i.id)}
            />
            {i.children && (
              <Module
                recursos={i.children}
                handleSetFavorite={handleSetFavorite}
                onPress={i.id !== -1 ? onPress : null}
                firstChildren={false}
                level={level + 1}
                name={name}
              />
            )}
          </Container>
        </Translate>
      ))}
    </Modulo>
  )
}

Module.propTypes = {
  recursos: PropTypes.array,
  nombre: PropTypes.string,
  onPress: PropTypes.func,
  handleSetFavorite: PropTypes.func,
  firstChildren: PropTypes.bool,
  level: PropTypes.number,
}

Module.defaultProps = {
  recursos: [],
  onPress: null,
  handleSetFavorite: null,
  firstChildren: true,
  level: 0,
}

export default Module
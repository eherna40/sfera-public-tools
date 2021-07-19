import React from 'react'
import PropTypes from 'prop-types'
import IcInfo from '../../../../commons/Icons/IcInfo'
import Paragraphs from '../../../../commons/Paragraphs/Paragraphs'
import { Wrapper } from './styles'
import IcWarning from '../../../../commons/Icons/IcWarning'
import IcDialogAlert from '../../../../commons/Icons/IcDialogAlert'
import IcStar from '../../../../commons/Icons/IcStar'

const AnnotationsItem = ({ active, type, onClick, index }) => {
  const renderIcon = () => {
    switch (type) {
      case 'info':
        return {
          icon: <IcInfo color={active ? 'white' : '#71D875'} />,
          text: 'Informativa',
          color: '#71D875',
        }
      case 'observation':
        return {
          icon: <IcDialogAlert color={active ? 'white' : '#FFB500'} />,
          text: 'Observación',
          color: '#FFB500',
        }
      case 'alert':
        return {
          icon: <IcWarning color={active ? 'white' : '#D8004D'} />,
          text: 'Alerta',
          color: '#D8004D',
        }
      case 'pharma':
        return {
          icon: (
            <IcStar
              color={active ? 'white' : '#2C2C2C'}
              starColor={active ? '#2C2C2C' : 'white'}
            />
          ),
          text: 'Aviso farmacéutico',
          color: '#2C2C2C',
        }
      default:
        return {
          icon: <IcInfo color={active ? 'white' : '#71D875'} />,
          text: 'Informativa',
          color: '#71D875',
        }
    }
  }
  const { icon, color, text } = renderIcon()

  return (
    <Wrapper
      className={`tw-flex tw-items-center tw-justify-center tw-p-2 tw-gap-1 tw-cursor-pointer tw-border ${
        index !== 0 && 'tw-border-l-0'
      }`}
      color={color}
      active={active}
      onClick={onClick}
    >
      {icon}
      <Paragraphs weight="bold" size="xs">
        {text}
      </Paragraphs>
    </Wrapper>
  )
}

AnnotationsItem.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
}
AnnotationsItem.defaultProps = {
  active: false,
  type: 'info',
  onClick: () => null,
}

export default AnnotationsItem

import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Paragraphs from '../Paragraphs/Paragraphs'
import EditableCheck from '../EditableCheck/EditableCheck'
import Visa from '../../../assets/img/paymentsMethods/visa.png'
import IcStart from '../Icons/IcStart'
import IcPlus from '../Icons/IcPlus'
import colors from '../../../styles/colors'
import IcBin from '../Icons/IcBin'
import RadioInput from '../Form/RadioInput/RadioInput'

const Gradient = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40px;
  width: 100%;
`
const Content = styled.div`
  max-width: 230px;
  max-height: 288px;
`

const Dropdown = ({ items, mode, handleClick, checked, customStyle }) => {
  const [inputValue, setInputValue] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [data, setData] = useState(items)
  const input = useRef(null)

  useEffect(() => {
    setData(items)
  }, [items])

  useEffect(() => {
    if (input && input.current) {
      input.current.focus()
    }
  }, [data])

  const handleCancelEdit = () => {
    const foo = [...data]
    foo.pop()
    setData(foo)
    setInputValue('')
    setEditMode(false)
  }

  const handleDelete = (e, i) => {
    e.preventDefault()
    e.stopPropagation()
    const foo = data.filter((el) => el.id !== i.id)
    setData(foo)
  }

  const onKeyDown = (e) => {
    e.preventDefault()
    // acciones para cuando termina de escribir en los items nuevos
    // la idea es que se vuelvan a traer los items con todo actualizado
    if (!e.target.value || e.key === 'Escape') {
      handleCancelEdit()
      return
    }

    const foo = data.filter((i, idx) => {
      if (!i.id) {
        i.id = idx + 1
        i.name = input.current.value
        i.default = 0
      }
      return i
    })
    setData(foo)
    setInputValue('')
    setEditMode(false)
  }

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const setType = (i) => {
    // segun el modo mostramos un tipo de informacion u otra
    switch (mode) {
      case 'checkbox':
        return (
          <EditableCheck
            label={i.name}
            checked={i.active}
            bgColor="#3FCBD9"
            borderColor="#22949B"
            onClick={() => handleClick(i)}
          />
        )
      case 'favorite': {
        if (i.id) {
          return (
            <div className="tw-flex tw-w-full tw-h-full tw-items-center">
              <div className="tw-mr-2">
                {/* usamos i.default para marcar el seleccionado */}
                {i.default ? (
                  <IcStart color={colors.primary} />
                ) : (
                  <IcStart color={colors.grey[800]} />
                )}
              </div>
              <div className="tw-flex tw-w-full tw-items-center tw-justify-between">
                <Paragraphs size="sm" className="tw-mt-1 tw-text-black">
                  {i.name}
                </Paragraphs>
                <div
                  className="tw-opacity-70"
                  onClick={(e) => handleDelete(e, i)}
                  aria-hidden
                >
                  <IcBin />
                </div>
              </div>
            </div>
          )
        }
        return (
          <>
            <input
              ref={input}
              className="tw-outline-none tw-text-sm"
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === 'Escape') && onKeyDown(e)
              }
              placeholder="Escribe y pulsa enter..."
              value={inputValue}
              onChange={onChange}
            />
          </>
        )
      }

      case 'radio': {
        return (
          <RadioInput
            label={i.name}
            secondary
            labelSize="sm"
            checked={i.name === checked}
          />
        )
      }

      case 'number': {
        return (
          <div className="tw-flex tw-w-full tw-items-center tw-justify-between">
            <Paragraphs size="sm">{i.name}</Paragraphs>
            <Paragraphs weight="bold" size="sm">
              {i.number}
            </Paragraphs>
          </div>
        )
      }

      default:
        return (
          <>
            {i.image && (
              <img src={Visa} width={35} className="tw-mr-2" alt={i.name} />
            )}
            {i.color && <div className="tw-w-3 tw-h-3 tw-mr-2"></div>}
            <Paragraphs size="sm" className="tw-mt-1">
              {i.name}
            </Paragraphs>
          </>
        )
    }
  }

  const addItem = (e) => {
    e.preventDefault()
    setEditMode(true)
    const foo = data.filter((i) => i)
    foo.push({})
    setData(foo)
  }

  return (
    <div
      onlay
      className="tw-shadow-md tw-bg-white Dropdown tw-absolute tw-w-9/12 tw-z-50"
      style={customStyle}
    >
      <Content
        id="xxx"
        name="xxx"
        className={`tw-bg-white tw-overflow-auto tw-w-full Dropdown tw-relative${
          data.length > 5 && 'tw-pb-6'
        }`}
      >
        {data.map((i, index) => (
          <div
            className="tw-px-6 tw-cursor-pointer"
            aria-hidden
            onClick={(e) => handleClick(e, i)}
            key={index}
          >
            <div className="tw-py-3 tw-w-full tw-border-b tw-flex tw-items-center tw-h-full tw-justify-between">
              <div className="tw-flex tw-items-center tw-w-full tw-text-black">
                {setType(i)}
              </div>
              <div>
                <Paragraphs
                  size="xxs"
                  weight="bold"
                  className="tw-text-primary tw-uppercase"
                >
                  {i.atajo}
                </Paragraphs>
              </div>
            </div>
          </div>
        ))}
        {mode === 'favorite' && !editMode && (
          <div
            aria-hidden
            className="add-item tw-px-6 tw-py-4 tw-flex tw-items-center tw-justify-between tw-cursor-pointer"
            onClick={(e) => addItem(e)}
          >
            <Paragraphs size="xs" weight="bold" className="tw-text-primary">
              Añadir nuevo
            </Paragraphs>
            <IcPlus size={12} />
          </div>
        )}
      </Content>
      {data.length > 5 && <Gradient />}
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.array,
  mode: PropTypes.oneOf(['normal', 'checkbox', 'favorite', 'radio', 'number']),
  handleClick: PropTypes.func,
  checked: PropTypes.bool,
  customStyle: PropTypes.object,
}

Dropdown.defaultProps = {
  items: [
    {
      id: 1,
      name: 'Visa',
      default: 1,
      color: 'blue',
    },
    {
      id: 2,
      name: 'Farmacia almacén',
      default: 0,
    },
  ],
  mode: 'favorite',
  handleClick: () => null,
}

export default Dropdown

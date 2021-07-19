import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'
import { Error } from './styles'
import Pins from '../Pins/Pins'
import Paragraphs from '../../Paragraphs/Paragraphs'

const PinInput = ({
  reference,
  error,
  type,
  inlineStyle,
  bgInput,
  size,
  title,
  required,
  name,
  disabled,
  description,
  onComplete,
  onChange,
  translation=true
}) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  useEffect(() => {
    onChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return (
    <div className="PinInput">
      <Pins
        type={type}
        inlineStyle={inlineStyle}
        size={size}
        onChange={setValue}
        bgInput={bgInput}
        title={title}
        required={required}
        disabled={disabled}
        autoComplete="new-password"
        onComplete={onComplete}
      />
      <div className="tw-hidden">
        <input
          ref={reference}
          name={name || 'pin'}
          value={value}
          onChange={() => null}
          autoComplete="new-passoword"
        />
      </div>
      {description && (
        <Paragraphs italic size="xxs" className="tw-text-gray-700 tw-pt-2">
          {t(`messages.${description}`)}
        </Paragraphs>
      )}
      <Error className="tw-text-red-600 tw-font-Atkinson-bold tw-pt-1">
        {error && translation ? t(`errors.${error}`) : error}
      </Error>
    </div>
  )
}

PinInput.propTypes = {
  type: PropTypes.oneOf(['password', 'text']),
  bgInput: PropTypes.bool,
  inlineStyle: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
  required: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  description: PropTypes.string,
  onComplete: PropTypes.func,
  onChange: PropTypes.func,
}

PinInput.defaultProps = {
  type: 'password',
  bgInput: true,
  size: 'small',
  required: true,
  onComplete: () => null,
  onChange: () => null,
}

export default PinInput





// import React, { useState, useEffect, useRef } from 'react'
// import { useTranslation } from 'react-i18next'

// import PropTypes from 'prop-types'
// import { Error, Input } from './styles'
// import Pins from '../Pins/Pins'
// import Paragraphs from '../../Paragraphs/Paragraphs'

// const PinInput = ({
//   reference,
//   error,
//   type,
//   inlineStyle,
//   bgInput,
//   size,
//   title,
//   required,
//   name,
//   disabled,
//   description,
//   onComplete,
//   onChange,
//   translation = true,
//   qty = 6,
// }) => {
//   const { t } = useTranslation()
//   const [value, setValue] = useState('')

//   const elements = Array.from({ length: qty }, () =>
//     Math.floor(Math.random() * 10),
//   )

//   const inputs = useRef({})
//   const onKeyPress = (event, index) => {
//     let data = ''
//     // Controlamos que pulsen tecla derecha y tecla izquierda
//     const { key, target } = event
//     if (Number(key)) {
//       inputs.current[index].value = key
//       const valores = Object.values(inputs.current) // valores = ["Scott", "Negro", true, 5];
//       for (let i = 0; i < valores.length; i++) {
//         data += valores[i].value
//       }
//       setValue(data)
//       if (index < elements.length - 1) inputs.current[index + 1].focus()
//     }
//   }

//   const onKeydown = (event, index) => {
//     // Controlamos que pulsen tecla derecha y tecla izquierda
//     const { key } = event
//     if (key === 'Backspace') {
//       if (inputs.current[index].value === '') {
//         if (index !== 0) {
//           inputs.current[index - 1].focus()
//         }
//       } else {
//         inputs.current[index].value = ''
//       }

//       let data = ''
//       const valores = Object.values(inputs.current)
//       for (let i = 0; i < valores.length; i++) {
//         if (i === index) {
//           data += inputs.current[index].value
//         } else data += valores[i].value
//       }
//       setValue(data)
//       return
//     }
//     if (key === 'ArrowRight' || key === 'ArrowLeft') {
//       if (key === 'ArrowRight' && index < elements.length - 1) {
//         inputs.current[index + 1].focus()
//         inputs.current[index + 1].select()
//       }
//       if (key === 'ArrowLeft' && index !== 0) {
//         inputs.current[index - 1].focus()
//       }
//     }
//   }

//   return (
//     <div className="PinInput">
//       <div className="tw-w-full tw-flex tw-justify-between">
//         <Paragraphs size="xs" weight="bold" className="tw-mb-1 tw-w-full">
//           {title && t(`labels.${title}`)}
//           {required && <span className="tw-text-alert">*</span>}
//         </Paragraphs>
//       </div>
//       <div className="tw-flex">
//         {elements.map((i, index) => (
//           <Input
//             onKeyPress={(evt) => onKeyPress(evt, index)}
//             onKeyDown={(evt) => onKeydown(evt, index)}
//             ref={(el) => (inputs.current[index] = el)}
//             className={`tw-bg-secondary tw-bg-opacity-10 tw-mx-1 tw-text-center tw-outline-none  ${
//               index === 0 && 'tw-ml-0 tw-mr-1'
//             } ${index === elements.length - 1 && 'tw-mr-0 tw-ml-1'}
//             tw-flex-1`}
//             maxLength={1}
//             minLength={1}
//             // max={1}
//             // min={1}
//             // onChange={(el) => onChangeInputPin(el, index)}
//             data-index={index}
//           />
//         ))}
//       </div>
//       {/* <Pins
//         type={type}
//         inlineStyle={inlineStyle}
//         size={size}
//         onChange={setValue}
//         bgInput={bgInput}
//         title={title}
//         required={required}
//         disabled={disabled}
//         autoComplete="new-password"
//         onComplete={onComplete}
//       /> */}
//       <div className="tw-hidden">
//         <input
//           ref={reference}
//           name={name || 'pin'}
//           value={value}
//           onChange={() => console.log('ass')}
//           autoComplete="new-passoword"
//         />
//       </div>
//       {description && (
//         <Paragraphs italic size="xxs" className="tw-text-gray-700 tw-pt-2">
//           {t(`messages.${description}`)}
//         </Paragraphs>
//       )}
//       <Error className="tw-text-red-600 tw-font-Atkinson-bold tw-pt-1">
//         {error && translation ? t(`errors.${error}`) : error}
//       </Error>
//     </div>
//   )
// }

// PinInput.propTypes = {
//   type: PropTypes.oneOf(['password', 'text']),
//   bgInput: PropTypes.bool,
//   inlineStyle: PropTypes.object,
//   size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
//   required: PropTypes.bool,
//   title: PropTypes.string,
//   disabled: PropTypes.bool,
//   description: PropTypes.string,
//   onComplete: PropTypes.func,
//   onChange: PropTypes.func,
// }

// PinInput.defaultProps = {
//   type: 'password',
//   bgInput: true,
//   size: 'small',
//   required: true,
//   onComplete: () => null,
//   onChange: () => null,
// }

// export default PinInput

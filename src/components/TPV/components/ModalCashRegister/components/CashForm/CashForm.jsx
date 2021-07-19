import React from 'react'
// import PropTypes from 'prop-types'
import InputGroup from '../../../../../commons/Form/InputGroup/InputGroup'
import TextInput from '../../../../../commons/Form/TextInput/TextInput'
import { Input, InputContent } from './styles'

const CashForm = ({ money, reference, onChangeText, reset }) => {
  // ONLY NUMBERS AND DOTS
  const validDigits = (s) => {
    const rgx = /^[0-9]*\.?[0-9]*$/
    return s.match(rgx)
  }

  return (
    <>
      <InputGroup
        title="Billetes"
        restore="Restaurar"
        onClick={() => reset()}
      />

      {money.map((m) => {
        if (m.type === 'bills') {
          return (
            <div className="tw-flex tw-justify-between tw-px-2">
              {m.component}
              <div className="tw-flex tw-w-full">
                <div className="tw-w-14 tw-mx-2">
                  <InputContent className="input tw-bg-secondary tw-bg-opacity-10 tw-px-2 tw-w-full tw-flex tw-justify-between tw-items-center">
                    <Input
                      onChange={(e) =>
                        validDigits(e.target.value) &&
                        onChangeText(m, e.target.value)
                      }
                      name={m.name}
                      className="tw-bg-transparent tw-outline-none tw-h-full tw-w-full"
                      ref={reference}
                      value={m.value}
                    />
                  </InputContent>
                </div>
                <div className="tw-w-full">
                  <TextInput
                    hideError
                    disabled
                    value={m.total}
                    alignRight
                    currency
                  />
                </div>
              </div>
            </div>
          )
        }
        return null
      })}
    </>
  )
}

export default CashForm

/* eslint-disable global-require */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'
import SelectDropdown from '../commons/Form/SelectDropdown/SelectDropdown'
import { useLanguage } from '../../infrastructure/Hooks/Languages/useLanguage'
import Dropdown from '../commons/Dropdown/Dropdown'
import Paragraphs from '../commons/Paragraphs/Paragraphs'
import IcArrowDown from '../commons/Icons/IcArrowDown'
import useListenerClose from '../../infrastructure/Hooks/useListenerClose'

const Languages = ({ label, noBackground, textColor, type }) => {
  const [unfold, setUnfold] = useState(false)
  const { t } = useTranslation()
  const { languages, selected, setSelectedLanguage } = useLanguage()

  const handleToggle = () => {
    setUnfold(false)
  }
  const { ref } = useListenerClose(handleToggle)

  const handleType = () => {
    switch (type) {
      case 'select':
        return (
          <Container className="Languages tw-relative tw-p-2 tw-px-4">
            <SelectDropdown
              label={label ? t('labels.Idioma') : null}
              items={languages}
              textColor={textColor}
              noBackground={noBackground}
              defaultValue={selected && (selected.name || selected.nombre)}
              selectAction={setSelectedLanguage}
              mode="normal"
            />
          </Container>
        )

      case 'hero':
        return (
          <div
            className="tw-relative"
            onClick={() => setUnfold(!unfold)}
            aria-hidden
            ref={ref}
          >
            <div className="tw-flex tw-items-center">
              <Paragraphs
                weight="bold"
                size="xs"
                className="tw-text-white tw-cursor-pointer"
              >
                {selected && (selected.name || selected.nombre)}
              </Paragraphs>
              <IcArrowDown size={20} />
            </div>
            {unfold && (
              <Dropdown
                items={languages || []}
                mode="normal"
                customStyle={{ right: -0, width: 100 }}
                handleClick={(e, i) => {

                  setSelectedLanguage(i)
                  setUnfold(!unfold)
                }}
              />
            )}
          </div>
        )

      default:
        return null
    }
  }

  return <>{handleType()}</>
}

Languages.propTypes = {
  label: PropTypes.string,
  noBackground: PropTypes.bool,
  textColor: PropTypes.string,
  type: PropTypes.string,
}

Languages.defaultProps = {
  type: 'select',
}

export default Languages

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IcUpload from '../../Icons/IcUpload'
import { Container } from './styles'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { useTranslation } from 'react-i18next'
import colors from '../../../../styles/colors'

const FileInput = ({ name, onChange, reference }) => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const handleChange = (event) => {
    const {
      target: {
        files: [file],
      },
    } = event
    if (file.size < 9281028) {
      onChange(event)
    } else {
      setError(true)
    }
  }
  return (
    <Container>
      <label
        htmlFor={name}
        className="label-input tw-flex tw-p-3 tw-justify-between tw-bg-white"
      >
        <div className="">
          <Paragraphs size="sm">
            {t('labels.Seleccionar un archivo')}
          </Paragraphs>
        </div>
        <div className="ic_icon">
          <IcUpload color={colors['primary']} />
        </div>
      </label>
      <div className="tw-hidden">
        <input
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          type="file"
          onChange={handleChange}
          ref={reference}
        />
      </div>
      {error && (
        <Paragraphs className="tw-text-alert">
          {t('labels.Maximo permitido 10MB')}
        </Paragraphs>
      )}

      <Paragraphs size="xxs" className="tw-mt-2">
        {t('labels.JPG o PNG Tamaño máximo 10MB')}
      </Paragraphs>
    </Container>
  )
}

FileInput.propTypes = {
  name: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
}

FileInput.defaultProps = {
  name: 'file-input',
  reference: () => null,
}

export default FileInput

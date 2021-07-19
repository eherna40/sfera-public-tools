import React from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Container } from './styles'
// TODO - check teh use of props fo the components
const TextInputButton = ({
  // error,
  // name,
  label,
  // size,
  leftText,
  rightText,
  leftTextColor,
  rightTextColor,
  // bgColor,
  // weight,
  border,
  rightWeight,
  leftWeight,
  leftUnderline,
  rightUnderline,
  onClick,
}) => {
  const { t } = useTranslation()
  return (
    <>
      {label && (
        <div className="label tw-mb-1">
          <Paragraphs size="xs" weight="bold">
            {t(`labels.${label}`)}
          </Paragraphs>
        </div>
      )}
      <Container
        onClick={onClick}
        border={border}
        className="tw-flex tw-flex-row tw-justify-between tw-content-center tw-flex-wrap"
      >
        <Paragraphs
          size="xs"
          weight={leftWeight}
          color={leftTextColor}
          underline={leftUnderline}
        >
          {leftText}
        </Paragraphs>
        <Paragraphs
          size="xs"
          weight={rightWeight}
          color={rightTextColor}
          underline={rightUnderline}
        >
          {t(`actions.${rightText}`)}
        </Paragraphs>
      </Container>
    </>
  )
}

export default TextInputButton

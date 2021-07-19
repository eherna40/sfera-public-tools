import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'

const CodeAndType = ({ code, type }) => (
  <div className="tw-flex tw-mt-3">
    <div className="tw-flex tw-mr-2">
      <div className="tw-text-grey-400">
        <Paragraphs className="tw-mr-1" size="xxs">
          Código:
        </Paragraphs>
      </div>
      <Paragraphs size="xxs" weight="bold">
        {code}
      </Paragraphs>
    </div>
    <div className="tw-flex">
      <div className="tw-text-grey-400">
        <Paragraphs className="tw-mr-1" size="xxs">
          Tipo:
        </Paragraphs>
      </div>
      <Paragraphs size="xxs" weight="bold">
        {type}
      </Paragraphs>
    </div>
  </div>
)

CodeAndType.propTypes = {
  code: PropTypes.string,
  type: PropTypes.string,
}

CodeAndType.defaultProps = {
  code: '15428.9',
  type: 'Receta',
}

export default CodeAndType

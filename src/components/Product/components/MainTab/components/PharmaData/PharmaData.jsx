import React from 'react'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'

const PharmaData = ({ product }) => (
  <div className="tw-my-4">
    <ul>
      {product?.datosFarmaceuticos.map((item, index) => (
        <li className="tw-mb-2" key={index}>
          <Paragraphs>
            <span className="tw-text-primary">&#9679;</span>{' '}
            {item?.valor.descripcion}
          </Paragraphs>
        </li>
      ))}
    </ul>
  </div>
)

export default PharmaData

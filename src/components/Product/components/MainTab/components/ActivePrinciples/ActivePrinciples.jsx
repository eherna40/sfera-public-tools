import React from 'react'
import Paragraphs from '../../../../../commons/Paragraphs/Paragraphs'

const ActivePrinciples = ({ product }) => (
  <div className="tw-my-4">
    <ul>
      {product.composicion.map((item, index) => (
        <li key={index} className="tw-mb-2">
          <Paragraphs>
            <span className="tw-text-primary">&#9679;</span>{' '}
            {item.activo.codigo_cas} - {item.activo.nombre}
          </Paragraphs>
        </li>
      ))}
    </ul>
  </div>
)

ActivePrinciples.propTypes = {}

export default ActivePrinciples

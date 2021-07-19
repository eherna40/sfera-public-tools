import React from 'react'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const Warnings = ({ product }) => (
  <div className="tw-my-4">
    <ul>
      {Object.keys(product).length &&
        product.advertencia.map((item) => (
          <li className="tw-mb-2" key={item.id}>
            <Paragraphs>
              <span className="tw-text-primary">&#9679;</span>
              {item.mensaje.descripcion}
            </Paragraphs>
          </li>
        ))}
    </ul>
  </div>
)

export default Warnings

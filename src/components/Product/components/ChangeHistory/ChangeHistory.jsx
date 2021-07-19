import React from 'react'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const ChangeHistory = ({ product }) => (
  <div className="tw-my-4">
    <ul>
      {product?.historicos?.map((item) => (
        <li key={item.id} className="tw-mb-2">
          <Paragraphs>
            <span className="tw-text-primary">&#9679;</span> {item.fecha} -{' '}
            {item.motivo.descripcion}
          </Paragraphs>
        </li>
      ))}
    </ul>
  </div>
)

export default ChangeHistory

import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import IcBin from '../Icons/IcBin'
import { Wrapper } from './styles'
import { useTranslation } from 'react-i18next'

const PseudoAggrid = ({ headers, rows, onDeleteRow }) => {
  const sortById = (array) => array.sort((a, b) => a.id - b.id)
  const sortedHeaders = sortById(headers)
  const {t} = useTranslation()
  return (
    <>
      {rows && rows.length ? (
        <Wrapper>
          <table className="tw-w-full tw-table-auto">
            <thead className="tw-text-left tw-text-white tw-bg-black">
              <tr className="">
                {sortedHeaders.map((el, index) => (
                  <th key={index} className="tw-px-4 tw-py-3">
                    <Paragraphs size="xs">{t(`labels.${el.name}`)}</Paragraphs>
                  </th>
                ))}
                <th className="tw-px-4 tw-py-2"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const sortedRow = sortById(row)
                return (
                  <tr key={index}>
                    {sortedRow.map((el, idx) => (
                      <td className="tw-pl-4 tw-py-2" key={idx}>
                        <Paragraphs size="xs">{el.data}</Paragraphs>
                      </td>
                    ))}
                    <td>
                      <div
                        className="tw-cursor-pointer tw-flex tw-items-center tw-justify-end tw-pr-2"
                        onClick={() => onDeleteRow(index)}
                        aria-hidden="true"
                      >
                        <IcBin size={22} />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Wrapper>
      ) : null}
    </>
  )
}

PseudoAggrid.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
  onDeleteRow: PropTypes.func,
}

PseudoAggrid.defaultProps = {
  headers: [
    { name: 'Nombre y apellidos', id: 1 },
    { name: 'Correo electrónico', id: 2 },
    { name: 'Teléfono móvil', id: 3 },
    { name: 'Rol', id: 4 },
  ],
  rows: [
    [
      { id: 1, data: 'Esteve López Garriga', type: 'Name' },
      { id: 2, data: 'esteve.lopez.garriga@gmail.com', type: 'Email' },
      { id: 3, data: '666 666 666', type: 'Phone' },
      { id: 4, data: 'Auxiliar farmacéutico', type: 'Rol' },
    ],
    [
      { id: 1, data: 'Don Farmacéutico', type: 'Name' },
      { id: 2, data: 'don.farmaceutico@gmail.com', type: 'Email' },
      { id: 3, data: '666 999 999', type: 'Phone' },
      { id: 4, data: 'Farmacéutico titular', type: 'Rol' },
    ],
  ],
  onDeleteRow: () => null,
}

export default PseudoAggrid

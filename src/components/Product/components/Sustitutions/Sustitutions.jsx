import React from 'react'
import Aggrid from '../../../Aggrid/Aggrid'
import { columns } from '../../../../infrastructure/Aggrid/columns/columns'

const Sustitutions = () => {
  const onGridReady = () => {
    const data = [
      {
        codigo: '378965',
        nombre: 'FRENADOL COMPLEX GDO 10 SOB. 600 MG',
        EAN: '5242369842',
        descripcion: '90 MG 30 CAPSULAS LIBERACIÓN',
      },
    ]
    return data
  }
  // En sustitutions está llegando un array vacío
  return (
    <div className="tw-my-4">
      <div aria-hidden="true" className="tw-h-96 tw-z-0">
        <Aggrid
          id="sustitutions"
          hasSidebar={false}
          onReady={onGridReady}
          columns={columns.sustitutions}
          rowModelType="clientSide"
        />
      </div>
    </div>
  )
}

export default Sustitutions

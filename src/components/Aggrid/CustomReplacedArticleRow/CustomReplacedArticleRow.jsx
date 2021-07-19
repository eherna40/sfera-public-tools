import React from 'react'

export const CustomReplacedArticleRow = (params) => {
  const columns = params.columnApi.columnDefs
  const headerSections = params.data.articulo_sustitucion
  if (!params.data?.articulo_sustitucion?.id) return null
  return (
    <div className="custom-gridRow">
      {columns.map((column) => (
        <div className="custom-gridRow__rows">
          {headerSections.includes(column.id) && column.descripcion}
        </div>
      ))}
    </div>
  )
}

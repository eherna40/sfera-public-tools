import React, { useState, useEffect } from 'react'
import Aggrid from '../Aggrid/Aggrid'

const LabGridTab = ({
  gridData,
  gridColumns,
  leftText,
  rightText,
  onClick,
  options,
}) => {
  const [gridApi, setGridApi] = useState(null)
  const onGridReady = async (params) => {
    setGridApi(params.api)
    return null
  }

  useEffect(() => {
    if (gridData && gridApi) {
      gridApi.setRowData(gridData)
    }
  }, [gridData, gridApi])

  return (
    <div className="tw-h-full">
      <Aggrid
        onReady={onGridReady}
        columns={gridColumns}
        id="labAddress"
        rowModelType="clientSide"
        height="300px"
        bottomBar={{
          title: leftText,
          shortcut: rightText,
          onClick,
        }}
        options={options}
      />
    </div>
  )
}

export default LabGridTab

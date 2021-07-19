import { useState, useEffect } from 'react'

export const useIofnet = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const getPageInfo = () => {
    setLoading(true)

    /* ejemplo de respuesta de la api

    columns: [
        {
            colId: -> columName,
            field: -> columName,
            headerName: -> columLabel,
            columnindex: -> columnIndex (los datos tendran que venir organizados por este campo),
            isCurrency(true/false): -> isCurrency,
            editable: -> isEditable(true/false),
            type(int, char, link): -> columnTypeName,
            width(number): -> columnDisplaySize,
            defaultWidth(number): -> columnDisplaySize,
            floatingFilter(true/false): -> isSearchable,
            hide(true/false): -> isHidden,
            sortable(true/false): true,
            sort(null, asc, desc): null,
            resizable(true/false): true,
            checkBoxSelection(true/false): columnTypeName === checkbox (true)
            columnsStyle(Object): -> columnStyle,
            pinned(left, right): left
            suppressMenu(true, false): false
        }
    ]

    */

    const columns = [
      {
        colId: 'nombre',
        field: 'nombre',
        headerName: 'Nombre',
        columnindex: 1,
        isCurrency: false,
        editable: true,
        type: 'text',
        width: 600,
        defaultWidth: 600,
        floatingFilter: true,
        hide: false,
        sortable: true,
        resizable: true,
        checkBoxSelection: true,
        columnsStyle: {},
        pinned: 'left',
        suppressMenu: false,
        checkboxSelection: true,
        // pinnedRowCellRenderer: 'customPinnedRowRenderer',
      },
      {
        colId: 'nombre3',
        field: 'nombre3',
        headerName: 'Nombre3',
        columnindex: 1,
        isCurrency: false,
        editable: true,
        type: 'text',
        width: 600,
        defaultWidth: 600,
        floatingFilter: true,
        hide: false,
        sortable: true,
        resizable: true,
        columnsStyle: {},
        pinned: 'left',
        suppressMenu: false,
        // pinnedRowCellRenderer: 'customPinnedRowRenderer',
      },
    ]
    setData({
      columns,
    })
  }

  return {
    getPageInfo,
    data,
    loading,
  }
}

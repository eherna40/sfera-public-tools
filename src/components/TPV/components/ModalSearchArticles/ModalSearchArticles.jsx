import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Draggable from '../../../Modal/Draggable/Draggable'
import { TPVContext } from '../../../../infrastructure/contexts/TPV/TPV'
import { columns } from '../../../../infrastructure/Aggrid/columns/columns'
import Aggrid from '../../../Aggrid/Aggrid'

const ModalSearchArticles = ({ toggle, onAccept }) => {
  const { t } = useTranslation()
  const [article, setarticle] = useState(null)
  const [gridApi, setGridApi] = useState(null)
  const [suggestedCell, setSuggestedCell] = useState(null)
  const { loading, filterArticles, insertLine, searchInput } = useContext(
    TPVContext,
  )

  useEffect(() => {
    // this use efect is part of the funtion navigateToNextCell
    if (suggestedCell && gridApi) {
      gridApi.forEachNode((node) => {
        if (node.rowIndex === suggestedCell.rowIndex && node && node.data) {
          node.setSelected(true)
          const { data } = node
          if (data) setarticle(data)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestedCell])

  const cellLoading = (params, message, colId = 'codigo') => {
    const { data, rowIndex } = params
    const rowNode = params.api.getRowNode(rowIndex)
    if (rowNode)
      rowNode.setData({
        ...data,
        [colId]: message,
      })
  }

  const onGridReady = async (params) => {
    setGridApi(params.api)
    return {
      func: filterArticles,
      name: 'filtrarArticulosPaginado',
    }
  }

  const onInsertline = (code, params) => {
    if (params) cellLoading(params, 'buscando articulo')
    // const reponseinsertLine = await insertLine(article.codigo)
    insertLine(code)
    // if (reponseinsertLine.success) onAccept()
    onAccept()
  }

  const onRowDoubleClicked = async (params) => {
    const { data } = params
    if (data && data.codigo) {
      onInsertline(article.codigo, params)
    }
  }

  const onCellKeyDown = async (params) => {
    const { event, data } = params
    if (event.keyCode === 13 && data && data.codigo) {
      onInsertline(article.codigo, params)
    }
  }

  const navigateToNextCell = (params) => {
    // this funtion belonw to the following link https://www.ag-grid.com/javascript-grid/row-selection/#example-selection-with-keyboard-arrow-keys
    // the change of the fution is under the foreach node. for some reason the funtion is seal
    // but allow to set a state. once this state is set the gridapi is avalible to use outside the funtion
    var suggestedNextCell = params.nextCellPosition
    var KEY_UP = 38
    var KEY_DOWN = 40
    var noUpOrDownKeyPressed = params.key !== KEY_DOWN && params.key !== KEY_UP
    if (noUpOrDownKeyPressed) {
      return suggestedNextCell
    }
    setSuggestedCell(suggestedNextCell)
    return suggestedNextCell
  }

  return (
    <Draggable
      toggle={toggle}
      padding={8}
      isMaximizable
      title={t('windowsHeaders.BUSCADOR DE ARTICULOS')}
      textSuccess={t('actions.Seleccionar')}
      size="xl"
      onAccept={async () => {
        const reponseinsertLine = await insertLine(article.codigo)
        if (reponseinsertLine.success) onAccept()
      }}
      loading={loading}
      disableAccept={!article}
    >
      <div aria-hidden="true" className="tw-h-96 tw-z-0">
        <Aggrid
          id="SearchArticles"
          searchBar
          onReady={onGridReady}
          hasSidebar
          rowModelType="serverSide"
          columns={columns.productsListing}
          rowSelection="single"
          defaultValue={searchInput}
          onRowDoubleClicked={onRowDoubleClicked}
          onRowSelected={(row) => {
            setarticle(row)
          }}
          options={[
            {
              id: 1,
              name: 'Ver ficha',
              // shortcut: 'ALT + 2',
              action: () => null,
            },
          ]}
          onCellKeyDown={onCellKeyDown}
          navigateToNextCell={navigateToNextCell}
        />
      </div>
    </Draggable>
  )
}

ModalSearchArticles.propTypes = {
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
}

ModalSearchArticles.defaultProps = {
  toggle: () => null,
  onAccept: () => null,
}
export default ModalSearchArticles

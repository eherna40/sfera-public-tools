import moment from 'moment'

export const currencyFormatter = (params) => {
  if (params.value || params.value === 0.0) {
    return `${params.value} €`
  }
  return ``
}

export const formatNumber = (number) =>
  number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

export const navigateToNextCell = (params, gridOptions) => {
  let previousCell = params.previousCellPosition
  const suggestedNextCell = params.nextCellPosition

  const KEY_UP = 38
  const KEY_DOWN = 40
  const KEY_LEFT = 37
  const KEY_RIGHT = 39

  switch (params.key) {
    case KEY_DOWN:
      previousCell = params.previousCellPosition
      // set selected cell on current cell + 1

      gridOptions.api.forEachNode((node) => {
        if (previousCell.rowIndex + 1 === node.rowIndex) {
          node.setSelected(true)
        }
      })
      return suggestedNextCell
    case KEY_UP:
      previousCell = params.previousCellPosition
      // set selected cell on current cell - 1
      gridOptions.api.forEachNode((node) => {
        if (previousCell.rowIndex - 1 === node.rowIndex) {
          node.setSelected(true)
        }
      })
      return suggestedNextCell
    case KEY_LEFT:
    case KEY_RIGHT:
      return suggestedNextCell
    default:
  }

  return null
}

export const onBtnExportDataAsCsv = (gridApi) => {
  gridApi.exportDataAsCsv({
    allColumns: true,
  })
}

export const onCellKeyDown = (gridApi, key, callback) => {
  const {
    event: { code },
  } = gridApi
  if ((code === 'Enter' && key === 'Enter') || code === 'NumpadEnter') {
    callback()
  }
}

const IcEreceta = require('../../assets/img/icons/ic_ereceta_sust_automatica.svg')

export const getAttributes = (attributes) => {
  const attributesArr = []
  attributes.map((itemAttrbiute) => {
    switch (itemAttrbiute) {
      case 'substituted':
        attributesArr.push(IcEreceta)
        break
      case 'pricelowered':
        attributesArr.push(IcEreceta)
        break
      case 'nostock':
        attributesArr.push(IcEreceta)
        break
      case 'reserved':
        attributesArr.push(IcEreceta)
        break
      default:
        return false
    }

    return false
  })
  return attributesArr
}

export const setFocusOnCell = (gridApi, length, cell) => {
  const row = cell ? length - 1 : length - 1
  gridApi.setFocusedCell(row, cell || 'codigo')
}

export const dateFormatter = (value, noHours, formater) => {
  if (noHours)
    return value ? moment(value).format(formater || 'DD-MM-YYYY') : ''
  return value ? moment(value).format(formater || 'DD-MM-YYYY HH:mm:ss') : ''
}

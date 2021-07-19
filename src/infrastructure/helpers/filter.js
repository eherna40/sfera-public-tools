/* eslint-disable */

import { dateFormatter } from './agGrid'
class Filter {
  static operators = {
    enumValues: [
      {
        name: 'EQ',
        description: 'Equal operator (`=`)',
        type: 'equals',
      },
      {
        name: 'NEQ',
        description: 'Not equal operator (`!=`)',
        type: 'notEqual',
      },
      {
        name: 'GT',
        description: 'Greater than operator (`>`)',
        type: 'greaterThan',
      },
      {
        name: 'GTE',
        description: 'Greater than or equal operator (`>=`)',
        type: 'greaterThanOrEqual',
      },
      {
        name: 'LT',
        description: 'Less than operator (`<`)',
        type: 'lessThan',
      },
      {
        name: 'LTE',
        description: 'Less than or equal operator (`<=`)',
        type: 'lessThanOrEqual',
      },
      {
        name: 'LIKE',
        description: 'Simple pattern matching (`LIKE`)',
        type: 'contains',
      },
      {
        name: 'LIKE',
        description: 'Simple pattern matching (`LIKE`)',
        type: 'startsWith',
      },
      {
        name: 'LIKE',
        description: 'Simple pattern matching (`LIKE`)',
        type: 'endsWith',
      },
      {
        name: 'NOT_LIKE',
        description: 'Negation of simple pattern matching (`NOT LIKE`)',
        type: 'notContains',
      },
      {
        name: 'IN',
        description: 'Whether a value is within a set of values (`IN`)',
      },
      {
        name: 'NOT_IN',
        description: 'Whether a value is not within a set of values (`NOT IN`)',
      },
      {
        name: 'BETWEEN',
        description: 'Whether a value is within a range of values (`BETWEEN`)',
        type: 'inRange',
      },
      {
        name: 'NOT_BETWEEN',
        description:
          'Whether a value is not within a range of values (`NOT BETWEEN`)',
      },
      {
        name: 'IS_NULL',
        description: 'Whether a value is null (`IS NULL`)',
      },
      {
        name: 'IS_NOT_NULL',
        description: 'Whether a value is not null (`IS NOT NULL`)',
      },
    ],
  }

  static setFilterModel = (_query, _filterModel, _debug = false) => {
    // eslint-disable-line

    const _query_filterModel = _query
    for (const i in _filterModel) {
      const _relationsFilterModel = i.split('.')
      try {
        if (!_filterModel[i].operator) {
          const _property_i = this.getOperator(_filterModel[i], _debug)
          if (_relationsFilterModel.length > 1) {
            if (_debug) {
              console.log({
                column: _relationsFilterModel[1],
                operator: _property_i.operator,
                value: _property_i.value,
              })
            }
            _query_filterModel[_relationsFilterModel[0]] = {
              column: _relationsFilterModel[1],
              operator: _property_i.operator,
              value: _property_i.value,
            }
          } else {
            _query_filterModel.where.AND.push({
              column: i,
              operator: _property_i.operator,
              value: _property_i.value,
            })
          }
        } else {
          const whereConditions = []
          const relationsConditions = []
          const model_j = {}
          for (const j in _filterModel[i]) {
            if (_filterModel[i][j].filter || _filterModel[i][j].dateFrom) {
              const _property_j = this.getOperator(_filterModel[i][j], _debug)

              if (_relationsFilterModel.length > 1) {
                relationsConditions.push({
                  column: _relationsFilterModel[1],
                  operator: _property_j.operator,
                  value: _property_j.value,
                })
              } else {
                whereConditions.push({
                  column: i,
                  operator: _property_j.operator,
                  value: _property_j.value,
                })
              }
            }
          }
          model_j[_filterModel[i].operator] = whereConditions
          if (_relationsFilterModel.length > 1) {
            _query_filterModel[_relationsFilterModel[0]] = {}
            _query_filterModel[_relationsFilterModel[0]][
              _filterModel[i].operator
            ] = relationsConditions
          }
          _query_filterModel.where.AND.push(model_j)
        }
      } catch (e) {
        console.log('FILTER: FilterModel - error:', e)
      }
    }
    if (_debug) {
      console.log('FILTER: FilterModel:', _query_filterModel)
    }
  }

  static setGroupFilterModel = (
    _query,
    rowGroupCols,
    groupKeys,
    _debug = false,
  ) => {
    const _query_rowGroupCols = _query
    const _groupBy = []
    const _rowGroupy = []
    rowGroupCols.forEach((property) => {
      _groupBy.push(property.field)
    })
    groupKeys.forEach((filterValue) => {
      const index = groupKeys.findIndex((i) => i === filterValue)
      const _rowGroup_ = {}
      _rowGroup_[_groupBy[index]] = {
        filterType: 'text',
        type: 'equals',
        filter: `${filterValue}`,
      }
      this.setFilterModel(_query_rowGroupCols, _rowGroup_)
      _rowGroup_.field = _groupBy[index]
      _rowGroupy.push(_rowGroup_)
    })

    if (groupKeys.length !== rowGroupCols.length) {
      // _query_rowGroupCols.groupBy = rowGroupCols[groupKeys.length].field;
      // TODO->
      const _relationsFilterModel = rowGroupCols[groupKeys.length].field.split(
        '.',
      )
      if (_relationsFilterModel.length > 1) {
        _query_rowGroupCols[_relationsFilterModel[0]] = {
          ..._query_rowGroupCols[_relationsFilterModel[0]],
          groupBy: rowGroupCols[groupKeys.length].field,
        }
        _query_rowGroupCols.groupBy = true
        if (_debug) {
          console.log(
            'FILTER: SearchBsetGroupFilterModelarModel:',
            _query_rowGroupCols[_relationsFilterModel[0]],
          )
        }
      } else if (_relationsFilterModel.length > 0) {
        _query_rowGroupCols.where.groupBy = _relationsFilterModel[0]
        _query_rowGroupCols.groupBy = true
        if (_debug) {
          console.log(
            'FILTER: SearchBsetGroupFilterModelarModel:',
            _query_rowGroupCols,
          )
        }
      }
    }
  }

  static getOperator = (property, _debug) => {
    try {
      const _operator = this.operators.enumValues.find(
        (i) => i.type === property.type,
      )
      let _value = null
      if (property.filterType === 'date') {
        return this.setDateSearhCalculator(
          property.dateFrom,
          property.dateTo,
          _operator,
        )
      } else if (
        property.type.toString() === 'contains' ||
        property.type.toString() === 'notContains'
      ) {
        _value = `%${property.filter}%`
      } else if (property.type.toString() === 'startsWith') {
        _value = `${property.filter}%`
      } else if (property.type.toString() === 'endsWith') {
        _value = `%${property.filter}`
      } else if (property.type.toString() === 'equals') {
        _value = `${property.filter}`
      } else if (property.type.toString() === 'notEqual') {
        _value = `${property.filter}`
      } else if (property.filterType === 'text') {
        _value = `${property.filter}%`
      } else if (property.filterType === 'number') {
        if (property.type.toString() === 'inRange') {
          _value = [property.filter, property.filterTo]
        } else {
          _value = property.filter
        }
      }

      if (!_operator.name || _value === undefined) {
        if (_debug) {
          console.log('FILTER: Operator:', null)
        }
        return null
      }
      if (_debug) {
        console.log('FILTER: Operator:', {
          operator: _operator.name,
          value: _value,
        })
      }
      return { operator: _operator.name, value: _value }
    } catch (e) {
      console.log('FILTER: Operator error:', e)
      return null
    }
  }

  static setSearchBarModel = (_query, value, searchModel, _debug = false) => {
    const _query_searchBarModel = _query
    const OR = searchModel.map((i) => {
      return {
        column: i.column,
        operator: i.operator,
        value,
      }
    })
    if (_debug) {
      console.log('FILTER: SearchBarModel:', OR)
    }
    _query_searchBarModel.where.AND.push({ OR })
  }

  static setOrderByModel = (_query, sortModel, _debug = false) => {
    _query.where.orderBy = sortModel.map((i) => {
      return {
        field: i.colId,
        order: i.sort.toString().toUpperCase(),
      }
    })

    if (_debug) {
      console.log('FILTER: setOrderByModel:', _query.where.orderBy)
    }
  }

  static isPaginator = (_request) => {
    try {
      if (_request.groupKeys && _request.groupKeys.length > 0) {
        return false
      }
      return true
    } catch {
      return true
    }
  }

  static query = (value, column, _debug = false) => {
    const _query = {
      where: { AND: [] },
    }
    const searchModel = {
      column,
      operator: 'LIKE',
      value,
    }
    if (_debug) {
      console.log('FILTER: SearchBarModel:', searchModel)
    }
    _query.where.AND.push(searchModel)
    return _query
  }

  static setSearchModel = (value, model, _debug = false) => {
    const OR = model.map((i) => ({
      column: i.column,
      operator: i.operator,
      value,
    }))

    const _query = {
      where: { AND: [{ OR }] },
    }

    if (_debug) {
      console.log('FILTER: setSearchModel:', _query)
    }
    return _query
  }

  static setModel = (reponse) =>
    reponse.map((i) => {
      if (i.agrupacion_columna && i.agrupacion_valor) {
        i[i.agrupacion_columna] = i.agrupacion_valor
        console.log(i)
      }
    })

  static FilterModel = (config, _gridApi) => {
    // FILTERS
    let filterModel = {}
    config.filters.map((i) => {
      if (i.operator === null) {
        filterModel = {
          ...filterModel,
          [i.key]: {
            type: i.condition1_type,
            filter: i.condition1_filter,
          },
        }
      } else {
        filterModel = {
          ...filterModel,
          [i.key]: {
            condition1: {
              filter: i.condition1_filter,
              filterType: i.condition1_filterType,
              type: i.condition1_type,
            },
            condition2: {
              filter: i.condition2_filter,
              filterType: i.condition2_filterType,
              type: i.condition2_type,
            },
            filterType: i.filterType,
            operator: i.operator,
          },
        }
      }
      return null
    })
    // GROUP ROW STATE
    const _rowGroup = []
    config.groups.map((j) => {
      _rowGroup.push({
        order: j.order,
        colId: j.colId,
      })
      return null
    })

    const sortRowGroup = _rowGroup.sort((a, b) => a.order - b.order)
    const rowGroupModel = sortRowGroup.map((i) => i.colId)
    return { filterModel, rowGroupModel }
  }

  static setDateSearhCalculator = (dateFrom, dateTo, operator) => {
    const startDay = '00:00:00'
    const endDay = '23:59:59'
    if (operator.name === 'EQ' || operator.name === 'NEQ') {
      return {
        operator: operator.name === 'EQ' ? 'BETWEEN' : 'NOT_BETWEEN',
        value: [
          `${dateFormatter(dateFrom, true, 'YYYY-MM-DD')} ${startDay}`,
          `${dateFormatter(dateFrom, true, 'YYYY-MM-DD')} ${endDay}`,
        ],
      }
    } else if (operator.name === 'GT' || operator.name === 'LT') {
      return {
        operator: operator.name,
        value: `${dateFormatter(dateFrom, true, 'YYYY-MM-DD')} ${
          operator.name === 'GT' ? startDay : endDay
        }`,
      }
    } else if (operator.name === 'BETWEEN') {
      return {
        operator: operator.name,
        value: [
          `${dateFormatter(dateFrom, true, 'YYYY-MM-DD')} ${startDay}`,
          `${dateFormatter(dateTo, true, 'YYYY-MM-DD')} ${endDay}`,
        ],
      }
    }
  }
}

export default Filter

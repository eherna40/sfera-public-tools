import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import IcButton from '../../../commons/Buttons/IcButton/IcButton'
import IcCloseBold from '../../../commons/Icons/IcCloseBold'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import IcFilter from '../../components/IcFilter/IcFilter'
import { Container, Icon, Input } from './styles'
// eslint-disable-next-line
import colors from '../../../../styles/colors'
import Button from '../../../commons/Buttons/Button/Button'
import ModalFilters from '../../components/ModalFilters'
import { useAggrid } from '../../../../infrastructure/Hooks/useAggrid'

const Items = ({ nombre, onClick, onDelete, hasPermissions }) => (
  <Container className="Filter-item tw-bg-grey-700 tw-rounded-full tw-flex tw-justify-between  tw-cursor-pointer tw-mt-3 tw-overflow-hidden">
    <div
      className="tw-flex tw-py-1 tw-pl-2 tw-items-center tw-flex-1"
      aria-hidden="true"
      onClick={onClick}
    >
      <Icon>
        <IcFilter />
      </Icon>
      <Paragraphs weight="regular" className="name-filter tw-pl-2">
        {nombre}
      </Paragraphs>
    </div>
    {hasPermissions && (
      <IcButton
        transparent
        size="small"
        icicon={<IcCloseBold color={colors.primary} size={8} />}
        onClick={onDelete}
      />
    )}
  </Container>
)

const FilterStats = (props) => {
  const {
    agGridReact: {
      props: { id, externalInput },
    },
    api,
    columnApi,
  } = props

  const { t } = useTranslation()
  const {
    getFilters,
    saveFilterGroupState,
    deleteFilterGroupState,
    hasPermissions,
    setFilterGroupState,
    error,
    setError,
  } = useAggrid(id)


  const { tables } = useSelector((state) => state.aggridReducer)
  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState([])

  const deleteFilters = (idFilter) => {
    deleteFilterGroupState(idFilter)
  }

  useEffect(() => {
    if (tables && tables[id] && tables[id].filters) {
      if (search !== '') {
        const foo =
          tables[id] &&
          tables[id].filters.filter((i) => i.nombre.includes(search) && i)
        setFilters(foo)
      } else {
        setFilters(tables[id].filters)
      }
    }
  }, [search, tables]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSetFilters = (data) => {
    if (getFilters(id).find((i) => i.nombre === data.filter)) {
      setError({
        success: false,
        code: '',
        message: t('labels.El nombre del filtro ya esta siendo usado'),
      })
    } else if (
      (externalInput.current && externalInput.current.value !== '') ||
      Object.keys(api.getFilterModel()).length > 0
    ) {
      setShowModal(false)
      saveFilterGroupState(
        data.filter,
        api.getFilterModel(),
        columnApi.getRowGroupColumns(),
        externalInput.current.value,
      )
    } else {
      setError({
        success: false,
        code: '',
        message: t('actions.La tabla no posee filtros para guardar'),
      })
    }
  }

  const toggleModal = () => {
    setError(null)
    setShowModal(!showModal)
  }

  const onFilter = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="FilterStats tw-flex tw-h-full tw-flex-col tw-p-5">
      <div className="input-filters tw-flex-1">
        {showModal && (
          <ModalFilters
            toggle={toggleModal}
            onAccept={handleSetFilters}
            error={error}
          />
        )}
        <Input
          type="search"
          autoComplete="off"
          className="tw-w-full tw-px-2"
          placeholder={t('placeholders.Buscar filtro')}
          value={search}
          onChange={onFilter}
        />
        <div className="items-list tw-py-4">
          {filters.map((i, idx) => (
            <Items
              {...i.filters}
              nombre={i.nombre}
              key={idx}
              hasPermissions={hasPermissions}
              onClick={() => {
                const {
                  rowGroup,
                  filterModel,
                  quicksearch,
                } = setFilterGroupState(i, api, columnApi)
                api.setQuickFilter(quicksearch)
                externalInput.current.value = quicksearch
                if (filterModel) api.setFilterModel(filterModel)
                if (rowGroup) columnApi.setRowGroupColumns(rowGroup)
              }}
              onDelete={() => {
                deleteFilters(i.id)
              }}
            />
          ))}
        </div>
      </div>
      <div className="filter-footer tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4">
        <div className="tw-flex tw-gap-4 tw-w-full">
          <Button
            label="Restaurar"
            backgroundColor="transparent"
            size="large"
            onClick={() => {
              api.setFilterModel(null)
              // gridOptions.onApplyExternalFilter(null)
              api.setQuickFilter(null)
              externalInput.current.value = ''
            }}
          />
          {hasPermissions && (
            <Button
              label="Guardar"
              primary
              size="large"
              onClick={() => setShowModal(true)}
            />
          )}
        </div>
        {/* <Button label="Restaurar filtros" backgroundColor="transparent" /> */}
      </div>
    </div>
  )
}

FilterStats.propTypes = {
  onClick: PropTypes.func,
}

export default FilterStats

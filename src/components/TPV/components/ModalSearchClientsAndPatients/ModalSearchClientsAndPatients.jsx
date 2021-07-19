import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Draggable from '../../../Modal/Draggable/Draggable'
import Aggrid from '../../../Aggrid/Aggrid'
import { columns } from '../../../../infrastructure/Aggrid/columns/columns'
import { TPVContext } from '../../../../infrastructure/contexts/TPV/TPV'
import ModalAddEditPatient from '../ModalAddEditPatient/ModalAddEditPatient'

const ModalSearchClientsAndPatients = ({ toggle, onAccept }) => {
  const { t } = useTranslation()
  const [client, setclient] = useState(null)
  const [gridApi, setGridApi] = useState(null)
  const [displayPatientModal, setDisplayPatientModal] = useState(false)
  const [suggestedCell, setSuggestedCell] = useState(null)
  const { loading, getclientlist, getClient } = useContext(TPVContext)

  useEffect(() => {
    // this use efect is part of the funtion navigateToNextCell
    if (suggestedCell && gridApi) {
      gridApi.forEachNode((node) => {
        if (node.rowIndex === suggestedCell.rowIndex && node && node.data) {
          node.setSelected(true)
          const { data } = node
          if (data) setclient(data)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestedCell])

  useEffect(() => {
    getclientlist()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onGridReady = async (params) => {
    setGridApi(params.api)
    return {
      func: getclientlist,
      name: 'filtrarClientesPacientesPaginado',
    }
  }

  const onRowDoubleClicked = async (params) => {
    const { data } = params
    if (data && data.id) {
      getClient(data)
    }
    onAccept()
  }

  const onCellKeyDown = async (params) => {
    const { event } = params
    if (event.keyCode === 13 && client && client.id) {
      getClient(client)
      onAccept()
    }
  }

  const toggleAddEditPatientModal = () =>
    setDisplayPatientModal(!displayPatientModal)

  const navigateToNextCell = (params) => {
    // this funtion belonw to the following link https://www.ag-grid.com/javascript-grid/row-selection/#example-selection-with-keyboard-arrow-keys
    // the change of the fution is under the foreach node. for some reason the funtion is seal
    // but allow to set a state. once this state is set the gridapi is avalible to use outside the funtion
    const suggestedNextCell = params.nextCellPosition
    const KEY_UP = 38
    const KEY_DOWN = 40
    const noUpOrDownKeyPressed =
      params.key !== KEY_DOWN && params.key !== KEY_UP
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
      title={t('windowsHeaders.BUSCADOR DE CLIENTES / PACIENTES')}
      textSuccess={t('actions.Seleccionar')}
      size="xl"
      onAccept={() => {
        getClient(client)
        onAccept()
      }}
      loading={loading}
      disableAccept={!client}
      disableDragging
    >
      {displayPatientModal && (
        <ModalAddEditPatient
          toggle={toggleAddEditPatientModal}
          clientId={client.id}
        />
      )}
      <div aria-hidden="true" className="tw-h-96 tw-z-0">
        <Aggrid
          id="SearchClientsAndPatients"
          searchBar
          onReady={onGridReady}
          hasSidebar
          rowModelType="serverSide"
          columns={columns.searchClientsAndPatients}
          rowSelection="single"
          onRowDoubleClicked={onRowDoubleClicked}
          onRowSelected={(row) => {
            setclient(row)
          }}
          options={[
            {
              id: 1,
              name: 'Editar ficha',
              shortcut: 'ALT + 1',
              action: () => {},
            },
            {
              id: 2,
              name: 'Clonar cliente',
              shortcut: 'ALT + 2',
              action: () => {},
            },
            {
              id: 2,
              name: 'Añadir Paciente',
              shortcut: 'ALT + 3',
              action: () => toggleAddEditPatientModal(),
            },
          ]}
          onCellKeyDown={onCellKeyDown}
          navigateToNextCell={navigateToNextCell}
          searchBarAutoFocus
        />
      </div>
    </Draggable>
  )
}

ModalSearchClientsAndPatients.propTypes = {
  toggle: PropTypes.func,
  onAccept: PropTypes.func,
}

ModalSearchClientsAndPatients.defaultProps = {
  toggle: () => null,
  onAccept: () => null,
}

export default ModalSearchClientsAndPatients

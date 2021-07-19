import React from 'react'
import './LoginWarehouseSelector.scss'
import { Modal, ModalBody } from 'reactstrap'
import SelectableWareHouseList from '../../commons/SelectableWareHouseList/SelectableWareHouseList'

const LoginWarehouseSelector = ({ isOpen, handleClose }) => {
  return (
    <Modal
      centered
      className="WarehouseSelector theme-purple"
      fade={false}
      isOpen={isOpen}
      size="md"
    >
      <ModalBody>
        <SelectableWareHouseList handleClose={handleClose} />
      </ModalBody>
    </Modal>
  )
}

export default LoginWarehouseSelector

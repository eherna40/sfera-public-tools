import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import Folder from '../Folder/Folder'
import ItemMenu from '../ItemMenu/ItemMenu'
import DrawableItem from '../DrawableItem/DrawableItem'
import ModalDelete from '../../../commons/ModalDelete/ModalDelete'
import { useMenu } from '../../../../infrastructure/Hooks/Menu/useMenu'
import ModalEdit from '../../../commons/ModalEdit/ModalEdit'
import { useTranslation } from 'react-i18next'

const Favorites = ({
  favorites,
  toggle,
  onMove,
  handleSetFavorite,
  onPress,
}) => {
  const [selected, setSelected] = useState(0)
  const [folderData, setFolderData] = useState({})
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState({ delete: false, edit: false })
  const {
    removeFolder,
    rmFolderLoading,
    updateFolder,
    updateFolderLoading,
  } = useMenu()
  const {t} = useTranslation()
  const handleRemoveFolder = async () => {
    setError(null)
    const res = await removeFolder(folderData.id)
    if (res.status) {
      setShowModal({ ...showModal, delete: false })
    } else {
      setError(...res.error)
    }
  }

  const handleUpdateFolder = async (name) => {
    setError(null)
    const res = await updateFolder(folderData.id, name)
    if (res.status) {
      setShowModal({ ...showModal, edit: false })
    } else {
      setError(...res.error)
    }
  }

  const toggleModal = (option, data) => {
    setFolderData(data)
    if (option === 'Eliminar') {
      setShowModal({ ...showModal, delete: !showModal.delete })
    }
    if (option === 'Editar') {
      setShowModal({ ...showModal, edit: !showModal.edit })
    }
  }
  return (
    <div className="Favorites">
      {showModal.delete && (
        <ModalDelete
          profile="carpeta"
          toggle={() => toggleModal('Eliminar')}
          onAccept={() => handleRemoveFolder()}
          loading={rmFolderLoading}
        >
          {t(`messages.¿Está seguro de que desea eliminar la carpeta?`)}
          <div className="tw-h-4 tw-pt-2">
            {error && (
              <Paragraphs className="tw-text-alert">{`ERROR: ${error.message}`}</Paragraphs>
            )}
          </div>
        </ModalDelete>
      )}
      {showModal.edit && (
        <ModalEdit
          toggle={() => toggleModal('Editar')}
          placeholder={folderData.name}
          onAccept={handleUpdateFolder}
          loading={updateFolderLoading}
        >
          <div className="tw-h-4 tw-pb-8">
            {error && (
              <Paragraphs className="tw-text-alert tw-text-center">{`ERROR: ${error.message}`}</Paragraphs>
            )}
          </div>
        </ModalEdit>
      )}
      <Paragraphs weight="bold" size="lg" className="tw-text-white tw-p-4">
        {t(`menus.Favoritos`)}
      </Paragraphs>
      <DndProvider backend={HTML5Backend}>
        {favorites.map((i, index) => (
          <Folder
            show={index !== 0}
            id={i.id}
            key={index}
            onClick={() => setSelected(selected === index ? 0 : index)}
            name={i.descripcion}
            open={index === 0 ? true : selected === index}
            toggle={toggleModal}
          >
            {i.favoritos &&
              i.favoritos.map((e, idx) => (
                <DrawableItem
                  margin={index !== 0}
                  onMove={onMove}
                  id={i.id}
                  fav={e}
                  key={idx}
                >
                  <ItemMenu
                    onPress={() => onPress(e.recurso)}
                    toggle={() => toggle(e, i)}
                    software={e.recurso?.software?.nombre || 'ERP Farmacia'}
                    fav={1}
                    options={false}
                    key={e.id}
                    id={e.id}
                    visible={e.recurso?.visible}
                    name={e.recurso?.nombre}
                    favorites={favorites}
                    handleSetFavorite={() =>
                      handleSetFavorite({ fav_id: e.id })
                    }
                  />
                </DrawableItem>
              ))}
          </Folder>
        ))}
      </DndProvider>
    </div>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  handleSetFavorite: PropTypes.func,
}

export default Favorites

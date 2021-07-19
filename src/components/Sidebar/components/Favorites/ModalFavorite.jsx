import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Draggable from '../../../Modal/Draggable/Draggable'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import SelectInput from '../../../commons/Form/SelectInput/SelectInput'
import IcCloseBold from '../../../commons/Icons/IcCloseBold'
import Footer from '../../../Modal/Draggable/Footer/Footer'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import colors from '../../../../styles/colors'

const ModalFavorite = ({
  size,
  toggle,
  id,
  nombre,
  inPortal,
  setFavorite,
  errorMessage,
  loading,
  favorites,
}) => {
  const [createFolder, setCreateFolder] = useState(false)
  const { register, handleSubmit } = useForm()
  const { t } = useTranslation()
  const handleSelectChange = (e) => {
    if (e.target.value === 'createFolder') {
      setCreateFolder(true)
    }
  }
  const getFolders = () => {
    const folders = []
    favorites.forEach((el) => {
      folders.push({ id: el.id, name: el.descripcion })
    })
    folders.push({ id: 'createFolder', name: 'Crear carpeta' })
    return folders
  }
  const onSubmit = (data) => {
    const input = { id, es_menu: false }
    if (data.folder) {
      input.carpeta_texto = data.folder
    } else {
      input.carpeta_id = data.carpeta
    }
    setFavorite(input)
  }
  return (
    <Draggable
      padding={3}
      title={t('windowsHeaders.Editar favoritos')}
      size={size}
      inPortal={inPortal}
      toggle={toggle}
      loading={false}
      footerComponent={() => null}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="tw-flex tw-flex-col tw-text-left tw-p-4"
        style={{ minHeight: '250px' }}
      >
        <div className="tw-flex tw-flex-col tw-flex-1">
          <TextInput label="Nombre" name="nombre" value={nombre} disabled />
          {createFolder ? (
            <div className="tw-flex tw-items-center">
              <TextInput
                autoFocus
                name="folder"
                label="Crear carpeta"
                placeholder="Escribe el nombre de la carpeta..."
                reference={register({
                  required: {
                    value: true,
                    message: 'Campo obligatorio',
                  },
                })}
              />
              <span
                onClick={() => setCreateFolder(false)}
                aria-hidden="true"
                className="tw-cursor-pointer tw-pl-4"
              >
                <IcCloseBold className="tw-cursor-pointer" color={colors.green[900]} size={14} />
              </span>
            </div>
          ) : (
            <div style={{ marginBottom: '5px' }}>
              <SelectInput
                label="Carpeta"
                items={getFolders()}
                onChange={handleSelectChange}
                reference={register}
                name="carpeta"
              />
            </div>
          )}
          <Paragraphs className="tw-flex tw-text-alert tw-items-center tw-justify-center tw-flex-1">
            <div className="tw-h-4 tw-mb-2">
              {errorMessage && `ERROR: ${errorMessage.message}`}
            </div>
          </Paragraphs>
        </div>
        <Footer
          type="submit"
          loading={loading}
          toggle={toggle}
          disabled={loading}
          onAccept={() => null}
        />
      </form>
    </Draggable>
  )
}

ModalFavorite.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  inPortal: PropTypes.bool,
  toggle: PropTypes.func,
  id: PropTypes.string,
  nombre: PropTypes.string,
  errorMessage: PropTypes.object,
  loading: PropTypes.bool,
  favorites: PropTypes.array,
}

ModalFavorite.defaultProps = {
  size: 'md',
  inPortal: false,
  toggle: () => null,
  loading: false,
}

export default ModalFavorite

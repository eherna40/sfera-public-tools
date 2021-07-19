import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputGroup from '../../../commons/Form/InputGroup/InputGroup'
import TextInput from '../../../commons/Form/TextInput/TextInput'
import Carousels from '../../../commons/Carousels/Carousels'
import { ProductsContext } from '../../../../infrastructure/contexts/Products/Products'
import Loader from '../../../commons/Loader/Loader'

const FormArticle = () => {
  const [photos, setPhotos] = useState(null)
  const {
    unlock,
    getArticleData,
    artLoading,
    artError,
    formArticleData,
    getPhotos,
  } = useContext(ProductsContext)
  const { register } = useForm()

  useEffect(() => {
    getArticleData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (formArticleData) {
      getPhotos(formArticleData.numero_registro).then((res) => {
        if (Array.isArray(res) && res.length > 0 && res[0].url) {
          setPhotos(res)
        }
      })
    }
  }, [formArticleData]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="tw-w-full tw-border tw-p-2 tw-relative">
      <InputGroup title="Artículo" />
      {artLoading && !formArticleData && (
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-z-40 tw-bg-white">
          <Loader />
        </div>
      )}
      {artError && (
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-z-40 tw-bg-white">
          Error
        </div>
      )}
      <div className="tw-p-2">
        {photos && photos.url && <Carousels images={photos} />}

        <div className="tw-pt-2 tw-mx-2">
          <TextInput
            reference={register}
            name="proveedor_predeterminado"
            hideError
            disabled={!unlock}
            label="Proveedor predeterminado"
            value={formArticleData?.proveedor?.descripcion || ''}
          />
          <TextInput
            reference={register}
            name="laboratorio"
            value={formArticleData?.laboratorio?.nombre || ''}
            hideError
            disabled={!unlock}
            label="Laboratorio"
          />
        </div>
      </div>
    </div>
  )
}

export default FormArticle

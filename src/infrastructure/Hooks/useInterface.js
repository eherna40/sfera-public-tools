import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PALETTES } from '../api/interfaz'
import { UPDATE_PHARACY } from '../api/pharmacy'
import { actionUpdatePharmacy } from '../redux/actions/user'
import useFlashMessage from './useFlashMessage'
import { useUploadFileImage } from './useUploadFileImage'

export const useInterface = () => {
  const dispatch = useDispatch()
  const [palettes, setPalettes] = useState([])
  const { farmacia } = useSelector((state) => state.userReducer)
  const [uploadImage] = useUploadFileImage('subirLogotipoFarmacia')
  const [loading, setLoading] = useState(false)
  const [groups, setGroups] = useState([])
  const { showMessage } = useFlashMessage()
  const { t } = useTranslation()

  const [updatePharmacy] = useMutation(UPDATE_PHARACY, {
    errorPolicy: 'all',
  })
  useQuery(GET_PALETTES, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: (data) => {
      const filterPalettes = []
      const filterGroups = []
      if (data && data.paletas && data.paletas.length > 0) {
        data.paletas.forEach((i) => {
          if (i.grupo) {
            if (farmacia.grupos) {
              const hasGroup = farmacia.grupos.find((g) => g.id === i.grupo.id)
              if (hasGroup) {
                filterGroups.push(i)
              }
            }
          } else {
            filterPalettes.push(i)
          }
        })
        setGroups(filterGroups)
        setPalettes(filterPalettes)
      }
    },
  })

  const updateImageLogotipo = async (imageToUpload) => {
    const { data } = await uploadImage({
      file: imageToUpload,
      name: 'farmacia',
    })
    if (data) {
      showMessage(
        'success',
        t('actions.Actualizar'),
        t('messages.Actualización realizada con éxito'),
      )
      return data.url_250
    }
    showMessage(
      'alert',
      t('actions.Actualizar'),
      t('messages.Error al actualizar'),
    )

    return null
  }

  const updatePaleta = async (paleta, groupToUpdate, imageToUpload) => {
    try {
      setLoading(true)
      let logo = farmacia?.logotipo?.url || farmacia?.grupoCorporativo?.logo
      if (imageToUpload) {
        const url = await updateImageLogotipo(imageToUpload)
        if (url) {
          logo = {
            url,
          }
        }
      }
      if (groupToUpdate) {
        farmacia.grupoCorporativo = groupToUpdate
      }
      farmacia.paleta = paleta
      farmacia.logotipo = logo
      updatePharmacy({
        variables: {
          id: farmacia.id,
          input: {
            email: farmacia.email,
            paleta_id: paleta.id,
          },
        },
      })
      dispatch(actionUpdatePharmacy(farmacia))
      setLoading(false)
      return true
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  return { palettes, groups, updatePaleta, loading }
}

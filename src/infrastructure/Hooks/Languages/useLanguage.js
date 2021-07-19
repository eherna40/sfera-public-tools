import { useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useMenu } from '../Menu/useMenu'
import { actionUpdateUser } from '../../redux/actions/user'

import { GET_LANGUAGES, CAMBIAR_IDIOMA } from '../../api/languages'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const { usuario, token } = useSelector((state) => state.userReducer)
  const [languages, setLanguageList] = useState(null)
  const [selected, setSelected] = useState(null)
  const { getMenus } = useMenu()

  const dispatch = useDispatch()

  const renameDataKeys = (data) =>
    data.map((language) => {
      if (language.nombre) {
        language.name = language.nombre
        delete language.nombre
      }
      return language
    })

  const [cambiarIdioma] = useMutation(CAMBIAR_IDIOMA, {
    errorPolicy: 'all',
    nextFetchPolicy: 'no-cache',
    fetchPolicy: 'no-cache',
  })

  const [getLanguages] = useMutation(GET_LANGUAGES, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      if (data.idiomasLogin) {
        if (!usuario.idioma) {
          const select = data.idiomasLogin.find(
            (i) => i.codigo === i18n.language,
          )
          setSelected(select)
        }
      }
      setLanguageList(renameDataKeys(data.idiomasLogin))
    },
  })

  const setSelectedLanguage = async (i) => {
    setSelected(i)
    dispatch(actionUpdateUser({ idioma: i }))
    i18n.changeLanguage(i.codigo)
    if (usuario.id) {
      await cambiarIdioma({
        variables: {
          idioma_iso: i.codigo,
        },
      }).then(() => {
        getMenus()
      })
    }
  }

  useEffect(() => {
    if (usuario.idioma) {
      setSelected(usuario.idioma)
      i18n.changeLanguage(usuario.idioma.codigo)
    }
    getLanguages()
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [usuario, token])

  return {
    languages,
    selected,
    setSelectedLanguage,
  }
}

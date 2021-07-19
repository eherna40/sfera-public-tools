import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { URL_FARMA_PEMIUM, URL_FARMA_PEMIUM_CODE } from '../api/login'
import { actionUpdateUser } from '../redux/actions/user'

const qs = require('qs')

export const useFarmaPremium = () => {
  const location = useLocation()
  const history = useHistory()

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.usuario)
  const urlFarmaPremium = useSelector(
    (state) => state.userReducer.usuario.urlFarmaPremium,
  )

  const updateUrl = (url) => {
    dispatch(
      actionUpdateUser(
        {
          id: user.id,
          urlFarmaPremium: url,
        },
        false,
      ),
    )
  }

  const [getPharmaPremiumUrl] = useMutation(URL_FARMA_PEMIUM, {
    errorPolicy: 'ignore',
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (data && data.obtenerAutologinFarmapremium) {
        updateUrl(data.obtenerAutologinFarmapremium.url)
      }
    },
  })

  const [getPharmaPremiumUrlWidthCode] = useMutation(URL_FARMA_PEMIUM_CODE, {
    errorPolicy: 'ignore',
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (data && data.callbackFarmapremium) {
        updateUrl(data.callbackFarmapremium.url)
      }
    },
  })

  useEffect(() => {
    const { search } = location
    const res = qs.parse(search)
    if (res && res['?code'] && res.state) {
      history.push('/')
      getPharmaPremiumUrlWidthCode({
        variables: {
          state: res.state,
          code: res['?code'],
        },
      })
    } else if (!urlFarmaPremium) getPharmaPremiumUrl()
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [location])

  return {
    getPharmaPremiumUrl,
    urlFarmaPremium,
    updateUrl,
  }
}

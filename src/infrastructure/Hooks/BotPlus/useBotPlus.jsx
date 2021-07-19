import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_DETAILS } from '../../api/products'
import { getPhotos } from '../../helpers/products'

export const useBotPlus = (id) => {
  const [product, setProduct] = useState({})
  const [err, setErr] = useState({})

  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    variables: { id },
    onCompleted: async ({ articuloBotPlus }) => {
      if (articuloBotPlus) {
        const img = await getPhotos(data.articuloBotPlus.numero_registro)
        debugger
        if (img) {
          data.articuloBotPlus.image = img[0].url
        }
        setProduct(data.articuloBotPlus)
        setErr(error)
      }
    },
  })
  return { product, err, loading }
}

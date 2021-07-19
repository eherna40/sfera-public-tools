import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_REPORT } from '../../api/PowerBI'
import { useGql } from '../useGql'

export const usePorwerBI = (id) => {
  const [get, { loading }] = useMutation(GET_REPORT, {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  })
  const { getError } = useGql()
  const [BI, setBI] = useState(null)
  const [error, setError] = useState(null)
  const getToken = async () => {
    try {
      const { data, errors } = await get({
        variables: {
          id,
        },
      })
      if (data && data.menuBI) {
        setBI(data.menuBI)
        return true
      }

      setError(getError(errors))
      return null
    } catch (err) {
      return null
    }
  }

  useEffect(() => {
    getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getToken, loading, error, BI }
}

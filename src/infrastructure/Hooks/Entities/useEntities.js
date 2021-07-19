import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'

import { LIST_ENTITIES } from '../../api/entidades'

function useEntities() {
  const [entities, setEntities] = useState([])
  // const [organismos, setOrganismos] = useState([])
  const [loading, setLoading] = useState(null)

  // const { loading: organismosLoading } = useQuery(LIST_ORGS, {
  //   errorPolicy: 'all',
  //   fetchPolicy: 'no-cache',
  //   nextFetchPolicy: 'no-cache',
  //   onCompleted: (data) => {
  //     const { listarOrganismos } = data
  //     if (listarOrganismos) setOrganismos(listarOrganismos)
  //   },
  // })

  const { loading: entitiesLoading, errors, refetch } = useQuery(
    LIST_ENTITIES,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      onCompleted: (data) => {
        const { listarEntidades } = data
        setEntities(listarEntidades)
      },
    },
  )
  useEffect(() => {
    if (entitiesLoading) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [entitiesLoading])
  return { entities, loading, errors, refetch }
}

export default useEntities

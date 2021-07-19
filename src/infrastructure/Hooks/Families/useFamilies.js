import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_FAMILY,
  CREATE_SUBFAMILY,
  CREATE_SUPERFAMILY,
  GET_FAMILIES,
  GET_SUPERFAMILIES,
  UPDATE_SUPERFAMILY,
  UPDATE_FAMILY,
  UPDATE_SUBFAMILY,
  DELETE_FAMILY,
} from '../../api/families'

const useFamilies = () => {
  const [loading, setLoading] = useState(false)
  const [superFamilies, setSuperFamilies] = useState({})
  const [families, setFamilies] = useState({})

  const {
    refetch: refetchSuperFamilies,
    data: superFamiliesData,
    loading: loadingSuperFamilies,
  } = useQuery(GET_SUPERFAMILIES, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })

  useEffect(() => {
    if (superFamiliesData) {
      setSuperFamilies(superFamiliesData.superFamilias)
    }
  }, [superFamiliesData, loadingSuperFamilies])

  const {
    refetch: refetchFamilies,
    data: familiesData,
    loading: loadingFamilies,
  } = useQuery(GET_FAMILIES, {
    errorPolicy: 'all',
    onCompleted: (data) => setFamilies(data.familias),
  })

  useEffect(() => {
    if (familiesData) {
      setFamilies(familiesData.familias)
    }
  }, [familiesData, loadingFamilies])

  const [updateSuper, { loading: loadingUpdateSuper }] = useMutation(
    UPDATE_SUPERFAMILY,
    {
      errorPolicy: 'all',
    },
  )

  const updateSuperFamily = async (id, input) => {
    const res = await updateSuper({ variables: { id, input } })
    if (res.errors) {
      return false
    }
    return true
  }

  const [update, { loading: loadingUpdate }] = useMutation(UPDATE_FAMILY, {
    errorPolicy: 'all',
  })

  const updateFamily = async (id, input) => {
    const res = await update({ variables: { id, input } })
    if (res.errors) {
      return false
    }
    return true
  }

  const [updateSub, { loading: loadingUpdateSub }] = useMutation(
    UPDATE_SUBFAMILY,
    {
      errorPolicy: 'all',
    },
  )

  const updateSubFamily = async (id, input) => {
    const res = await updateSub({ variables: { id, input } })
    if (res.errors) {
      return false
    }
    return true
  }

  const [createSuper, { loading: loadingCreateSuper }] = useMutation(
    CREATE_SUPERFAMILY,
    {
      errorPolicy: 'all',
    },
  )

  const createSuperFamily = async (input) => {
    const res = await createSuper({ variables: { input } })
    if (res.errors) {
      return false
    }
    return true
  }

  const [create, { loading: loadingCreate }] = useMutation(CREATE_FAMILY, {
    errorPolicy: 'all',
  })

  const createFamily = async (input) => {
    const res = await create({ variables: { input } })
    if (res.errors) {
      return false
    }
    return true
  }

  const [createSub, { loading: loadingCreateSub }] = useMutation(
    CREATE_SUBFAMILY,
    {
      errorPolicy: 'all',
    },
  )

  const createSubFamily = async (input) => {
    const res = await createSub({ variables: { input } })
    if (res.errors) {
      return false
    }
    return true
  }

  const [delFamily, { loading: loadingDelete }] = useMutation(DELETE_FAMILY, {
    errorPolicy: 'all',
  })

  const deleteFamily = async (id) => {
    const res = await delFamily({ variables: { id } })
    if (res.errors) {
      return false
    }
    return true
  }

  useEffect(() => {
    if (
      loadingUpdateSuper ||
      loadingCreateSuper ||
      loadingCreate ||
      loadingCreateSub ||
      loadingUpdate ||
      loadingUpdateSub ||
      loadingDelete
    ) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [
    loadingUpdateSuper,
    loadingCreateSuper,
    loadingCreate,
    loadingCreateSub,
    loadingUpdate,
    loadingUpdateSub,
    loadingDelete,
  ])

  return {
    loading,
    superFamilies,
    updateSuperFamily,
    families,
    createSuperFamily,
    createFamily,
    createSubFamily,
    updateFamily,
    updateSubFamily,
    deleteFamily,
    refetchSuperFamilies,
    refetchFamilies,
  }
}

export default useFamilies

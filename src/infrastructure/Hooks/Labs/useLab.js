import { useMutation, useLazyQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import {
  CREATE_LAB,
  EDIT_LAB,
  DELETE_LAB,
  GET_LAB,
  GET_LAB_LIST,
  CREATE_LAB_ADDRESSS,
  GET_LAB_ADDRESS_LIST,
  DELETE_LAB_ADDRESSS,
  CREATE_LAB_CONTACT,
  DELETE_LAB_CONTACT,
  GET_LAB_CONTACT_LIST,
} from '../../api/labs'
import { useGql } from '../useGql'
import useFlashMessage from '../useFlashMessage'

export const useLab = (id) => {
  const { showMessage } = useFlashMessage()
  const { getError } = useGql()
  const [lab, setLab] = useState(null)
  const [labAddressList, setLabAddressList] = useState(null)
  const [labContactList, setLabContactList] = useState(null)
  const [loading, setLoading] = useState(false)

  const [createLab, { loading: createLabLoading }] = useMutation(CREATE_LAB, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })

  const [editLab, { loading: editLabLoading }] = useMutation(EDIT_LAB, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })

  const [deleteLab, { loading: deleteLabLoading }] = useMutation(DELETE_LAB, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })

  const [getLab, { loading: getLabLoading }] = useLazyQuery(GET_LAB, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: ({ laboratorioP }) => {
      setLab(laboratorioP)
      if (laboratorioP.direcciones) {
        setLabAddressList(laboratorioP.direcciones)
      }
      if (laboratorioP.contactos) {
        setLabContactList(laboratorioP.contactos)
      }
    },
  })

  const [getListing, { loading: getListLoading }] = useMutation(GET_LAB_LIST, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })

  const [createLabAddress, { loading: createLabAddressLoading }] = useMutation(
    CREATE_LAB_ADDRESSS,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setLab(data)
      },
    },
  )

  const [deleteLabAddress, { loading: deleteLabAddressLoading }] = useMutation(
    DELETE_LAB_ADDRESSS,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
    },
  )

  const [getAddressList, { loading: getAddressListLoading }] = useLazyQuery(
    GET_LAB_ADDRESS_LIST,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      onCompleted: ({ laboratorioP }) => {
        if (laboratorioP.direcciones)
          setLabAddressList(laboratorioP.direcciones)
      },
    },
  )

  const [createLabContact, { loading: createLabContactLoading }] = useMutation(
    CREATE_LAB_CONTACT,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setLab(data)
      },
    },
  )

  const [deleteLabContact, { loading: deleteLabContactLoading }] = useMutation(
    DELETE_LAB_CONTACT,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
    },
  )

  const [getContactList, { loading: getContactListLoading }] = useLazyQuery(
    GET_LAB_CONTACT_LIST,
    {
      errorPolicy: 'all',
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      onCompleted: ({ laboratorioP }) => {
        if (laboratorioP.contactos) setLabContactList(laboratorioP.contactos)
      },
    },
  )

  const handleRemoveAddress = async (addressId) => {
    const { errors } = await deleteLabAddress({
      variables: {
        id: addressId,
      },
    })
    if (errors) {
      return showMessage(
        'alert',
        'Error al eliminar direccion',
        `${getError(errors) && getError(errors).message}`,
      )
    }
    return showMessage('success', `Se ha eliminado direccion con exito`)
  }

  const handleLabAddress = async (form) => {
    const { errors } = await createLabAddress({
      variables: {
        input: {
          laboratorio_id: id,
          ...form,
        },
      },
    })

    if (errors) {
      return showMessage(
        'alert',
        'Error al actualizar laboratorio',
        `${getError(errors) && getError(errors).message}`,
      )
    }
    return showMessage(
      'success',
      `Se ha añadido una nueva dirección al laboratorio`,
    )
  }

  const RefreshAddressList = async (labId = id) => {
    await getAddressList({
      variables: {
        id: labId,
      },
    })
  }

  const handleRemoveContact = async (addressId) => {
    const { errors } = await deleteLabContact({
      variables: {
        id: addressId,
      },
    })
    if (errors) {
      return showMessage(
        'alert',
        'Error al eliminar direccion',
        `${getError(errors) && getError(errors).message}`,
      )
    }
    return showMessage('success', `Se ha eliminado direccion con exito`)
  }

  const handleLabContact = async (form) => {
    const { errors } = await createLabContact({
      variables: {
        input: {
          laboratorio_id: id,
          ...form,
        },
      },
    })

    if (errors) {
      return showMessage(
        'alert',
        'Error al actualizar laboratorio',
        `${getError(errors) && getError(errors).message}`,
      )
    }
    return showMessage(
      'success',
      `Se ha añadido una nueva dirección al laboratorio`,
    )
  }

  const RefreshContactList = async (labId = id) => {
    await getContactList({
      variables: {
        id: labId,
      },
    })
  }

  const handleForm = async (form) => {
    if (id) {
      const { errors } = await editLab({
        variables: {
          id,
          input: form,
        },
      })
      if (errors) {
        return showMessage(
          'alert',
          'Error al actualizar laboratorio',
          `${getError(errors) && getError(errors).message}`,
        )
      }
    }
    if (!id) {
      const { errors } = await createLab({
        variables: { input: form },
      })
      if (errors) {
        return showMessage(
          'alert',
          'Error al crear laboratorio',
          `${getError(errors) && getError(errors).message}`,
        )
      }
    }

    return showMessage(
      'success',
      `Se ha ${id ? 'editado' : 'creado'} laboratorio`,
    )
  }

  useEffect(() => {
    if (id) {
      getLab({
        variables: { id },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (
      createLabLoading ||
      editLabLoading ||
      deleteLabLoading ||
      getLabLoading ||
      getListLoading ||
      createLabAddressLoading ||
      deleteLabAddressLoading ||
      getAddressListLoading ||
      createLabContactLoading ||
      deleteLabContactLoading ||
      getContactListLoading
    ) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    createLabLoading,
    editLabLoading,
    deleteLabLoading,
    getLabLoading,
    getListLoading,
    createLabAddressLoading,
    deleteLabAddressLoading,
    getAddressListLoading,
    createLabContactLoading,
    deleteLabContactLoading,
    getContactListLoading,
  ])

  return {
    lab,
    deleteLab,
    getListing,
    loading,
    handleForm,
    labAddressList,
    RefreshAddressList,
    handleLabAddress,
    handleRemoveAddress,
    labContactList,
    getAddressList,
    handleLabContact,
    handleRemoveContact,
    RefreshContactList,
  }
}

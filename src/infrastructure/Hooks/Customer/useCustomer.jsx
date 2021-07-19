import { useLazyQuery, useMutation } from '@apollo/client'
// import { parse } from 'postcss'
import { useState, useEffect } from 'react'
// import { cust } from '../../../pages/Customers/Profile/data'
import {
  CREATE_CLIENT,
  GET_PROFILE_CLIENT,
  UPDATE_CUSTOMER,
  CREATE_PATIENT,
  GET_LISTING_CLIENT,
  DELETE_CLIENT,
} from '../../api/customers'
import useFlashMessage from '../useFlashMessage'
// import { formatCustomer } from '../../helpers/formatData'
// import { isEmail } from '../../helpers/validators'

export default function useCustomer() {
  const { showMessage } = useFlashMessage()
  const [customer, setCustomer] = useState({})
  const [customerVirtualDom, setCustomerVirtualDom] = useState({})
  const [modifications, setModifications] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeRow, setActiveRow] = useState(null)
  const [getCustomerList] = useMutation(GET_LISTING_CLIENT, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  })

  const [get, { loading: loadingGet }] = useLazyQuery(GET_PROFILE_CLIENT, {
    fetchPolicy: 'no-cache',
    onCompleted: ({ cliente }) => {
      setCustomer(cliente)
      setCustomerVirtualDom(cliente)
    },
  })
  const [create, { loading: loadingCreate, error: errorCreate }] = useMutation(
    CREATE_CLIENT,
  )
  const [createClientPatient, { loading: loadingCreatePatient }] = useMutation(
    CREATE_PATIENT,
  )
  const [update, { loading: loadingUpdate }] = useMutation(UPDATE_CUSTOMER)
  const [deleteClient, { loading: loadingDelete }] = useMutation(DELETE_CLIENT)

  useEffect(() => {}, [errorCreate])

  useEffect(() => {
    if (
      loadingGet ||
      loadingCreate ||
      loadingUpdate ||
      loadingCreatePatient ||
      loadingDelete
    ) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [
    loadingGet,
    loadingCreate,
    loadingUpdate,
    loadingCreatePatient,
    loadingDelete,
  ])

  const getCustomer = (id) => {
    get({ variables: { id } })
  }

  const getCustomers = async (first, page) => {
    try {
      const { data: customerData } = await getCustomerList({
        variables: { first, page },
        fetchPolicy: 'no-cache',
      })
      if (customerData) {
        return customerData.filtrarClientesPaginado.data
      }
      return {
        error: null,
      }
    } catch (err) {
      return {
        error: null,
        err,
      }
    }
  }

  // console.log('customer', customer)
  // console.log('virtual dom', customerVirtualDom)

  const createCustomer = async (formData) => {
    formData.localidad_id = Number(formData.localidad_id)

    // Campos que no se aceptan a la hora de crear el usuario, dan error de graphQL
    delete formData.id
    delete formData.usuarioAlta
    delete formData.credito_maximo
    delete formData.localidad
    delete formData.pais
    delete formData.puntos
    delete formData.saldo
    delete formData.tarjeta_fidelizacion
    delete formData.tipo_cliente
    delete formData.provincia

    try {
      const res = await create({
        variables: {
          input: {
            ...formData,
          },
        },
      })
      getCustomers(9999, 1)
      getCustomer(res.data.crearCliente.id)
      return true
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      return false
    }
  }
  const deleteCustomer = async (customerId) => {
    try {
      const res = await deleteClient({
        variables: {
          id: customerId,
        },
      })
      return !!res.data.borrarCliente
    } catch (err) {
      return err
    }
  }

  const updateCustomer = async (id, input) => {
    delete input.created_at
    delete input.id
    delete input.usuarioAlta
    input.localidad_id = Number(input.localidad_id)
    try {
      const res = await update({
        variables: {
          id,
          input: { ...input },
        },
      })
      if (res.data) {
        setCustomer(res.data.actualizarCliente)
        setCustomerVirtualDom(res.data.actualizarCliente)
        return true
      }
      return false
    } catch (err) {
      return err
    }
  }

  const createPatient = async (inputs) => {
    // some fields are not accepted
    inputs.codigo = Math.random()
    inputs.domicilio = `${inputs.via}, ${inputs.nombre_direccion}, ${inputs.numero}`
    inputs.localidad_id = inputs.codigo_postal
    inputs.es_pensionista = Boolean(inputs.es_pensionista)
    delete inputs.correo_electronico
    delete inputs.apellidos
    delete inputs.pais
    delete inputs.numero
    delete inputs.provincia
    delete inputs.nombre_direccion
    delete inputs.via
    delete inputs.poblacion
    delete inputs.codigo_postal

    await createClientPatient({
      variables: {
        input: {
          ...inputs,
        },
      },
    })
    
    return true
  }

  const compareCustomers = () => {
    if (JSON.stringify(customer) !== JSON.stringify(customerVirtualDom)) {
      setModifications(true)
    } else {
      setModifications(false)
    }
  }

  useEffect(() => {
    compareCustomers()
  }, [customerVirtualDom])

  const handleModification = (key, value) => {
    const editedValue = { [key]: value }
    setCustomerVirtualDom({ ...customerVirtualDom, ...editedValue })
  }

  const dismissChanges = () => {
    setCustomerVirtualDom(customer)
    setCustomer({ ...customer })
  }

  const handleMessage = (mode, description, title) => {
    showMessage(mode, description, title)
  }

  return {
    loading,
    getCustomer,
    getCustomers,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    setActiveRow,
    activeRow,
    createPatient,
    customer,
    setCustomer,
    handleModification,
    modifications,
    dismissChanges,
    handleMessage,
    customerVirtualDom,
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import useCustomer from '../../Hooks/Customer/useCustomer'

const CustomerContext = React.createContext()

const CustomerProvider = ({ children }) => {
  const {
    aggridData,
    createCustomer,
    getCustomers,
    getCustomer,
    deleteCustomer,
    updateCustomer,
    customer,
    setCustomer,
    loading,
    handleModification,
    modifications,
    dismissChanges,
    handleMessage,
    customerVirtualDom,
  } = useCustomer()

  return (
    <CustomerContext.Provider
      value={{
        aggridData,
        getCustomers,
        createCustomer,
        getCustomer,
        deleteCustomer,
        updateCustomer,
        customer,
        setCustomer,
        loading,
        handleModification,
        modifications,
        dismissChanges,
        handleMessage,
        customerVirtualDom,
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

CustomerContext.propTypes = {
  children: PropTypes.node,
}

export { CustomerContext, CustomerProvider }

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation, useLazyQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_ALL_WAREHOUSES,
  SELECT_WAREHOUSE,
  UPDATE_WAREHOUSE,
} from '../../api/warehouse'
import {
  actionUpdateUser,
  actionUpdateWarehousesSuccess,
} from '../../redux/actions/user'
import { useGql } from '../useGql'
import useFlashMessage from '../useFlashMessage'
import { useMenu } from '../Menu/useMenu'

export const useWarehouse = () => {
  const { t } = useTranslation()
  const { getError } = useGql()
  const { showMessage } = useFlashMessage()
  const { getMenus } = useMenu()
  const warehouseList = useSelector((state) => state.userReducer.almacenes)
  const [loading, setLoading] = useState(false)
  const selectedWarehouse = useSelector(
    (state) => state.userReducer.usuario.almacenLogueado,
  )
  const {
    usuario: { id: currentUserId },
  } = useSelector((state) => state.userReducer)

  const dispatch = useDispatch()

  const [
    getWarehouses,
    { data: fetchWarehouseListResponse, loading: getWarehousesLoading },
  ] = useLazyQuery(GET_ALL_WAREHOUSES, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    errorPolicy: 'all',
  })

  const [selectWarehouse, { loading: selectWarehouseLoading }] = useMutation(
    SELECT_WAREHOUSE,
    {
      errorPolicy: 'all',
      onCompleted: () => getMenus(),
    },
  )

  const [updateWarehouse, { loading: updateWarehouseLoading }] = useMutation(
    UPDATE_WAREHOUSE,
    {
      errorPolicy: 'all',
      onError: (errors) => {
        showMessage(
          'alert',
          'No se han podido guardar los cambios',
          `${getError(errors) && getError(errors).message}`,
        )
      },
    },
  )

  const setSelectedWarehouse = async (warehouse) => {
    const { data, errors } = await selectWarehouse({
      variables: {
        id: warehouse.id,
      },
    })
    if (!errors) {
      const {
        cambiarAlmacen: { almacenLogueado },
      } = data

      dispatch(
        actionUpdateUser({
          id: currentUserId,
          almacenLogueado,
        }),
      )
      return { success: true }
    }
    showMessage(
      'alert',
      'No se pudo cambiar de Almacen',
      `${getError(errors) && getError(errors).message}`,
    )

    return {
      success: false,
    }
  }

  const saveWarehouseChanges = (changedWarehouse) => {
    Promise.all(
      changedWarehouse.map(({ id, ...warehouseData }) =>
        updateWarehouse({
          variables: {
            id,
            input: {
              ...warehouseData,
            },
          },
        }),
      ),
    ).then((responses) => {
      const responseExeption = responses.find(({ errors }) => !!errors)
      if (!responseExeption) {
        dispatch(actionUpdateWarehousesSuccess(changedWarehouse))
        showMessage(
          'success',
          '',
          t('messages.Actualización realizada con éxito'),
        )
      } else {
        showMessage(
          'alert',
          t('messages.Error al actualizar almacén'),
          `${
            getError(responseExeption.errors) &&
            getError(responseExeption.errors).message
          }`,
        )
      }
    })
  }

  useEffect(() => {
    if (fetchWarehouseListResponse) {
      const {
        almacenes: { data },
      } = fetchWarehouseListResponse
      dispatch(actionUpdateWarehousesSuccess(data))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchWarehouseListResponse])

  useEffect(() => {
    if (
      selectWarehouseLoading ||
      getWarehousesLoading ||
      updateWarehouseLoading
    ) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [selectWarehouseLoading, getWarehousesLoading, updateWarehouseLoading])

  return {
    loading,
    getWarehouses,
    warehouseList,
    selectedWarehouse,
    saveWarehouseChanges,
    setSelectedWarehouse,
  }
}

export const warehouseHelpers = {
  format: (data) => ({
    ...data,
    nombre: data.nombre || '',
    color: data?.color || '#000',
  }),

  // FUNCION QUE FORMATEA LOS ALMACENES CON LOS ERRORES
  formatWarehouses: (data) => {
    const warehouses = []
    data.forEach((item) => {
      const warehouse = warehouseHelpers.format(item)
      warehouses.push(warehouse)
    })

    return warehouses
  },
}

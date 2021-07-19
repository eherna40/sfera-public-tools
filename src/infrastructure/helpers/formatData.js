const formatUserRol = (data) => {
  if (!data) {
    return {
      description: 'Usuarios con todos los permisos',
      id: '1',
      name: 'Super Administrador',
    }
  }
  return {
    description: data.description,
    id: data.id,
    name: data.nombre,
  }
}

const getInitalsName = (name) => {
  const initials = name.split(' ')
  if (initials.length > 0) {
    if (initials.length === 1) {
      return `${initials[0][0]}${initials[0][1]}`
    }
    return `${initials[0][0]}${initials[1][0]}`
  }

  return '--'
}

export const fromatWarehouse = (data) => {
  if (data) {
    return {
      color: data.color ? data.color.color : 'purple',
      id: data.id,
      name: data.nombre,
    }
  }

  return {
    color: 'purple',
    name: '-',
    id: null,
  }
}

const formatLanguage = (data) => {
  if (!data?.idioma) {
    return {
      id: '1',
      name: 'Español',
      code: 'es',
    }
  }
  return {
    id: data.id,
    name: data.nombre,
    code: data.codigo,
  }
}

export const fromatSession = (data, warehouses = null) => {
  try {
    const { sesion } = data
    // eslint-disable-next-line prefer-const
    let { tabs, activeTab } = JSON.parse(sesion)

    if (tabs && warehouses) {
      tabs = tabs.filter((i) => {
        const variable = i
        const warehouse = warehouses.find(
          (e) => e.id === variable.loggedWarehouse.id,
        )
        variable.loggedWarehouse.color = warehouse.color

        if (activeTab.id === variable.id) {
          activeTab = variable
        }
        return i
      })
    }
    return {
      sessionTabs: {
        tabs: tabs || [],
        activeTab: activeTab || null,
      },
    }
  } catch (error) {
    return {
      sessionTabs: {
        tabs: [],
        activeTab: null,
      },
    }
  }
}

export const formatSettings = (data) => {
  try {
    const {
      data: { usuarioTablaConfiguracionesByTablas },
    } = data
    const settingsTables = {}
    usuarioTablaConfiguracionesByTablas.map((i) => {
      settingsTables[i.tabla] = { filters: [], settings: {} }
      if (i.configuraciones && i.configuraciones.filtros) {
        settingsTables[i.tabla].filters = i.configuraciones.filtros.map((j) => {
          try {
            return {
              id: j.id,
              name: j.nombre,
              type: j.tipo,
              table: j.tabla,
              color: j.color,
              value: JSON.parse(j.valor),
            }
          } catch (Exception) {
            return Exception
          }
        })
      }

      if (
        i.configuraciones.configuracion &&
        i.configuraciones.configuracion.length > 0
      ) {
        settingsTables[i.tabla].settings = {
          id: i.configuraciones.configuracion[0].id,
          name: i.configuraciones.configuracion[0].nombre,
          type: i.configuraciones.configuracion[0].tipo,
          table: i.configuraciones.configuracion[0].tabla,
          color: i.configuraciones.configuracion[0].color,
          value: JSON.parse(i.configuraciones.configuracion[0].valor),
        }
      }
      return false
    })
    return { tables: settingsTables }
  } catch (error) {
    return { tables: {} }
  }
}

export const formatUser = (data, warehouses = null) => {
  const language = formatLanguage(data.idioma)
  const userRol = formatUserRol(data.usuarioRol)
  const warehouse = fromatWarehouse(data.almacenLogueado)
  const session = fromatSession(data.sesion, warehouses)
  // const settings = formatSettings(null)

  return {
    language,
    id: data.id,
    name: data.nombre,
    nickname: data.nickname,
    userRol,
    warehouse,
    email: data.email,
    dni: data.dni,
    initials: getInitalsName(data.nombre),
    session,
    // settings,
  }
}

export const formatLanguages = (data) => {
  if (Array.isArray(data)) {
    return []
  }

  return []
}

export const formatWarehouses = (data) => {
  const warehouses = []
  if (Array.isArray(data)) {
    data.forEach((i) => {
      const warehouse = fromatWarehouse(i)
      warehouses.push(warehouse)
    })
  }

  return warehouses
}

export const formatfilterTable = (input) => ({
  nombre: input.name,
  descripcion: `${input.table}_${input.name}`,
  tipo: input.type,
  tabla: input.table,
  color: input.color,
  valor: JSON.stringify(input.value),
})
// const { filters, settings } = data
// const filterTable = []
// const settingsTable = {}
// filters.forEach((i) => {
//   filterTable.push({
//     id: i.id,
//     color: i.color,
//     value: { ...JSON.parse(i.value) },
//     name: i.name,
//     table: i.table,
//     type: i.type,
//   })
// })
// if (Object.keys(settings).length > 1) {
//   settingsTable.id = settings.id
//   settingsTable.table = settings.table
//   settingsTable.value = { ...JSON.parse(settings.value) }
//   settingsTable.type = settings.type
// }
// return {
//   filters: filterTable.filter((i) => i !== undefined),
//   settings: settingsTable,
// }

export const formatCustomer = (data) => {
  // console.log('data formatCustomer', data)
  let balance = 0
  let newData = {}
  if (data && data.clienteCuenta) {
    balance = data.clienteCuenta ? data.clienteCuenta.saldo : 0
  }

  newData = {
    cip: data.cip || '',
    nombre: data.nombre || '',
    domicilio: data.domicilio || '',
    localidad_id: data.localidad_id || 1,
    email: data.email || '',
    fecha_nacimiento: data.fecha_nacimiento || '',
    telefono1: data.telefono1 || '',
    telefono2: data.telefono2 || '',
    telefono_movil: data.telefono_movil || '',
    balance,
    id: data.id,
    nif: data.nif,
  }

  if (data.pacientes.length !== 0) {
    newData.paciente = { ...data.pacientes[0] }
  }

  // console.log('newData: ', newData)

  return newData
}

export const operators = {
  enumValues: [
    {
      name: 'EQ',
      description: 'Equal operator (`=`)',
      type: 'equals',
    },
    {
      name: 'NEQ',
      description: 'Not equal operator (`!=`)',
      type: 'notEqual',
    },
    {
      name: 'GT',
      description: 'Greater than operator (`>`)',
      type: 'greaterThan',
    },
    {
      name: 'GTE',
      description: 'Greater than or equal operator (`>=`)',
      type: 'greaterThanOrEqual',
    },
    {
      name: 'LT',
      description: 'Less than operator (`<`)',
      type: 'lessThan',
    },
    {
      name: 'LTE',
      description: 'Less than or equal operator (`<=`)',
      type: 'lessThanOrEqual',
    },
    {
      name: 'LIKE',
      description: 'Simple pattern matching (`LIKE`)',
      type: 'contains',
    },
    {
      name: 'LIKE',
      description: 'Simple pattern matching (`LIKE`)',
      type: 'startsWith',
    },
    {
      name: 'LIKE',
      description: 'Simple pattern matching (`LIKE`)',
      type: 'endsWith',
    },
    {
      name: 'NOT_LIKE',
      description: 'Negation of simple pattern matching (`NOT LIKE`)',
      type: 'notContains',
    },
    {
      name: 'IN',
      description: 'Whether a value is within a set of values (`IN`)',
    },
    {
      name: 'NOT_IN',
      description: 'Whether a value is not within a set of values (`NOT IN`)',
    },
    {
      name: 'BETWEEN',
      description: 'Whether a value is within a range of values (`BETWEEN`)',
      type: 'inRange',
    },
    {
      name: 'NOT_BETWEEN',
      description:
        'Whether a value is not within a range of values (`NOT BETWEEN`)',
    },
    {
      name: 'IS_NULL',
      description: 'Whether a value is null (`IS NULL`)',
    },
    {
      name: 'IS_NOT_NULL',
      description: 'Whether a value is not null (`IS NOT NULL`)',
    },
  ],
}

export const filterGoups = {
  enumValues: [
    { name: 'id', field: 'id', __typename: '__EnumValue' },
    { name: 'ESPEUNIC', __typename: '__EnumValue' },
    { name: 'cif', __typename: '__EnumValue' },
    { name: 'codigo', field: 'codigo', __typename: '__EnumValue' },
    { name: 'numero_registro', __typename: '__EnumValue' },
    { name: 'numero_registro_eur', __typename: '__EnumValue' },
    { name: 'ean13', __typename: '__EnumValue' },
    { name: 'nombre', field: 'nombre', __typename: '__EnumValue' },
    {
      name: 'descripcion',
      field: 'descripcion',
      __typename: '__EnumValue',
    },
    { name: 'fecha_alta', __typename: '__EnumValue' },
    { name: 'fecha_financiado_fin', __typename: '__EnumValue' },
    { name: 'fecha_autorizacion', __typename: '__EnumValue' },
    { name: 'grupo_homogeneo_id', __typename: '__EnumValue' },
    { name: 'tipo', field: 'tipo', __typename: '__EnumValue' },
    {
      name: 'laboratorio_descripcion',
      field: 'laboratorio_descripcion',
      __typename: '__EnumValue',
    },
    { name: 'pais_id', __typename: '__EnumValue' },
    { name: 'precio_laboratorio', __typename: '__EnumValue' },
    { name: 'precio_eur', field: 'precio_eur', __typename: '__EnumValue' },
    { name: 'ESPFFAR', __typename: '__EnumValue' },
    { name: 'ESPEGTA', __typename: '__EnumValue' },
    { name: 'ESPEGTA3', __typename: '__EnumValue' },
    { name: 'ESPEGTA5', __typename: '__EnumValue' },
    { name: 'created_at', __typename: '__EnumValue' },
    { name: 'updated_at', __typename: '__EnumValue' },
    { name: 'deleted_at', __typename: '__EnumValue' },
    { name: 'usuario_alta_id', __typename: '__EnumValue' },
    { name: 'usuario_modi_id', __typename: '__EnumValue' },
  ],
}

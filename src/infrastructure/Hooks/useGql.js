export const useGql = () => {
  const getError = (errors) => {
    const err = Array.isArray(errors) ? errors[0] : errors
    let message = err?.message
    if (err?.extensions?.validation) {
      // eslint-disable-next-line prefer-destructuring
      message = Object.values(err?.extensions?.validation)[0][0]
    }
    return {
      message,
      code: err?.extensions?.category,
    }
  }

  const getErrorValidation = (errors) => {
    const err = Array.isArray(errors) ? errors[0] : errors
    if (err.extensions.validation && err.extensions.validation)
      return Object.values(err.extensions.validation)[0][0]

    return 'Error'
  }
  return { getError, getErrorValidation }
}

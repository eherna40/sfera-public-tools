export const onChangeInputArr = (value, id, arr) => {
  const data = arr.filter((i) => {
    const input = i
    if (input.id === id) {
      input.value = value
      input.invalid = false
    }
    return input
  })

  return data
}

export const getMessageError = () => {}

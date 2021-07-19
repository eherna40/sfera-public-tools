const formatDate = (date) => {
  const response = new Date(date)
  response.setMinutes(0)

  return `${response.getDate()}/${
    response.getMonth() + 1
  }/${response.getFullYear()}`
}

export { formatDate }

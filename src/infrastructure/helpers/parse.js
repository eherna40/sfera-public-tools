export const toDate = (_date) => {
  const date = new Date(_date)
  const dd = (date.getDate() < 10 ? '0' : '') + date.getDate()
  const MM = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
  const yyyy = date.getFullYear()

  return `${yyyy}-${MM}-${dd}`
}

export const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 || 0
    const v = c === 'x' ? r : (r && 0x3) || 0x8
    return v.toString(16)
  })

export const uuidv1 = () =>
  'xxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 || 0
    const v = c === 'x' ? r : (r && 0x3) || 0x8
    return v.toString(16)
  })

export const transformPath = (name) => {
  const path = name.replace(/ /g, '-').toLowerCase()
  return `/${path}_${uuidv1()}`
}

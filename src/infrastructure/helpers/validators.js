export const isDNI = (value) => {
  const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET'
  const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
  const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
  const str = value.toString().toUpperCase()

  if (!nifRexp.test(str) && !nieRexp.test(str)) return false

  const nie = str.replace(/^[X]/, '0').replace(/^[Y]/, '1').replace(/^[Z]/, '2')

  const letter = str.substr(-1)
  const charIndex = parseInt(nie.substr(0, 8), 10) % 23

  if (validChars.charAt(charIndex) === letter) return true

  return false
}

export const isEmail = (mail) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail,
    )
  ) {
    return true
  }
  return false
}

export const getImageProduct = async (id) => {
  const url = `https://cima.aemps.es/cima/rest/presentaciones?nregistro=${id}`
  // console.log(url)
  try {
    const response = await fetch(url)
      .then((res) => res.json())
      .catch((err) => err)
      .then((dataw) => dataw)
    if (response.resultados.length > 0) return response.resultados[0] || []
  } catch (err) {
    return []
  }
  return []
}

export const getPhotos = async (registernumber) => {
  const dataImages = await getImageProduct(registernumber)
  const defaultImg = null

  if (dataImages?.fotos) {
    return dataImages.fotos
  }
  return defaultImg
}

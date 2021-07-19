export const getImageProduct = async (id) => {
  const url = `https://cima.aemps.es/cima/rest/presentaciones?nregistro=${id}`

  try {
    const response = await fetch(url)
      .then((res) => res.json())
      .catch((err) => err)
      .then((data) => data)
    if (response.resultados.length > 0) return response.resultados[0] || []
  } catch (err) {
    return []
  }
  return []
}

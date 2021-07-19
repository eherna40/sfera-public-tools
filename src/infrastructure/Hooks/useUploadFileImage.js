import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGql } from './useGql'

export const useUploadFileImage = (
  mutation,
  requiredKey = 'url url_miniatura, url_250',
) => {
  const { token } = useSelector((state) => state.userReducer)
  const [loading, setLoading] = useState(false)
  const { getError } = useGql()
  const uploadImage = async (variables = {}) => {
    setLoading(true)
    try {
      const { file, id, name } = variables
      const formdata = new FormData()
      formdata.append(
        'operations',
        `{ "query": "mutation ($file: Upload!) { ${mutation}(${
          id ? 'id: $id,' : ''
        } file: $file) { ${requiredKey}} }", "variables": { "file": null } }`,
      )
      formdata.append('map', '{ "0": ["variables.file"] }')
      formdata.append('0', file, `${name}_${id}.png`)

      const myHeaders = new Headers()
      myHeaders.append('Authorization', `Bearer ${token}`)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }
      const response = await fetch(
        process.env.REACT_APP_URL_ENVIRONMENT,
        requestOptions,
      )
        .then((res) => res.json())
        .then((data) => data)

      const { data, errors } = response
      setLoading(false)

      if (data && data[mutation]) {
        return {
          error: false,
          data: data[mutation],
        }
      }

      return {
        error: getError(errors[0]),
        data: null,
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      setLoading(false)
      return {
        error: {
          message: err.message,
        },
        data: null,
      }
    }
  }

  return [uploadImage, { loading }]
}

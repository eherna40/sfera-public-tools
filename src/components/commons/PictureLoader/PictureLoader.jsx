import React, { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'
import logo from '../../../assets/img/ic_icons/ic_pictures.png'
import Paragraphs from '../Paragraphs/Paragraphs'
import { DropZone } from './styles'
const PictureLoader = ({ id, initialThumbnail, inputName, onLoad }) => {
  const [thumbnail, setThumbnail] = useState(null)
  const [lastFile, setLastFile] = useState(null)
  const [storedFiles, setStoredFiles] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDrop = useCallback((files) => setStoredFiles([...files]), [
    storedFiles,
  ])
  const clearFiles = () => setStoredFiles([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    onDrop,
  })
  useEffect(() => {
    setThumbnail(initialThumbnail)
    clearFiles()
    setLastFile(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  const files = storedFiles.map((file) => {
    if (!lastFile || file.path !== lastFile.path) {
      setThumbnail(URL.createObjectURL(file))
      setLastFile(file)
      onLoad(file)
    }
    return (
      <div key={file.path}>
        {file.path} - {file.size} bytes
      </div>
    )
  })
  return (
    <div className="tw-flex tw-flex-col tw-gap-2">
      <DropZone
        {...getRootProps()}
        className="tw-border tw-flex tw-items-center tw-justify-center tw-p-3 tw-overflow-hidden"
      >
        <input name={inputName} {...getInputProps()} />
        {thumbnail ? <img src={thumbnail} alt="pictures-logo"  /> : <img src={logo} alt="pictures-logo" width={80}  />}
        
      </DropZone>
      <div>
        <Paragraphs size="xs">{files}</Paragraphs>
      </div>
    </div>
  )
}
PictureLoader.propTypes = {
  inputName: PropTypes.string,
}
PictureLoader.defaultProps = {
  inputName: 'picture',
}

export default PictureLoader
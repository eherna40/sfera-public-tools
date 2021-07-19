import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import IcCamera from '../../../../commons/Icons/IcCamera'
import { ContentModal, Wrapper, WrapperIcon, WrapperRemove } from './styles'
import Paragraphs from '../../../../commons/Paragraphs/Paragraphs'
import Draggable from '../../../../Modal/Draggable/Draggable'
import FileInput from '../../../../commons/Form/FileInput'
import Button from '../../../../commons/Buttons/Button/Button'
import Loader from '../../../../commons/Loader/Loader'
import { GET_TOKEN_QR } from '../../../../../infrastructure/api/employee'
import useWebsocket from '../../../../../infrastructure/Hooks/webSocket/useWebsocket'
// import { actionUpdateUser } from '../../../../../infrastructure/redux/actions/user'
import colors from '../../../../../styles/colors'

const LoadFile = ({
  label,
  size,
  onChangePicture,
  avatar,
  name,
  mode,
  disabled,
  reference,
}) => {
  const { t } = useTranslation()
  const [waiting, setWaiting] = useState(false)
  const [showModal, setshowModal] = useState(false)
  const width = size === 'small' ? 'tw-w-28 tw-h-28 ' : 'tw-w-full tw-h-full'
  const [photo, setphoto] = useState({ file: avatar ? avatar.url_250 : null })
  const [getTokenQR, { data: QR }] = useMutation(GET_TOKEN_QR)
  const [connect, { data, action }] = useWebsocket()
  // const dispatch = useDispatch()
  useEffect(() => {
    if (!showModal) {
      setWaiting(false)
    }
  }, [showModal])
  console.log(data, action)
  useEffect(() => {
    switch (action) {
      case 'proceso':
        setWaiting(true)
        break
      default:
        setWaiting(false)
        break
    }
  }, [action])

  const base64ToBlob = async (encoded) => {
    const url = `${encoded}`
    const res = await fetch(url)
    const blob = await res?.blob()
    return blob
  }

  const openModal = async () => {
    await connect()
  }
  const onOpenModal = () => {
    if (disabled) return null
    try {
      setshowModal(true)
      openModal()
      getTokenQR()
    } catch (error) {
      setshowModal(false)
    }
  }

  const updateImageUser = (url) => {
    // try {
    //   dispatch(
    //     actionUpdateUser({
    //       avatar: {url_250 : url},
    //       id: userID,
    //     }),
    //   )
    // } catch (error) {
    //   console.log(error)
    // }
  }
  const loadImageFromPhone = async (url) => {
    try {
      const res = await base64ToBlob(url)
      const file = new File([res], 'user-avatar.png')

      setphoto({
        file: url,
      })
      onChangePicture({ file, delete: null })
      setWaiting(false)
      setshowModal(false)
      updateImageUser(url)
    } catch (error) {
      setWaiting(false)
      setshowModal(false)
    }
  }

  useEffect(() => {
    setphoto({ file: avatar ? avatar.url_250 : null })
  }, [avatar])

  const changeFrontGallery = async (event) => {
    setphoto({
      file: URL.createObjectURL(event.target.files[0]),
    })
    const {
      target: {
        files: [file],
      },
    } = event
    onChangePicture({ file, delete: null })
    updateImageUser(URL.createObjectURL(event.target.files[0]))
    setshowModal(false)
  }

  useEffect(() => {
    if (data) {
      loadImageFromPhone(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <Wrapper className="tw-h-full tw-bg-white">
      <div className="label tw-mb-1">
        <Paragraphs size="xs" weight="bold">
          {label && t(`labels.${label}`)}
        </Paragraphs>
      </div>

      <div
        aria-hidden
        className={`${width} tw-border tw-overflow-hidden tw-my-1`}
        onClick={mode === 'standard' ? null : onOpenModal}
      >
        <WrapperIcon
          htmlFor={name || 'file_loadfile'}
          className="tw-flex tw-justify-center tw-items-center"
        >
          {photo.file ? (
            <img
              src={photo.file}
              alt="Foto"
              style={{
                width: 'fit-content',
              }}
            />
          ) : (
            <IcCamera color={colors['primary']} size={40} />
          )}
          {mode === 'standard' && (
            <div className="tw-hidden">
              <input
                type="file"
                name={name || 'file_loadfile'}
                onChange={changeFrontGallery}
                accept="image/png, image/jpeg"
                id={name || 'file_loadfile'}
              />
            </div>
          )}
        </WrapperIcon>
      </div>
      {photo.file && (
        <WrapperRemove
          className="tw-font-Atkinson-bold"
          role="button"
          onClick={() => {
            if (disabled) return null

            setphoto({ file: null })
            onChangePicture({ file: null, delete: true })
            updateImageUser(null)
          }}
        >
          <Paragraphs className="tw-text-alert tw-underline ">
            Eliminar
          </Paragraphs>
        </WrapperRemove>
      )}
      {showModal && (
        <Draggable size="lg" footerComponent={() => null} padding={0}>
          <ContentModal className="tw-flex tw-flex-wrap">
            {waiting && (
              <div className="tw-absolute tw-bg-white tw-w-full tw-h-full tw-bg-opacity-90 tw-flex tw-items-center tw-justify-center tw-flex-col">
                <Loader />
                <Paragraphs width="bold" italic>
                  {t('labels.Esperando imagen del teléfono')}
                </Paragraphs>
                <div className="tw-mt-5">
                  <Button
                    bgWhite
                    onClick={() => setshowModal(false)}
                    label="Cancelar"
                    transparent
                  />
                </div>
              </div>
            )}
            <div className="tw-w-4/12 tw-bg-grey-300 tw-p-10 tw-flex tw-justify-between tw-flex-col">
              <div>
                <Paragraphs
                  size="xl"
                  weight="bold"
                  className="tw-text-primary tw-mb-5"
                >
                  {t('labels.Desde tu galería')}
                </Paragraphs>
                <FileInput
                  onChange={changeFrontGallery}
                  reference={reference}
                />
              </div>
              <Button
                size="large"
                primary
                bgWhite
                label="Volver a la ficha"
                onClick={() => setshowModal(false)}
              />
            </div>

            <div className="tw-w-8/12 tw-flex tw-flex-col tw-p-10 tw-items-start tw-justify-between">
              <Paragraphs size="xl" weight="bold" className="tw-text-primary">
                {t('labels.Desde tu teléfono')}
              </Paragraphs>
              <div className="tw-text-center tw-w-full tw-flex tw-items-center tw-justify-center">
                {QR && (
                  <img
                    width="200"
                    src={`data:image/svg+xml;base64,${QR?.obtenerQRSubirImagenMovil?.qr_base64}`}
                    alt="Generador de Códigos QR Codes"
                  />
                )}
              </div>

              <ul className="tw-list-disc tw-mt-4">
                <li>
                  <Paragraphs size="sm">
                    {t('labels.Escanea el QR que aparece en la pantalla')}
                  </Paragraphs>
                </li>

                <li>
                  <Paragraphs size="sm">
                    {t(
                      'labels.Cuando tu teléfono detecte el QR, dirígete hacia la web que te proporciona',
                    )}
                  </Paragraphs>
                </li>
                <li>
                  <Paragraphs size="sm">
                    {t('labels.Activa la cámara, y toma tu fotografía')}
                  </Paragraphs>
                </li>
              </ul>
            </div>
          </ContentModal>
        </Draggable>
      )}
    </Wrapper>
  )
}

LoadFile.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  name: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  theme: PropTypes.string,
}
LoadFile.defaultProps = {
  reference: () => null,
  theme: 'green',
}

export default LoadFile

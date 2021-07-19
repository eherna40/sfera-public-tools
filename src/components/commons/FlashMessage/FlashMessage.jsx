import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import IcSuccess from '../Icons/IcSuccess'
import IcAlert from '../Icons/IcAlert'
import { Container } from './styles'
import { actionCloseFlashMessage } from '../../../infrastructure/redux/actions/flashMessage'

const FlashMessage = () => {
  const dispatch = useDispatch()

  const { open, mode, description, title } = useSelector(
    (state) => state.flashMessageReducer,
  )

  useEffect(() => {
    if (open)
      setTimeout(() => {
        dispatch(actionCloseFlashMessage())
      }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const geticon = () => {
    switch (mode) {
      case 'success':
        return <IcSuccess />

      case 'alert':
        return <IcAlert />
      default:
        return null
    }
  }

  return (
    <Container
      className={`${
        open ? 'open' : 'close'
      } FlashMessage tw-transition-all tw-z-50 tw-top-5 tw-right-5 tw-fixed tw-flex tw-items-center tw-justify-center tw-flex-col sm:tw-flex-row sm:tw-items-center tw-bg-white tw-shadow tw-rounded-md tw-py-5 tw-pl-6`}
    >
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-border-b sm:tw-border-b-0 tw-w-full sm:tw-w-auto tw-pb-4 sm:tw-pb-0">
        <div className="tw-text-green-500 tw-pt-1">{geticon()}</div>
      </div>
      <div>
        <div className="tw-text-sm tw-font-medium tw-ml-3">{title}</div>
        <div className="tw-text-sm tw-tracking-wide tw-text-gray-500 tw-mt-4 sm:tw-mt-0 sm:tw-ml-4">
          {description}
        </div>
      </div>
    </Container>
  )
}

export default FlashMessage

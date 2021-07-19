import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  WrapperInfo,
  WrapperNumber,
  StateBar,
  WrapperTitle,
  WrapperBody,
} from './styles'
import { useTranslation } from 'react-i18next'

const BulletPoint = ({
  id,
  number,
  title,
  body,
  active,
  lastItem,
  complete,
  gotToStep,
  isUpdate,
}) => {
  const { t } = useTranslation()
  const [stateactive, setactive] = useState({
    active: false,
    complete: false,
  })

  useEffect(() => {
    setactive({ active, complete })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  useEffect(() => {
    setactive({ active, complete })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete])

  const StateIcon = (type) => {
    if (stateactive.complete) {
      return <span className={`material-icons tw-${type}-white`}>done</span>
    }
    if (stateactive.active) {
      return <span className={`tw-${type}-white`}>{number}</span>
    }
    return <span className={`tw-${type}-primary`}>{number}</span>
  }

  const StateColor = (type) => {
    if (stateactive.complete) {
      if (type === 'border') {
        return `tw-bg-primary`
      }
      return `tw-${type}-primary`
    }
    if (stateactive.active) {
      if (type === 'border') {
        return `tw-bg-primary`
      }
      return `tw-${type}-primary`
    }
    if (type === 'border') {
      return `tw-${type}-primary tw-bg-white tw-border-2`
    }
    return `tw-${type}-secondary tw-${type}-opacity-10`
  }

  return (
    <Wrapper
      id={id}
      className={`tw-relative tw-flex tw-h-full`}
    >
      <div
        aria-hidden
        className={`tw-cursor-pointer  ${isUpdate ? 'tw-hidden' : 'tw-flex'}`}
      >
        <div className="tw-w-7 tw-h-full tw-flex">
          {!lastItem && (
            <div className="tw-flex tw-justify-center tw-items-center tw-w-7 tw-h-full">
              <StateBar
                className={`${
                  stateactive.complete
                    ? `tw-bg-primary`
                    : `tw-bg-secondary tw-bg-opacity-10`
                } tw-absolute tw-top-0 tw-flex tw-w-0.5 tw-h-full`}
              />
              <StateBar
                className={`${StateColor(
                  'bg',
                )} tw-absolute tw-top-0 tw-flex tw-w-0.5 tw-h-3/5`}
              />
            </div>
          )}
        </div>
        <WrapperNumber
          className={`${StateColor(
            'border',
          )} tw-absolute tw-top-0 tw-flex tw-justify-center tw-items-center tw-w-7 tw-h-7 tw-rounded-full`}
        >
          {StateIcon('text')}
        </WrapperNumber>
      </div>
      <WrapperInfo

        aria-hidden
        onClick={gotToStep}
        className={`tw-pl-4 tw-pt-2 tw-cursor-pointer ${isUpdate && active && 'tw-bg-black tw-bg-opacity-10 tw-border tw-border-primary'}`}
      >
        <WrapperTitle className="tw-pb-2">{t(`labels.${title}`)}</WrapperTitle>
        <WrapperBody>{t(`messages.${body}`)}</WrapperBody>
      </WrapperInfo>
    </Wrapper>
  )
}

BulletPoint.propTypes = {
  id: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  active: PropTypes.bool,
  complete: PropTypes.bool,
  lastItem: PropTypes.bool,
  theme: PropTypes.string,
}

BulletPoint.defaultProps = {
  number: 0,
  title: 'Title Here',
  body: 'Body here',
  active: false,
  complete: false,
  lastItem: false,
  theme: 'green',
}

export default BulletPoint

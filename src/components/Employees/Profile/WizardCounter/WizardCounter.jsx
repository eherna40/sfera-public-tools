import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'
import BulletPoint from './BulletPoint/BulletPoint'

const WizardCounter = ({ id, wizardstep, steps, gotToStep, isUpdate }) => {
  const [currentwizardstep, setcurrentwizardstep] = useState(wizardstep)
  useEffect(() => {
    setcurrentwizardstep(wizardstep)
  }, [wizardstep])

  const setSteps = () =>
    steps.map((i) => (
      <BulletPoint
        isUpdate={isUpdate}
        gotToStep={() => gotToStep(i.number)}
        key={`BulletPoint-${i.number}`}
        number={i.number}
        title={i.title}
        body={i.body}
        active={i.number === currentwizardstep}
        complete={i.number < currentwizardstep}
        lastItem={i.number === steps.length}
      />
    ))

  return (
    <Wrapper isUpdate={isUpdate} id={id} className="tw-h-full tw-w-full tw-bg-secondary tw-bg-opacity-10">
      {setSteps()}{' '}
    </Wrapper>
  )
}

WizardCounter.propTypes = {
  id: PropTypes.string,
  steps: PropTypes.array,
  wizardstep: PropTypes.number,
}

export default WizardCounter

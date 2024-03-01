import React from 'react'

import "./_stepper.scss"

export const Stepper = ({ currentStep, steps }: { currentStep: number, steps: React.ReactElement[] }) => {
  return (
    <div className="stepper">
      {steps.map((e) => {
        return (<div style={{}} key={e.key}>
          {e}
          {steps.indexOf(e) < (steps.length-1) ? <div className='stepper_divider' ></div> : null}
        </div>);
      })}
    </div>
  )
}

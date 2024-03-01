import React from 'react'

import "./_step.scss"

export const Step = ({isActive, index, title, subtitle}:{isActive: boolean, index: number, title: string, subtitle: string}) => {
  return (
    <div className={`step ${isActive ? "active": ""}`}>
        <div className="step_leading">
            {index}
        </div>
        <div className="step_title">
            {title}
        </div>
        <div className="step_subtitle">
            {subtitle}
        </div>
    </div>
  )
}

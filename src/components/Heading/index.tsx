import React from 'react'

import './stye.scss'

type headingProp = {
  title: string,
  ico: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function Heading({title, ico:Ico}:headingProp) {
  return (
    <div className='heading'>
      <h2><span>{<Ico />}</span> {title}</h2>
    </div>
  )
}

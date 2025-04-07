import React from 'react'

export const Logo = ({...props}) => {
  return (
    <div {...props} className="text-5xl font-bold font-mono flex">
        bruno<span className="font-normal">(azvd)</span><span className="text-4xl blink mt-1.5">▌</span>
    </div>
  )
}

import React from 'react'

export const HeaderText = ({text}) => {
  return (
    <div className="flex mx-auto max-w-2xl md:text-center md:justify-center">
    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
      {text}
    </h2>
  </div>
  )
}

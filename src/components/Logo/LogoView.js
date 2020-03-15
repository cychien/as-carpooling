import React from 'react'

export default function Logo({ size }) {
  if (size === 'large') {
    return (
      <div className="flex items-center">
        <div className="tracking-wider text-2xl border-solid border-secondary border-2 text-secondary font-medium px-2 mr-2 h-10 flex items-center">
          AS
        </div>
        <div className="tracking-widest text-3xl text-primary font-medium">
          共乘
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center">
      <div className="tracking-wider text-xl border-solid border-secondary border-2 text-secondary font-medium px-2 mr-2 h-8 flex items-center">
        AS
      </div>
      <div className="tracking-widest text-2xl text-primary font-medium">
        共乘
      </div>
    </div>
  )
}

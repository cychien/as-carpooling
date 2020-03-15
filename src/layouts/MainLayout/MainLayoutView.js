import React from 'react'
import Headroom from 'react-headroom'
import Logo from '../../components/Logo'

function MainLayoutView({ children }) {
  return (
    <div>
      <Headroom>
        <div className="px-2 sm:px-10 py-5 flex justify-between items-center ">
          <Logo />
          <div>
            <a
              href="mailto:"
              className="text-gray border-gray p-2 rounded font-medium text-sm border-2"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </Headroom>
      {children}
    </div>
  )
}

export default MainLayoutView

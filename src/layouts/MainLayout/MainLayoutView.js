import React from 'react'
import Headroom from 'react-headroom'
import Logo from '../../components/Logo'

function MainLayoutView({ children }) {
  return (
    <div>
      <div>
        <div className="px-2 sm:px-10 py-5 flex justify-between items-center ">
          <Logo />
          <div style={{ zIndex: 9999 }}>
            <a
              href="mailto:"
              className="text-gray border-gray p-2 rounded font-medium text-sm border-2 cursor-pointer hover:bg-gray-100"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default MainLayoutView

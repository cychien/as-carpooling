import React from 'react'
import { navigate } from 'gatsby'
import OutsideListener from '../../components/OutsideListener'

function MainLayoutView({ children }) {
  return <div className="main-layout__wrapper">{children}</div>
}

export default MainLayoutView

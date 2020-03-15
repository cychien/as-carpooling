import React, { Fragment, useState } from 'react'
import MainLayoutView from './MainLayoutView'

function MainLayoutContainer(props) {
  return (
    <Fragment>
      <MainLayoutView children={props.children} />
    </Fragment>
  )
}

export default MainLayoutContainer

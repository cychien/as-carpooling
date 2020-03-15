import React, { useState } from 'react'
import { navigate } from 'gatsby'
import MainLayout from '../layouts/MainLayout'
import SEO from '../components/SEO'

function Index() {
  return (
    <MainLayout>
      <SEO />
    </MainLayout>
  )
}

/*
export const pageQuery = graphql`
`
*/

export default Index

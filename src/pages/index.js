import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import styled from 'styled-components'

//justify-content:space-around;

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          Presentation
      </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
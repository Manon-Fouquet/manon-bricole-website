import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          Presentation
      </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
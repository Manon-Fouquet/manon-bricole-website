import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'

//justify-content:space-around;

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          You can email me at ms.manonfouquet[at]gmail.com
      </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
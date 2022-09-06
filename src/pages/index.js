import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
      </Layout>
    </div>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
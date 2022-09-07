import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <div>
      <main>
      <Layout pageTitle="Home Page">
      </Layout>
      </main>
    </div>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
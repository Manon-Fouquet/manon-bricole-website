import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import VisitCard from '../components/visitCard'

//justify-content:space-around;

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <VisitCard email="ms.manonfouquet@gmail.com" phone="+33 (0)6 41 69 70 83" ></VisitCard>
      </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
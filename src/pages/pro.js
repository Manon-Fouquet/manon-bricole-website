import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Gallery from '../components/gallery'

import{
  SubHeaders
} from '../components/layout.module.scss'

const Pro = ({data}) => {

  return (
      <Layout pageTitle="Work projects">
     
      <h2 className={SubHeaders}>A collection of work related articles - [UNDER CONSTRUCTION]</h2>
   
      <p> Here are a few projects on which I had the opportunity to work, either as developper, project manager
        or system expert.</p>
        <Gallery data={data}></Gallery>
        
      </Layout>
  )
}


export const query = graphql`query ProQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/work/"}}
    sort: {fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC]}
  ) {
    nodes {
      html
      frontmatter {
        title
        summary
        date
        link
        keywords
        picture {
          childImageSharp {
            gatsbyImageData(
              height: 200
              )
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Professional portfolio" />
export default Pro
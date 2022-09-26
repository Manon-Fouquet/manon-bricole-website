import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Gallery from '../components/gallery'

import{
  subHeaders
} from '../components/layout.module.scss'

const Pro = ({data}) => {

  return (
      <Layout pageTitle="DIY projects">
        <h2 className={subHeaders}>Some DIY projects</h2>
   
        <p> I love building things by myself. Here are a few DIY works in my house and other small projects.
        </p>
        <Gallery data={data}></Gallery>
        
      </Layout>
  )
}


export const query = graphql`query PersoQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/DIY/"}}
    sort: {
      fields: [frontmatter___date, frontmatter___title], 
      order: [DESC, ASC]}) {
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Personal portfolio" />
export default Pro
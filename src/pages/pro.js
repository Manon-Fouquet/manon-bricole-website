import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Gallery from '../components/gallery'

// Could not manage to use gatsby-plugin-image to retrieve img from mdx path

const Pro = ({data}) => {

  return (
      <Layout pageTitle="Work projects">
        
        <h3>A collection of work related articles - [UNDER CONSTRUCTION]</h3>
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